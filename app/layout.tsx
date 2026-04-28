import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kishan Kumar | Portfolio",
  description: "Mobile App Developer / Full-Stack Developer - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} antialiased min-h-screen flex flex-col bg-background text-body`}
      >
        <Navbar />
        <main className="flex-grow flex flex-col pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
