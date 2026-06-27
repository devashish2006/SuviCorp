import type { Metadata } from "next";
import "./globals.css";
import ChatBot from "@/components/ui/ChatBot";

export const metadata: Metadata = {
  title: "Suvicorp – Strategic Technology Hub for Accounting Firms",
  description: "Suvicorp empowers accounting and consulting firms with elite technology ecosystems and specialized SAAS/AI solutions to deliver transformative financial outcomes without the overhead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
