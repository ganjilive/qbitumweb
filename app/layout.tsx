import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
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
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="bg-[#07080f]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
