"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Updated Navigation Array with Types (cards vs mega) and Bottom Callouts
const navigation = [

  {
    label: "Company",
    path: "/company",
    type: "mega",
    sections: [
      {
        title: "Company",
        links: [
          { label: "About Us", path: "/about" },
          { label: "Partners", path: "/partners" },
          { label: "Careers", path: "/careers" },
          { label: "Events", path: "/events" },
          { label: "Team", path: "/team" },
          { label: "Blog", path: "/blog" },
        ],
      },
      {
        title: "Product",
        links: [
          { label: "Overview", path: "/product/overview" },
          { label: "Features", path: "/product/features" },
          { label: "New Releases", path: "/product/new-releases" },
          { label: "Solutions", path: "/product/solutions" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Licenses", path: "/legal/licenses" },
          { label: "Settings", path: "/legal/settings" },
          { label: "Cookies", path: "/legal/cookies" },
          { label: "Document", path: "/legal/document" },
          { label: "Terms & Condition", path: "/legal/terms" },
          { label: "Privacy Policy", path: "/legal/privacy" },
        ],
      },
    ],
    bottomCallout: {
      text: "Looking for new career? We're hiring",
      path: "/careers",
    },
  },
  {
    label: "Services",
    path: "/services",
    type: "mega",
    sections: [
      {
        title: "Strategy & Design",
        links: [
          { label: "Brainstorming Ideas", path: "/services/brainstorming" },
          { label: "Product Design", path: "/services/product-design" },
          { label: "SEO Optimization", path: "/services/seo" },
          { label: "Front-End Development", path: "/services/front-end" },
        ],
      },
      {
        title: "Core Services",
        links: [
          { label: "Development", path: "/services/development" },
          { label: "Web Design", path: "/services/web-design" },
          { label: "IT Support", path: "/services/it-support" },
          { label: "E-Commerce", path: "/services/e-commerce" },
          { label: "Cloud Things", path: "/services/cloud" },
          { label: "CRM Solutions", path: "/services/crm" },
        ],
      },
      {
        title: "Our Fields",
        links: [
          { label: "Healthcare", path: "/healthcare" },
          { label: "Banks", path: "/banks" },
          { label: "Logistics", path: "/logistics" },
          { label: "Supermarkets", path: "/supermarkets" },
          { label: "Industries", path: "/industries" },
          { label: "Hotels", path: "/hotels" },
        ],
      },
    ],
    bottomCallout: {
      text: "Looking for new career? We're hiring",
      path: "/careers",
    },
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    type: "cards",
    dropdown: [
      {
        label: "E-commerce",
        path: "/portfolio/ecommerce",
        description: "We undertook a project to migrate their existing systems.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
      },
      {
        label: "App Development",
        path: "/portfolio/app-dev",
        description: "The mobile application has significantly improved.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
      },
      {
        label: "SAAS Integration",
        path: "/portfolio/saas",
        description: "We partnered with DEF to upgrade their outdated IT.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      },
      {
        label: "Virtual Reality",
        path: "/portfolio/vr",
        description: "Enter into the virtual reality world for real experience.",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=400&q=80",
      },
    ],
    bottomCallout: {
      text: "View Full Portfolio • Mobile & Web",
      path: "/portfolio",
    },
  },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path) => {
    router.push(path);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur-xl transition-all duration-300 ${scrolled ? "border-teal-100 shadow-md" : ""
        }`}
    >
      <nav className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigate("/")} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Reospark Logo"
              width={130}
              height={42}
              className="object-contain"
              priority
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden h-full items-center space-x-1 lg:flex">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="flex h-full items-center"
                onMouseEnter={() => (item.dropdown || item.sections) && setActiveDropdown(item.label)}
                onMouseLeave={() => (item.dropdown || item.sections) && setActiveDropdown(null)}
              >
                {item.dropdown || item.sections ? (
                  <>
                    <button
                      onClick={() => handleNavigate(item.path)}
                      className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-teal-50 hover:text-teal-600"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-teal-600" : ""
                          }`}
                      />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="absolute left-4 right-4 top-full z-50 mx-auto w-auto max-w-[1000px] pt-4">
                        <div className="flex flex-col overflow-hidden rounded-[28px] border border-teal-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

                          <div className="p-8">
                            {/* Layout for Mega Menu (Lists) */}
                            {item.type === "mega" && (
                              <div className="grid grid-cols-3 gap-12">
                                {item.sections.map((section) => (
                                  <div key={section.title}>
                                    <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
                                      {section.title}
                                    </h4>
                                    <ul className="space-y-3">
                                      {section.links.map((link) => (
                                        <li key={link.label}>
                                          <button
                                            onClick={() => handleNavigate(link.path)}
                                            className="text-sm text-gray-500 transition-colors hover:text-teal-600"
                                          >
                                            {link.label}
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Layout for Cards (Images) */}
                            {item.type === "cards" && (
                              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                                {item.dropdown.map((sub) => (
                                  <button
                                    key={sub.path}
                                    onClick={() => handleNavigate(sub.path)}
                                    className="group flex flex-col items-start gap-4 rounded-2xl border border-transparent bg-white p-3 text-left transition duration-300 hover:border-teal-100 hover:bg-teal-50"
                                  >
                                    <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-100">
                                      <Image
                                        src={sub.image}
                                        alt={sub.label}
                                        fill
                                        className="object-cover transition duration-300 group-hover:scale-105"
                                      />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <h4 className="text-base font-semibold text-gray-900 transition group-hover:text-teal-700">
                                        {sub.label}
                                      </h4>
                                      <p className="mt-1 text-sm leading-6 text-gray-500 line-clamp-2">
                                        {sub.description}
                                      </p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Bottom Callout Bar */}
                          {item.bottomCallout && (
                            <div className="bg-gray-50/80 px-8 py-4 border-t border-gray-100">
                              <button
                                onClick={() => handleNavigate(item.bottomCallout.path)}
                                className="group flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-700"
                              >
                                {item.bottomCallout.text}
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                              </button>
                            </div>
                          )}

                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigate(item.path)}
                    className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-teal-50 hover:text-teal-600"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavigate("/contact")}
              className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-2.5 font-semibold text-white shadow-lg transition hover:from-teal-700 hover:to-teal-800"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-800 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-5 right-5 top-full z-50 mt-2 lg:hidden">
            <div className="w-full overflow-hidden rounded-2xl border border-teal-100 bg-white/95 shadow-2xl backdrop-blur-xl">
              <div className="max-h-[80vh] overflow-y-auto px-3 py-3">
                {navigation.map((item) => (
                  <div key={item.label} className="mb-2 rounded-xl bg-white transition-all">
                    {item.dropdown || item.sections ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-semibold text-gray-800 transition hover:bg-teal-50 hover:text-teal-600"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-teal-600" : ""
                              }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ${activeDropdown === item.label ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-4 pb-4">

                              {/* Mobile Cards */}
                              {item.type === "cards" && (
                                <div className="space-y-3 mt-2">
                                  {item.dropdown.map((sub) => (
                                    <button
                                      key={sub.path}
                                      onClick={() => handleNavigate(sub.path)}
                                      className="flex w-full items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 text-left transition hover:border-teal-200 hover:bg-teal-50"
                                    >
                                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                                        <Image src={sub.image} alt={sub.label} fill className="object-cover" />
                                      </div>
                                      <div className="min-w-0 flex-1">
                                        <div className="font-medium text-gray-900">{sub.label}</div>
                                        <div className="mt-1 truncate text-xs text-gray-500">{sub.description}</div>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              )}

                              {/* Mobile Mega Menu Lists */}
                              {item.type === "mega" && (
                                <div className="space-y-4 mt-2">
                                  {item.sections.map((section) => (
                                    <div key={section.title}>
                                      <div className="mb-2 font-bold text-sm text-gray-900">{section.title}</div>
                                      <div className="space-y-1 border-l-2 border-gray-100 pl-3">
                                        {section.links.map((link) => (
                                          <button
                                            key={link.label}
                                            onClick={() => handleNavigate(link.path)}
                                            className="block w-full text-left py-1 text-sm text-gray-500 hover:text-teal-600"
                                          >
                                            {link.label}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Mobile Callout */}
                              {item.bottomCallout && (
                                <div className="mt-4 rounded-xl bg-teal-50 p-3 text-center">
                                  <button
                                    onClick={() => handleNavigate(item.bottomCallout.path)}
                                    className="text-sm font-semibold text-teal-700"
                                  >
                                    {item.bottomCallout.text} &rarr;
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavigate(item.path)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-semibold text-gray-800 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}

                <div className="px-2 pt-2">
                  <button className="w-full rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-3 font-semibold text-white shadow-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}