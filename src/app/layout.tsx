import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import DesktopSidebar from "@/components/layout/DesktopSidebar";
import MobileNavbar from "@/components/layout/MobileNavbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
       sm:grid sm:grid-cols-[10%_90%] xl:grid-cols-[7%_93%] bg-bgPrimary`}>
        <DesktopSidebar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  );
}
