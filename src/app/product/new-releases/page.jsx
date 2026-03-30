import Image from "next/image";
import Link from "next/link";
import {
    Rocket,
    ArrowRight,
    Globe,
    Users2,
    Smartphone,
    Activity,
    CalendarDays,
    CheckCircle2,
    Sparkles
} from "lucide-react";

// New Releases Data (Refined for professional B2B context)
const releases = [
    {
        category: "Web Development",
        icon: Globe,
        title: "Magnus luxury business consulting site released by CodeBright",
        description: "We successfully launched a high-end, highly responsive web platform for Magnus Consulting, featuring advanced animations, seamless CMS integration, and an unparalleled user experience.",
        date: "October 12, 2026",
        tags: ["Collaboration Tools", "Smart Reminders"],
        image: "/images/release-web.jpg", // Generate using prompt above
    },
    {
        category: "CRM Solutions",
        icon: Users2,
        title: "Customer relationship management for a brand new marketing agency",
        description: "A fully tailored Customer Relationship Management system designed specifically to automate marketing workflows, track lead generation, and significantly boost client retention rates.",
        date: "September 28, 2026",
        tags: ["Collaboration Tools", "Smart Reminders"],
        image: "/images/release-crm.jpg", // Generate using prompt above
    },
    {
        category: "Mobile Development",
        icon: Smartphone,
        title: "CodeBright mobile app developed for fast productivity in your hands",
        description: "Our latest mobile application brings enterprise-level productivity to your fingertips, offering real-time team collaboration, secure messaging, and intuitive task management on the go.",
        date: "August 15, 2026",
        tags: ["Collaboration Tools", "Smart Reminders"],
        image: "/images/release-mobile.jpg", // Generate using prompt above
    },
];

export default function NewReleasesPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24 text-center">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-4xl">
                    <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                        <Rocket size={16} className="mr-2" />
                        Product Updates
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                        Exciting New Releases <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">to Look Out For</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        In the ever-evolving world of enterprise technology, our new releases spark anticipation and drive digital transformation for businesses worldwide.
                    </p>
                    <div className="mt-10 flex justify-center">
                        <Link
                            href="/contact"
                            className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                        >
                            Book an Appointment <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Context Section */}
            <section className="bg-teal-900 py-16 text-center px-6">
                <div className="mx-auto max-w-4xl">
                    <div className="inline-flex items-center justify-center rounded-full bg-teal-800/50 p-3 mb-6">
                        <Sparkles size={28} className="text-teal-300" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                        New releases shaping tomorrow's world
                    </h2>
                    <p className="text-lg leading-8 text-teal-100">
                        One fundamental aspect of our IT services is continuous innovation and infrastructure management. This involves the active design, rapid implementation, and seamless maintenance of the hardware, software, networks, and servers that power our newest products.
                    </p>
                </div>
            </section>

            {/* Releases Grid Section */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {releases.map((release, index) => (
                            <div key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:border-teal-200 h-full">

                                {/* Image Container */}
                                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={release.image}
                                        alt={release.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-teal-700 uppercase tracking-wider shadow-sm border border-white/20">
                                        <release.icon size={14} />
                                        {release.category}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="flex flex-col flex-1 p-8">
                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-4">
                                        <CalendarDays size={16} />
                                        {release.date}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition leading-snug">
                                        {release.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-7 text-gray-600 flex-1">
                                        {release.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {release.tags.map((tag, i) => (
                                            <span key={i} className="inline-flex items-center gap-1.5 rounded-lg bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 border border-teal-100">
                                                <CheckCircle2 size={12} className="text-teal-500" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 group/link">
                                            Read Full Release Notes <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-teal-900 py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <div className="inline-flex items-center justify-center rounded-full bg-teal-800/50 p-3 mb-6">
                        <Activity size={32} className="text-teal-300" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
                        Need any further assistance?
                    </h2>
                    <p className="text-lg leading-8 text-teal-100 mb-10 max-w-2xl mx-auto">
                        Feel free to reach out for any inquiries about our latest products or assistance integrating them into your workflow.
                    </p>
                    <Link
                        href="/contact"
                        className="rounded-xl bg-white px-8 py-4 text-base font-bold text-teal-900 shadow-lg transition-all hover:bg-gray-100 hover:scale-105 inline-block"
                    >
                        Book an Appointment Now
                    </Link>
                </div>
            </section>

        </main>
    );
}