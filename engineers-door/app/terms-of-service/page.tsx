import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — Engineers Door",
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <section className="bg-[#0a0f2c] min-h-screen pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-6">
            <p>Last updated: May 2026</p>
            <p>
              By accessing or using the Engineers Door website and services, you
              agree to be bound by these Terms of Service. Please read them
              carefully.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8 mb-3">Use of Services</h2>
            <p>
              You agree to use our website and services only for lawful purposes
              and in a manner that does not infringe the rights of others or
              restrict their use of the site.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8 mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and
              code, is the property of Engineers Door and is protected by
              applicable intellectual property laws.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
            <p>
              Engineers Door shall not be liable for any indirect, incidental,
              or consequential damages arising from your use of our website or
              services.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8 mb-3">Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time.
              Continued use of the site after changes constitutes acceptance of
              the new terms.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8 mb-3">Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:hello@engineersdoor.com" className="text-[#00c2ff] hover:underline">
                hello@engineersdoor.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
