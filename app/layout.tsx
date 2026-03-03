import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/context/TransitionContext";
import PageTransitionOverlay from "@/components/PageTransitionOverlay";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";

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
  description: "Full-Stack Developer, Robotics, 3D Products",
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
        <TransitionProvider>
          <Nav />
          {children}
          <PageTransitionOverlay />
          <Cursor />
        </TransitionProvider>
      </body>
    </html>
  );
}
