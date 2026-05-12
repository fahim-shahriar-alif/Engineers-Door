import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Engineers Door — who we are, what drives us, and the team behind the technology.",
  openGraph: {
    title: "About Us — Engineers Door",
    description: "Meet the team and learn the story behind Engineers Door.",
    url: "https://www.engineersdoor.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    title: "About Us — Engineers Door",
    description: "Meet the team and learn the story behind Engineers Door.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Values />
      <Team />
      <Footer />
    </main>
  );
}
