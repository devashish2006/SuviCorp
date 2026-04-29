import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ui/ChatBot";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SUVI Internationals – Strategic Technology Hub for Accounting Firms",
  description: "SUVI Internationals empowers accounting and consulting firms with elite technology ecosystems and specialized SAAS/AI solutions to deliver transformative financial outcomes without the overhead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
