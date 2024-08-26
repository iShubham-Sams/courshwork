import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import DesktopSidebar from "@/components/layout/DesktopSidebar";
import MobileNavbar from "@/components/layout/MobileNavbar";
import { Toaster } from "@/components/ui/toast/toaster";
import RightBar from "@/components/home/rightBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ZuAI: 24/7 AI Study Buddy - Score Like a Pro",
  description: "ZuAI: 24/7 AI Study Buddy - Score Like a Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
       sm:grid sm:grid-cols-[12%_78%_10%] md:grid-cols-[12%_81%_7%]  bg-bgPrimary`}
        suppressHydrationWarning={true}>
        <DesktopSidebar />
        <MobileNavbar />
        {children}
        <RightBar />
        <Toaster />
      </body>
    </html>
  );
}
