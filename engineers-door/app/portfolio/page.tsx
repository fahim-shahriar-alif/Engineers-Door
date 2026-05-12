import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata = {
  title: "Portfolio — Engineers Door",
  description:
    "Explore our work — real projects, real results. See how Engineers Door has helped businesses build and scale with technology.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
      <Footer />
    </main>
  );
}
