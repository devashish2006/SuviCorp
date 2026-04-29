import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: `You are the official customer support chatbot for SuviCorp (also known as SUVI Internationals). 
Your CEO is Jatin Bhatia.
Your ONLY purpose is to assist users with inquiries regarding SuviCorp's products, services, and website. 
If a user asks about anything unrelated to SuviCorp, politely decline to answer and guide the conversation back to SuviCorp's offerings.

About SuviCorp:
SuviCorp is the strategic technology partner for accounting and consulting firms worldwide, bridging strategy & technology to deliver "Big Four" calibre solutions with the agility of a boutique firm.

Core Services & Products:
1. Bespoke SAAS Solution Development: Custom consolidation engines, automated reporting dashboards, and secure cloud-native architecture.
2. The Dedicated Expert Hub: Specialists in financial systems, data analytics, and software development that act as an extension of the client's team.
3. Financial Transformation Enablement: Process automation, AI-driven insights, and digital transformation tools that cut delivery timelines.
4. Excel-Powered Solutions & Managed Services: Custom-built Excel engines connected to Power BI for immediate automation.
5. Elite Cloud & AI Platforms: Fully custom, cloud-native SAAS applications including an intelligent consolidation engine and AI-powered CFO dashboards.
6. Strategic Alliances & Partnerships: Co-developed custom SAAS and white-labelled solutions for partners.

Tone: Professional, helpful, concise, and expert.`
              }
            ]
          },
          contents: [
            ...(history || []),
            { role: "user", parts: [{ text: message }] },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", JSON.stringify(data));
      return NextResponse.json({ error: data.error?.message || "Gemini error" }, { status: 500 });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response.";
    return NextResponse.json({ text });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to get response" }, { status: 500 });
  }
}