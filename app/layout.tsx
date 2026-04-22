import type { Metadata } from "next";
import { Urbanist, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Qbitum Solutions — Product & Cloud Engineering",
    template: "%s | Qbitum Solutions",
  },
  description:
    "Qbitum Solutions is a trailblazing tech company, transforming businesses with cutting-edge cloud engineering, AI/ML, product development, and digital transformation.",
  keywords: [
    "cloud engineering",
    "AI/ML",
    "product development",
    "digital transformation",
    "startup",
    "software development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${spaceMono.variable}`}>
      <body className="bg-[#07080f]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
