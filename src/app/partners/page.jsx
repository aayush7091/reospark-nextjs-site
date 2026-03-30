import Image from "next/image";
import Link from "next/link";
import { Users, Handshake, Zap, Target, BrainCircuit, Timer, ArrowRight, Building2 } from "lucide-react";

// Placeholder generic logos for the sliding strip (will be doubled for infinite loop)
const partners = [
    { name: "TechCorp", logo: Building2 },
    { name: "GlobalNet", logo: Building2 },
    { name: "Softly", logo: Building2 },
    { name: "Apex Solutions", logo: Building2 },
    { name: "Quant Systems", logo: Building2 },
    { name: "Zenix", logo: Building2 },
    { name: "Innovate LLC", logo: Building2 },
    { name: "CloudWorks", logo: Building2 },
];

export default function PartnerPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">


            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Users size={16} className="mr-2" />
                                Collaborating for Success
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">CodeBright</span>
                            </h1>
                            <p className="mt-8 text-xl leading-8 text-gray-600 font-medium">
                                We have great partners in the modern world.
                            </p>
                            <p className="mt-4 text-base text-gray-500 max-w-xl">
                                Our partners play a pivotal role in our journey, bringing diverse expertise, resources, and shared values to the table.
                            </p>
                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800"
                                >
                                    Become a Partner
                                </Link>
                            </div>
                        </div>
                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/hero-partner.jpg" // Generate with prompt in table above
                                alt="Global Partner Network visualization"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Offerings and Team Section */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-y border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-2xl lg:order-last">
                            <Image
                                src="/images/offerings.jpg" // Generate with prompt in table above
                                alt="CodeBright team collaborating"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">What We're Offering</h2>
                                <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">What our partners think about us</p>
                                <p className="mt-6 text-base text-gray-600 leading-7">
                                    Managed services and products that offer significant competitive advantages. Our offerings are designed with flexibility and adaptability to ensure mutual growth in an ever-changing landscape. We invite you to explore our blog and become part of our journey towards growth.
                                </p>
                                <div className="mt-8">
                                    <Link href="/blog" className="group flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700">
                                        Visit Our Blog
                                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            <div className="prose prose-teal max-w-none text-gray-600 border-t border-gray-100 pt-10">
                                <h3 className="text-2xl font-bold text-gray-900">A Collective Force of Excellence</h3>
                                <p>
                                    Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project.
                                </p>
                                <p className="font-medium text-gray-900">
                                    At CodeBright, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Sliding Strip Section */}
            <section className="bg-white py-16 md:py-20 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center mb-10">
                    <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Partners</h2>
                    <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Trusted by our customers & partners</p>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600">
                        Our commitment to excellence extends beyond our immediate team. We actively seek out partners who share our values, vision, and dedication.
                    </p>
                </div>

                {/* Coded Sliding Logo Strip */}
                <div className="relative overflow-hidden bg-gray-50/50 border-y border-gray-100 py-10">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="flex animate-scroll whitespace-nowrap">
                        {/* Map partners twice for seamless loop */}
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="mx-8 flex items-center gap-3 text-lg font-bold text-gray-400 group hover:text-teal-600 transition"
                            >
                                <partner.logo className="h-7 w-7 text-gray-300 group-hover:text-teal-200 transition" />
                                <span>{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Us Section */}
            <section className="bg-gray-50/50 py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xl">
                            <Image
                                src="/images/trust.jpg" // Generate with prompt in table above
                                alt="Customized solutions visualization"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Why Trust Us?</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-12">Why our partners trust us</p>

                            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                                {[
                                    { name: "Customized Approach", icon: Zap, text: "We don't believe in a one-size-fit-all approach. Our services are carefully customized to suit your specific need, ensuring you achieve your goals." },
                                    { name: "Long-term Benefits", icon: Target, text: "We believe in delivering value that extends beyond the immediate project. Our services are designed to provide long-term benefits." },
                                    { name: "Pivotal Development", icon: BrainCircuit, text: "Our focus is on core Product Development using agile methodologies and high-quality response standards." },
                                    { name: "Quick Response", icon: Timer, text: "We maintain highly responsive communication standards to ensure your projects remain on track and moving forward." },
                                ].map((feature) => (
                                    <div key={feature.name} className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition hover:border-teal-100">
                                        <dt>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 border border-teal-100">
                                                <feature.icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                                            </div>
                                            <p className="mt-5 text-lg font-bold text-gray-900 m-0">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 text-sm leading-6 text-gray-600 m-0">{feature.text}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-16 md:py-24 border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center bg-white p-12 rounded-3xl border border-gray-100 shadow-xl">
                    <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Let's Get in Touch</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900">
                        Need any further assistance?
                    </p>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 leading-7">
                        Our enterprise solutions team is ready to discuss how we can engineer your next digital success.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/contact"
                            className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}