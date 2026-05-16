"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useToast } from "@/components/ui/Toast";

const contactInfo = [
  {
    icon: "ph:envelope-bold",
    label: "Email Us",
    value: "engineersdoor.2022@gmail.com",
    href: "mailto:engineersdoor.2022@gmail.com",
  },
  {
    icon: "ph:phone-bold",
    label: "Call Us",
    value: "+880 1811-826554",
    href: "tel:+8801811826554",
  },
  {
    icon: "ph:map-pin-bold",
    label: "Our Office",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
  {
    icon: "ph:clock-bold",
    label: "Working Hours",
    value: "Sun – Thu, 9am – 6pm (BST)",
    href: "#",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Message sent! We'll get back to you within 24 hours.", "success");
  };

  return (
    <section className="bg-[#0a0f2c] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left — Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Contact Information
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reach out through any of the channels below or fill in the form
                and we'll respond promptly.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 bg-[#0d1435] border border-white/5 rounded-xl p-5 hover:border-[#00c2ff]/30 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00c2ff]/10 border border-[#00c2ff]/20 flex items-center justify-center text-[#00c2ff] flex-shrink-0 group-hover:bg-[#00c2ff]/20 transition-colors duration-200">
                    <Icon icon={info.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">{info.label}</p>
                    <p className="text-white text-sm font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-500 text-xs">
                Average response time: under 24 hours
              </span>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#0d1435] border border-white/5 rounded-2xl p-8 md:p-10">

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00c2ff]/10 border border-[#00c2ff]/30 flex items-center justify-center text-[#00c2ff] mb-5">
                    <Icon icon="ph:check-bold" className="w-8 h-8" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 text-[#00c2ff] text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-white mb-6">
                    Send Us a Message
                  </h2>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="name">
                        Full Name <span className="text-[#00c2ff]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#0a0f2c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00c2ff]/50 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="email">
                        Email Address <span className="text-[#00c2ff]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-[#0a0f2c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00c2ff]/50 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="subject">
                      Subject <span className="text-[#00c2ff]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#0a0f2c] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00c2ff]/50 transition-colors duration-200 text-white"
                    >
                      <option value="" disabled className="text-gray-600">Select a subject</option>
                      <option value="software-development">Software Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="cloud-devops">Cloud & DevOps</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="talent">Talent Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="message">
                      Message <span className="text-[#00c2ff]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or any questions you have..."
                      className="w-full bg-[#0a0f2c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00c2ff]/50 transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#00c2ff] text-[#0a0f2c] py-3.5 rounded-lg font-semibold text-sm hover:bg-white transition-colors duration-200"
                  >
                    Send Message →
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
