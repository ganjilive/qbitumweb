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
    default: "Qbitum Solutions — Product Studio & Development Teams",
    template: "%s | Qbitum Solutions",
  },
  description:
    "Qbitum Solutions is a product studio and engineering partner — helping startups launch MVPs, scaling teams with complete development squads, and advising on design and architecture.",
  keywords: [
    "product studio",
    "MVP development",
    "dedicated development teams",
    "staff augmentation",
    "software consultancy",
    "startup engineering",
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
