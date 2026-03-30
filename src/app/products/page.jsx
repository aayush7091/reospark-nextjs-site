"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Shield, BarChart, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-50" />
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-600 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-teal-600 mr-2"></span>
            Reospark v2.0 is now live
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Smarter software for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">growing businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Automate workflows, manage your workforce, and scale your operations with our suite of intelligent, cloud-based solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800"
            >
              Get Started
            </Link>
            <Link
              href="/products"
              className="group flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-teal-600"
            >
              Explore Products 
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Hero Image Mockup */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-24">
          <div className="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-3xl lg:p-4">
            <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/10 h-[400px] sm:h-[600px] relative flex items-center justify-center border border-gray-100">
                {/* Replace this div with your actual product dashboard image */}
                <div className="text-center px-4">
                  <BarChart className="mx-auto h-12 w-12 text-teal-200 mb-4" />
                  <p className="text-gray-400 font-medium">Your Dashboard Mockup Goes Here</p>
                  <p className="text-sm text-gray-300 mt-2">1200 x 800px recommended</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful tools designed for modern teams
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you need attendance tracking, e-commerce solutions, or custom development, our platforms are built to perform.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                    <feature.icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="relative isolate overflow-hidden bg-teal-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
            Join hundreds of companies using our software to streamline their daily operations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-teal-900 shadow-sm transition hover:bg-gray-100"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    name: "Lightning Fast",
    description: "Built on modern tech stacks ensuring your applications load instantly and run smoothly.",
    icon: Zap,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade encryption and security protocols keep your business data safe and compliant.",
    icon: Shield,
  },
  {
    name: "Advanced Analytics",
    description: "Make data-driven decisions with built-in reporting and comprehensive dashboard metrics.",
    icon: BarChart,
  },
  {
    name: "Mobile Optimized",
    description: "Fully responsive experiences that look and work perfectly on any device, anywhere.",
    icon: Smartphone,
  },
];