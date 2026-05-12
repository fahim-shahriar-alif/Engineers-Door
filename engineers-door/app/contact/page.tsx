import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import FAQ from "@/components/ui/FAQ";
import { contactFAQ } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Engineers Door. Tell us about your project and we'll get back to you within 24 hours.",
  openGraph: {
    title: "Contact Us — Engineers Door",
    description: "Tell us about your project. We respond within 24 hours.",
    url: "https://www.engineersdoor.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Contact Us — Engineers Door",
    description: "Tell us about your project. We respond within 24 hours.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactSection />
      <FAQ items={contactFAQ} title="Before You Reach Out" />
      <Footer />
    </main>
  );
}
