import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import Perks from "@/components/careers/Perks";
import OpenPositions from "@/components/careers/OpenPositions";
import ApplyForm from "@/components/careers/ApplyForm";

export const metadata = {
  title: "Careers — Engineers Door",
  description:
    "Join the Engineers Door team. We're looking for talented engineers, designers, and strategists who love building great technology.",
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
