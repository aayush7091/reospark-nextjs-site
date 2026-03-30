"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircleQuestion } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Project timelines vary based on complexity, but most projects take 4-12 weeks from start to finish.",
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes! We provide maintenance and support packages to keep your software running smoothly.",
    },
    {
      q: "What industries do you serve?",
      a: "We work with clients across education, e-commerce, healthcare, manufacturing, and many other industries.",
    },
    {
      q: "Can you work with our existing systems?",
      a: "Absolutely! We specialize in integrations and can work with your current tech stack.",
    },
    {
      q: "What is your pricing structure?",
      a: "Pricing varies by project scope. Contact us for a custom quote tailored to your needs.",
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-teal-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-teal-50 pb-32 pt-32 lg:pt-40">
        {/* Soft Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -left-[10%] top-0 h-[300px] w-[500px] rounded-full bg-teal-200 blur-[100px]"></div>
          <div className="absolute right-[10%] top-[20%] h-[200px] w-[300px] rounded-full bg-emerald-100 blur-[80px]"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Get in <span className="text-teal-600">Touch</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600 md:text-xl">
            Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        
        {/* Contact Info Cards (Overlapping the Hero) */}
        <div className="-mt-16 mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email Card */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
              <Mail size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Email Us</h3>
            <a href="mailto:info@reospark.com" className="font-medium text-gray-600 transition-colors hover:text-teal-600">
              info@reospark.com
            </a>
            <p className="mt-2 text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
          </div>

          {/* Phone Card */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
              <Phone size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Call Us</h3>
            <a href="tel:+919211238008" className="font-medium text-gray-600 transition-colors hover:text-teal-600">
              +91 9211238008
            </a>
            <p className="mt-2 text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
          </div>

          {/* Location Card */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/10 sm:col-span-2 lg:col-span-1">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
              <MapPin size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Visit Us</h3>
            <p className="font-medium text-gray-600">
            3rd floor, Pulse Park, A-150, A Block, Sector 63, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Form Section */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-Column Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Name <span className="text-teal-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Email <span className="text-teal-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none"
                    />
                  </div>
                </div>

                {/* 2-Column Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none"
                    />
                  </div>
                </div>

                {/* Full Width Select */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-900 transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none"
                  >
                    <option value="" className="text-gray-400">Select a service</option>
                    <option value="development">Custom Development</option>
                    <option value="woocommerce">E-Commerce / WooCommerce</option>
                    <option value="crm">CRM Solutions</option>
                    <option value="design">UI/UX & Web Design</option>
                    <option value="support">IT Support</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                {/* Textarea */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Message <span className="text-teal-500">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center rounded-xl bg-teal-600 px-6 py-4 font-bold text-white transition-all hover:bg-teal-500 hover:shadow-[0_0_30px_-10px_rgba(20,184,166,0.6)]"
                >
                  <Send size={20} className="mr-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-5">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <MessageCircleQuestion size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">FAQs</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-teal-100 hover:shadow-md"
                >
                  <h3 className="mb-3 text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Additional CTA in FAQ column */}
            <div className="mt-8 rounded-2xl bg-gray-50 p-6 text-center border border-gray-100">
              <p className="text-gray-600 font-medium mb-3">Didn't find what you're looking for?</p>
              <a href="mailto:info@reospark.com" className="inline-flex font-bold text-teal-600 hover:text-teal-700 transition-colors">
                Reach out to our support team &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}