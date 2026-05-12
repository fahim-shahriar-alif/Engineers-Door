import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="why-us"><WhyUs /></div>
      <div id="tech"><TechStack /></div>
      <Footer />
    </main>
  );
}
