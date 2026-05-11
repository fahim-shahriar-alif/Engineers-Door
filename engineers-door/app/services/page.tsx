import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Services — Engineers Door",
  description:
    "Explore the full range of IT services offered by Engineers Door — from software development to cloud infrastructure and IT consulting.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
