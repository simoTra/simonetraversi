import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Simone Traversi",
  description: "Full-Stack Developer & Creative Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${inter.variable} font-sans bg-[#1A1A1A] text-[#F4F4F4] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
