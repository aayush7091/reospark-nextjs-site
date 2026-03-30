"use client";

import {
  Target,
  Eye,
  Users,
  Award,
  TrendingUp,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const whyChoose = [
    {
      icon: Award,
      title: "Proven Expertise",
      desc: "8+ years delivering successful projects with industry-leading standards.",
    },
    {
      icon: TrendingUp,
      title: "Business-Focused",
      desc: "Solutions explicitly designed to drive real ROI and growth.",
    },
    {
      icon: Globe,
      title: "Global Experience",
      desc: "Serving clients across multiple industries and geographic locations.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      desc: "50+ skilled professionals passionate about crafting great software.",
    },
    {
      icon: Target,
      title: "Client Success",
      desc: "200+ satisfied clients who trust us with their core technology.",
    },
    {
      icon: Eye,
      title: "Quality Assurance",
      desc: "Rigorous testing and QA processes ensure flawless deployment.",
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-teal-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-teal-50 pb-24 pt-32 lg:pt-40">
        {/* Soft Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -left-[10%] top-0 h-[300px] w-[500px] rounded-full bg-teal-200 blur-[100px]"></div>
          <div className="absolute right-[10%] top-[20%] h-[200px] w-[300px] rounded-full bg-emerald-100 blur-[80px]"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            About <span className="text-teal-600">Reospark</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-medium text-gray-600 md:text-xl">
            Empowering businesses worldwide with innovative software solutions since 2016.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY & STATS ================= */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-24 grid items-center gap-16 lg:grid-cols-2">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Story
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Founded in 2016, Reospark emerged from a simple vision: to help businesses leverage technology to achieve their full potential. What started as a small team of passionate developers has grown into a full-service software development company serving clients across the globe.
              </p>
              <p>
                Today, we&apos;re proud to have delivered <strong className="text-gray-900 font-semibold">500+ successful projects</strong> for 200+ satisfied clients across industries including education, e-commerce, healthcare, manufacturing, and more. Our commitment to excellence and innovation continues to drive everything we do.
              </p>
              <p>
                With a team of 50+ skilled professionals, we combine technical expertise with business acumen to create solutions that don&apos;t just work—they transform businesses.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="order-1 grid grid-cols-2 gap-6 lg:order-2">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "8+", label: "Years Experience" },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="group rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/10"
              >
                <div className="mb-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 transition-transform duration-300 group-hover:scale-110 md:text-5xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MISSION, VISION, VALUES ================= */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Mission */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
              <Target size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Our Mission</h3>
            <p className="leading-relaxed text-gray-600">
              To empower businesses with innovative software solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>
          </div>

          {/* Vision */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
              <Eye size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Our Vision</h3>
            <p className="leading-relaxed text-gray-600">
              To be the most trusted technology partner for businesses worldwide, recognized for excellence, innovation, and unwavering client success.
            </p>
          </div>

          {/* Values */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
              <Users size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Our Values</h3>
            <p className="leading-relaxed text-gray-600">
              Excellence, innovation, integrity, and client success guide every decision we make and every solution we deliver to the market.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Why Choose Reospark?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We bring a combination of deep technical expertise and business logic to every project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA BLOCK ================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="relative overflow-hidden rounded-3xl bg-teal-900 px-8 py-16 text-center text-white md:p-20">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-800 to-gray-900 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-5xl">
                Ready to Work Together?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-teal-100 md:text-xl">
                Let&apos;s discuss how we can help transform your business with the right technology solutions.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => router.push("/contact")}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-teal-900 transition-transform hover:scale-105 hover:shadow-xl"
                >
                  Get in Touch
                </button>

                <button
                  onClick={() => router.push("/case-studies")}
                  className="group inline-flex items-center justify-center rounded-xl border-2 border-teal-400/30 bg-teal-800/30 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:border-teal-400/50 hover:bg-teal-800/50"
                >
                  View Our Work <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
    </div>
  );
}