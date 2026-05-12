import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import Perks from "@/components/careers/Perks";
import OpenPositions from "@/components/careers/OpenPositions";
import ApplyForm from "@/components/careers/ApplyForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Engineers Door team. We're looking for talented engineers, designers, and strategists who love building great technology.",
  openGraph: {
    title: "Careers — Engineers Door",
    description: "Join our remote-first team of engineers, designers, and strategists. 12+ open roles.",
    url: "https://www.engineersdoor.com/careers",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Careers — Engineers Door",
    description: "Join our remote-first team of engineers, designers, and strategists. 12+ open roles.",
    images: ["/og-image.png"],
  },
};

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <CareersHero />
      <Perks />
      <OpenPositions />
      <ApplyForm />
      <Footer />
    </main>
  );
}
