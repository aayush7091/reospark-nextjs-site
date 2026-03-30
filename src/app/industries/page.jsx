import Image from "next/image";
import Link from "next/link";
import {
    Factory,
    Network,
    Database,
    BarChart3,
    ShieldCheck,
    LifeBuoy,
    Briefcase,
    Zap,
    Target,
    BrainCircuit,
    ArrowRight,
    CheckCircle2,
    Activity,
    Globe
} from "lucide-react";

// Features Data
const features = [
    {
        title: "Customized Industry Solutions",
        description: "We develop specialized IT solutions tailored to the unique demands of various industries, enhancing your operational efficiency and overall market competitiveness.",
        icon: Factory,
    },
    {
        title: "System Integration & Interoperability",
        description: "Our solutions facilitate seamless integration across diverse legacy systems, ensuring smooth operational workflows and data exchange across all sectors.",
        icon: Network,
    },
    {
        title: "Scalable Data Management",
        description: "Our data management solutions are designed to scale effectively with your business growth, handling exponentially increased volumes without sacrificing performance.",
        icon: Database,
    },
    {
        title: "Advanced Analytics & Insights",
        description: "Harness powerful analytics tools to gain actionable insights, optimize executive decision-making, and drive strategic growth across your entire organization.",
        icon: BarChart3,
    },
    {
        title: "Robust Cybersecurity Measures",
        description: "Protect critical industry-specific data with our advanced cybersecurity protocols, ensuring regulatory compliance and maintaining complete stakeholder trust.",
        icon: ShieldCheck,
    },
    {
        title: "Reliable Support & Maintenance",
        description: "Benefit from continuous, proactive support to keep your IT infrastructure running optimally, minimizing expensive downtime and maximizing team productivity.",
        icon: LifeBuoy,
    },
];

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Briefcase size={16} className="mr-2" />
                                Cross-Industry IT Solutions
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                                Transforming Industries with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Innovative IT</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                In today's competitive market, advanced technology is key to driving efficiency, growth, and innovation across diverse industries. Explore how our tailored IT solutions empower businesses to stay ahead.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Factory size={16} className="text-teal-600" /> Industry-Specific Solutions</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Database size={16} className="text-teal-600" /> Scalable Infrastructure</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Zap size={16} className="text-teal-600" /> Enhanced Efficiency</div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                                >
                                    Schedule Your Consultation <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/industries-hero.jpg" // Generate with prompt above
                                alt="Multi-industry technology visualization"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Team Intro */}
            <section className="bg-teal-900 py-16 text-center px-6">
                <div className="mx-auto max-w-4xl">
                    <p className="text-lg leading-8 text-teal-100">
                        Our expert team delivers tailored IT solutions across diverse industries, leveraging deep sector knowledge and innovative technologies. From manufacturing to retail, healthcare to logistics, we provide strategic IT services designed to enhance productivity, streamline operations, and fuel business growth.
                    </p>
                    <p className="text-lg leading-8 text-teal-100 mt-4 font-medium">
                        At <strong className="text-white">CodeBright</strong>, we are committed to excellence. We ensure quality and efficiency at every stage, from initial consultation to final implementation, helping your enterprise maintain a decisive edge in the global market.
                    </p>
                </div>
            </section>

            {/* Specialization Section */}
            <section className="bg-white py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-2xl lg:order-last">
                            <Image
                                src="/images/industries-expertise.jpg" // Generate with prompt above
                                alt="Global industry interconnectivity"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <ShieldCheck size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Enterprise Security</p>
                                    <p className="text-xs text-gray-500 font-medium">Industry-Specific Compliance</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Industry Expertise</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Delivering Excellence Across Industries</p>

                            <div className="space-y-6 text-base text-gray-600 leading-7">
                                <p>
                                    Customized IT solutions are essential for achieving optimal performance across diverse industries. We understand the critical role technology plays in modern businesses, and our solutions prioritize data security, system reliability, and industry-specific compliance.
                                </p>
                                <p>
                                    Our robust cybersecurity protocols protect sensitive business information, helping you maintain strict regulatory standards and unwavering customer trust.
                                </p>
                                <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl mt-6 flex items-start gap-4">
                                    <Globe className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                                    <p className="text-teal-900 font-medium m-0">
                                        Committed to innovation, we continuously develop solutions that scale with your business growth. By facilitating efficient data exchange and seamless integration, we enhance productivity and decision-making capabilities across your entire organization.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Features</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Empowering Your Industry with Expert IT</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition hover:shadow-xl hover:border-teal-200 group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 border border-teal-100 mb-6 transition-colors group-hover:bg-teal-600">
                                    <feature.icon className="h-6 w-6 text-teal-600 group-hover:text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition">{feature.title}</h3>
                                <p className="text-sm leading-6 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/why-us-industries.jpg" // Generate with prompt above
                                alt="Corporate executives reviewing operations dashboard"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">About CodeBright</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Why Our Industry Solutions Are Superior</p>
                            <p className="text-base text-gray-600 leading-7 mb-6">
                                We specialize in customized IT solutions tailored specifically to your industry's unique challenges and requirements. Our expert team helps businesses across sectors maximize efficiency, enhance productivity, and accelerate growth.
                            </p>
                            <p className="text-base text-gray-600 leading-7 mb-8">
                                Our commitment goes beyond immediate results; we aim to deliver sustainable value and competitive advantages that benefit your business in the long run.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Tailored Solutions for All Industries
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Responsive Support & Technical Expertise
                                </li>
                            </ul>
                        </div>
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
                        Build your project with us. <br className="hidden sm:block" /> Make it world-class.
                    </h2>
                    <p className="text-lg leading-8 text-teal-100 mb-10 max-w-2xl mx-auto">
                        Our projects are born from a passion for innovation that knows no bounds. Partner with us to modernize your industrial infrastructure today.
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