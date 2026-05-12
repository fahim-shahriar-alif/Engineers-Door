import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact Us — Engineers Door",
  description:
    "Get in touch with Engineers Door. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
