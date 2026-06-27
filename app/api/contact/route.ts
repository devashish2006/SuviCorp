import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Make sure to set RESEND_API_KEY in your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, inquiryDetails } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required globally' },
        { status: 400 }
      );
    }

    const data = await resend.batch.send([
      // 1. Email to the Admin / SuviCorp Team
      {
        from: 'Partnerships <onboarding@resend.dev>', // Update this to your verified Resend domain in production
        to: ['mshubh612@gmail.com'], // Update to the email address where you want to receive these details
        subject: `New Partnership Inquiry from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone || 'Not provided'}
          
          Inquiry Details:
          ${inquiryDetails || 'Not provided'}
        `,
        html: `
          <h2>New Partnership Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <br/>
          <h3>Inquiry Details:</h3>
          <p>${inquiryDetails?.replace(/\\n/g, '<br>') || 'Not provided'}</p>
        `,
      },
      // 2. Auto-reply Email to the Client
      {
        from: 'Partnerships <onboarding@resend.dev>', // Update this to your verified Resend domain in production
        to: [email],
        subject: 'Thank you for your interest in Suvicorp',
        text: `Hi ${name},\n\nThank you for reaching out to partner with us! We have received your inquiry and our team will get back to you shortly.\n\nBest regards,\nThe Suvicorp Team`,
        html: `
          <h3>Hi ${name},</h3>
          <p>Thank you for reaching out to partner with us! We have received your inquiry and our team will get back to you shortly.</p>
          <br/>
          <p>Best regards,<br/><strong>The Suvicorp Team</strong></p>
        `,
      }
    ]);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send communication' },
      { status: 500 }
    );
  }
}
