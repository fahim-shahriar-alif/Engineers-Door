import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Engineers Door",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-6">
            <p>Last updated: May 2026</p>
            <p>
              Engineers Door ("we", "our", or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              and safeguard your information when you visit our website or use
              our services.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8 mb-3">Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email
              address, and message content when you submit a contact or
              application form on our website.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
            <p>
              We use the information you provide solely to respond to your
              inquiries, process applications, and improve our services. We do
              not sell or share your personal data with third parties.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8 mb-3">Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience.
              You can choose to disable cookies through your browser settings.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8 mb-3">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
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
