import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";

export const metadata = {
  title: "About Us — Engineers Door",
  description:
    "Learn about Engineers Door — who we are, what drives us, and the team behind the technology.",
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
