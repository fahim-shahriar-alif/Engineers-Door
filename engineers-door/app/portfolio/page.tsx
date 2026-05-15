import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioStats from "@/components/portfolio/PortfolioStats";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our work — real projects, real results. See how Engineers Door has helped businesses build and scale with technology.",
  openGraph: {
    title: "Portfolio — Engineers Door",
    description: "Real projects, real results. See how we've helped businesses build and scale.",
    url: "https://www.engineersdoor.com/portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Portfolio — Engineers Door",
    description: "Real projects, real results. See how we've helped businesses build and scale.",
    images: ["/og-image.png"],
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioGrid />
      <PortfolioCTA />
      <Footer />
    </main>
  );
}
