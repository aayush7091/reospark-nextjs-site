import React from "react";
// import { useRouter } from "next/router"; 
import {
  Sparkles,
  ArrowRight,
  Users,
  Trophy,
  Code,
  CheckCircle2,
  Headset,
  Rocket,
  Lightbulb,
  Phone,
} from "lucide-react";

export default function EnhancedLandingPageLight() {
  // const router = useRouter();

  const values = [
    { title: "Innovation", description: "Forward-thinking tech.", icon: Lightbulb },
    { title: "Quality", description: "Top-tier code standards.", icon: CheckCircle2 },
    { title: "Speed", description: "Rapid, agile delivery.", icon: Rocket },
    { title: "Support", description: "Always here for you.", icon: Headset },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-teal-500 selection:text-white">
      
      {/* ================= HERO SECTION (Light Theme) ================= */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white pt-20">
        {/* Soft Animated Gradient Background for Light Mode */}
        <div className="absolute inset-0 z-0 opacity-60">
          <div className="absolute -top-[20%] -left-[10%] h-[70%] w-[50%] rounded-full bg-teal-100 blur-[120px]"></div>
          <div className="absolute top-[40%] right-[10%] h-[60%] w-[40%] rounded-full bg-emerald-50 blur-[100px]"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center">
          <div className="mb-8 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-5 py-2.5 text-teal-700 backdrop-blur-md">
            <Sparkles size={18} className="animate-pulse text-teal-500" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Innovative Software Solutions
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
            Build Smarter Software <br className="hidden md:block" />
            for <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">Modern Businesses</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-gray-600 md:text-xl">
            We engineer custom software, scalable CRM systems, and high-performance e-commerce solutions that accelerate company growth.
          </p>

          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-teal-600 px-8 py-4 font-medium text-white transition-all hover:bg-teal-500 hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)]">
              <span className="mr-2">Explore Products</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-8 py-4 font-medium text-gray-700 shadow-sm transition-all hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ================= COMPANY INTRO ================= */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">Who We Are</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Reospark is a leading software development company specializing in custom business solutions. With over 8 years of experience and a team of 50+ skilled professionals, we've helped 200+ companies transform their digital presence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-100 hover:shadow-2xl hover:shadow-teal-500/10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                  <value.icon size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS SHOWCASE ================= */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">Our Products</h2>
              <p className="text-lg text-gray-600">Powerful software solutions designed to solve real business challenges.</p>
            </div>
            <button className="hidden text-teal-600 hover:text-teal-700 md:inline-flex md:items-center font-semibold">
              View All Products <ArrowRight size={20} className="ml-2" />
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { id: "work-observer", name: "Work Observer", tagline: "Smart Attendance System", description: "Track employee attendance using GPS, QR scanning, and selfie verification.", icon: Users, features: ["Location-based attendance", "QR verification system", "Selfie validation"] },
              { id: "rank-cracker", name: "Rank Cracker", tagline: "Exam Preparation Platform", description: "A complete platform for students with tests, analytics, and performance tracking.", icon: Trophy, features: ["Mock tests & quizzes", "Performance analytics", "Leaderboard system"] },
              { id: "code-bright", name: "Code Bright", tagline: "Developer Learning Hub", description: "Learn coding with real-world projects, tutorials, and guided paths.", icon: Code, features: ["Project-based learning", "Code challenges", "Interview preparation"] },
            ].map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-500/10">
                  <div className="absolute inset-x-0 top-0 h-1 w-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50">
                    <Icon className="text-teal-600" size={32} />
                  </div>
                  
                  <h3 className="mb-1 text-2xl font-bold text-gray-900">{product.name}</h3>
                  <p className="mb-4 text-sm font-bold tracking-wide text-teal-600 uppercase">{product.tagline}</p>
                  <p className="mb-8 flex-grow text-gray-600">{product.description}</p>
                  
                  <ul className="mb-8 space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-teal-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-auto inline-flex items-center font-bold text-gray-900 transition-colors group-hover:text-teal-600">
                    Learn More <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="overflow-hidden border-y border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-8 text-sm font-bold tracking-widest text-gray-400 uppercase">Powering Modern Solutions With</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "AWS", "Docker", "GraphQL"].map((tech) => (
              <span key={tech} className="cursor-default rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-white py-24">
        {/* Contained Dark Block for contrast at the bottom */}
        <div className="absolute inset-4 overflow-hidden rounded-3xl bg-teal-900 md:inset-8">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-800 to-gray-900 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-8 py-16 text-center text-white md:py-24">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">Ready to Transform Your Business?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-teal-100 md:text-xl">
            Let's discuss how our custom software solutions can help you eliminate bottlenecks and achieve your goals.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-teal-900 transition-transform hover:scale-105 hover:shadow-xl">
              <Phone size={20} className="mr-2" /> Schedule a Call
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border-2 border-teal-400/30 bg-teal-800/30 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:border-teal-400/50 hover:bg-teal-800/50">
              Explore Our Work <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}