"use client";

import {
  Mail,
  Phone,
  MapPin,

//   Twitter,
//   Linkedin,
//   Instagram,
} from "lucide-react";
import { useRouter } from "next/navigation";

const footerLinks = {
  company: [
    { label: "About", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Clients", path: "/clients" },
    { label: "Contact", path: "/contact" },
  ],
  products: [
    { label: "Work Observers", path: "/products/work-observers" },
    { label: "Rank Crackers", path: "/products/rank-crackers" },
    { label: "Code Bright", path: "/products/code-bright" },
  ],
  services: [
    { label: "Development", path: "/services/development" },
    { label: "WooCommerce", path: "/services/woocommerce" },
    { label: "CRM Solutions", path: "/services/crm-solutions" },
    { label: "Web Designing", path: "/services/web-designing" },
    { label: "IT Support", path: "/services/it-support" },
  ],
  resources: [
    { label: "Blog", path: "/blog" },
    { label: "FAQs", path: "/faqs" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Support", path: "/support" },
  ],
};

export default function Footer() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigate(link.path)}
                    className="transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigate(link.path)}
                    className="transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigate(link.path)}
                    className="transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigate(link.path)}
                    className="transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0 text-teal-400" />
                <a
                  href="mailto:info@reospark.com"
                  className="transition-colors hover:text-teal-400"
                >
                  info@reospark.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0 text-teal-400" />
                <a
                  href="tel:+919211238008"
                  className="transition-colors hover:text-teal-400"
                >
                  +91 9211238008
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-teal-400" />
                <span>3rd floor, Pulse Park, A-150, A Block, Sector 63, Noida, Uttar Pradesh 201301</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              {/* <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-teal-600"
              >
                <Facebook size={18} />
              </a> */}
              {/* <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-teal-600"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-teal-600"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-teal-600"
              >
                <Instagram size={18} />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              © {new Date().getFullYear()} Reospark. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <button
                onClick={() => handleNavigate("/privacy")}
                className="transition-colors hover:text-teal-400"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigate("/terms")}
                className="transition-colors hover:text-teal-400"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}