import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";
import FAQ from "@/components/ui/FAQ";
import { servicesFAQ } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the full range of IT services offered by Engineers Door — from software development to cloud infrastructure and IT consulting.",
  openGraph: {
    title: "Services — Engineers Door",
    description: "Software development, mobile apps, cloud, DevOps, UI/UX design, IT consulting, and talent solutions.",
    url: "https://www.engineersdoor.com/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Services — Engineers Door",
    description: "Software development, mobile apps, cloud, DevOps, UI/UX design, IT consulting, and talent solutions.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <FAQ items={servicesFAQ} title="Common Questions About Our Services" />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
