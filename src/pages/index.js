import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/Section2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <Hero />
      <QuickLinks />
    </div>
  );
}
