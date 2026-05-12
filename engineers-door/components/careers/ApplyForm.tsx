"use client";

import { useState } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    portfolio: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="bg-[#070b1f] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              Apply Now
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Send Your Application
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto text-base">
            Fill in the form below and we'll get back to you within 3 business
            days.
          </p>
        </div>

        <div className="bg-[#0d1435] border border-white/5 rounded-2xl p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#00c2ff]/10 border border-[#00c2ff]/30 flex items-center justify-center text-[#00c2ff] mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Application Received!</h3>
              <p className="text-gray-400 text-sm max-w-xs">
                Thanks for applying. Our team will review your application and
                reach out within 3 business days.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", position: "", portfolio: "", message: "" }); }}
                className="mt-6 text-[#00c2ff] text-sm hover:underline"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="apply-name">
                    Full Name <span className="text-[#00c2ff]">*</span>
                  </label>
                  <input
                    id="apply-name"
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
                  <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="apply-email">
                    Email Address <span className="text-[#00c2ff]">*</span>
                  </label>
                  <input
                    id="apply-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#0a0f2c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00c2ff]/50 transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Position */}
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="apply-position">
                  Position Applying For <span className="text-[#00c2ff]">*</span>
                </label>
                <select
                  id="apply-position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full bg-[#0a0f2c] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00c2ff]/50 transition-colors duration-200 text-white"
                >
                  <option value="" disabled className="text-gray-600">Select a position</option>
                  <option value="senior-fullstack">Senior Full-Stack Engineer</option>
                  <option value="mobile-dev">Mobile Developer (React Native)</option>
                  <option value="devops">DevOps / Cloud Engineer</option>
                  <option value="designer">UI/UX Designer</option>
                  <option value="backend-python">Backend Engineer (Python)</option>
                  <option value="consultant">IT Consultant</option>
                  <option value="other">Other / General Application</option>
                </select>
              </div>

              {/* Portfolio / LinkedIn */}
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="apply-portfolio">
                  Portfolio / LinkedIn / GitHub URL
                </label>
                <input
                  id="apply-portfolio"
                  name="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://github.com/yourprofile"
                  className="w-full bg-[#0a0f2c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00c2ff]/50 transition-colors duration-200"
                />
              </div>

              {/* Cover note */}
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="apply-message">
                  Cover Note <span className="text-[#00c2ff]">*</span>
                </label>
                <textarea
                  id="apply-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about yourself, your experience, and why you'd like to join Engineers Door..."
                  className="w-full bg-[#0a0f2c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00c2ff]/50 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00c2ff] text-[#0a0f2c] py-3.5 rounded-lg font-semibold text-sm hover:bg-white transition-colors duration-200"
              >
                Submit Application →
              </button>

              <p className="text-center text-gray-600 text-xs">
                We review every application carefully and respond within 3 business days.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
