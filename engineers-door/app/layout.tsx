import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/ui/PageTransition";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { ToastProvider } from "@/components/ui/Toast";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.engineersdoor.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Engineers Door — Technology Solutions",
    template: "%s | Engineers Door",
  },
  description:
    "Engineers Door delivers end-to-end software development, IT consulting, and technology solutions that drive real business growth.",
  keywords: [
    "IT company", "software development", "web development", "mobile apps",
    "cloud devops", "IT consulting", "tech talent", "Engineers Door",
  ],
  authors: [{ name: "Engineers Door", url: BASE_URL }],
  creator: "Engineers Door",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Engineers Door",
    title: "Engineers Door — Technology Solutions",
    description:
      "End-to-end software development, IT consulting, and technology solutions that drive real business growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Engineers Door — Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineers Door — Technology Solutions",
    description:
      "End-to-end software development, IT consulting, and technology solutions that drive real business growth.",
    images: ["/og-image.png"],
    creator: "@engineersdoor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <PageTransition>{children}</PageTransition>
          <ScrollToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
