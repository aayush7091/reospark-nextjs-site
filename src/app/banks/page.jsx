import Image from "next/image";
import Link from "next/link";
import {
    Landmark,
    ShieldCheck,
    CreditCard,
    Lock,
    FileSearch,
    BarChart3,
    Zap,
    Target,
    BrainCircuit,
    ArrowRight,
    Database,
    Network,
    CheckCircle2,
    Activity
} from "lucide-react";

// Features Data
const features = [
    {
        title: "Core Banking System Integration",
        description: "Seamlessly integrate modern core banking solutions to enhance operational efficiency, real-time transaction processing, and the overall customer experience.",
        icon: Database,
    },
    {
        title: "Secure Digital Banking Platforms",
        description: "Develop and optimize secure online and mobile banking solutions with multi-layer authentication, ensuring seamless and safe customer interactions.",
        icon: Landmark,
    },
    {
        title: "Fraud Prevention & Cybersecurity",
        description: "Advanced AI-driven fraud detection and cybersecurity measures to safeguard financial transactions, protect sensitive data, and maintain compliance.",
        icon: Lock,
    },
    {
        title: "Payment Gateway & API Integration",
        description: "Enhance payment processing efficiency with secure API-driven payment gateway solutions, supporting multiple transaction methods and real-time settlements.",
        icon: CreditCard,
    },
    {
        title: "Regulatory Compliance & Risk",
        description: "Ensure full compliance with banking regulations like PCI DSS, PSD2, and AML standards, significantly reducing risk and enhancing enterprise data security.",
        icon: FileSearch,
    },
    {
        title: "AI & Data Analytics for Banking",
        description: "Leverage AI-powered data analytics to gain deep insights into customer behavior, optimize loan approvals, and enhance strategic decision-making.",
        icon: BarChart3,
    },
];

export default function BankingPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Landmark size={16} className="mr-2" />
                                Financial IT Solutions
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Banking through <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">IT Solutions</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We specialize in delivering advanced IT solutions specifically tailored for the banking sector, empowering financial institutions with technology that drives efficiency, enhances security, and improves customer experiences.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Zap size={16} className="text-teal-600" /> Managed Services</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Target size={16} className="text-teal-600" /> High Adaptability</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><BrainCircuit size={16} className="text-teal-600" /> Competitive Advantage</div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                                >
                                    Book an Appointment <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/banking-hero.jpg" // Generate with prompt above
                                alt="Modern digital banking interface"
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
                        Our team specializes in cutting-edge banking IT solutions designed for innovation, security, and regulatory compliance. Our advanced software systems help financial institutions streamline operations, enhance customer experiences, and ensure data security.
                    </p>
                    <p className="text-lg leading-8 text-teal-100 mt-4 font-medium">
                        Using agile methodologies, our team collaborates with banks to develop customized, scalable solutions that align with their business objectives. From planning and design to testing, deployment, and ongoing support, we ensure transparency and efficiency at every stage.
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
                                src="/images/banking-security.jpg" // Generate with prompt above
                                alt="Banking data security and PCI DSS compliance"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <ShieldCheck size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">PCI DSS Compliant</p>
                                    <p className="text-xs text-gray-500 font-medium">Bank-Grade Encryption</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Banking Specialization</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">We are the best in Banking technology</p>

                            <div className="space-y-6 text-base text-gray-600 leading-7">
                                <p>
                                    Accurate data management is crucial in efficient banking operations. Our projects emphasize the utmost importance of data security and regulatory compliance in banking IT solutions.
                                </p>
                                <p>
                                    Robust cybersecurity measures are implemented to protect sensitive financial data, ensuring adherence to industry regulations such as the <strong>Payment Card Industry Data Security Standard (PCI DSS)</strong> and other banking compliance frameworks. By prioritizing data protection and fraud prevention, financial institutions build customer trust and operate securely in the digital landscape.
                                </p>
                                <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl mt-6 flex items-start gap-4">
                                    <Network className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                                    <p className="text-teal-900 font-medium m-0">
                                        The Banking IT project also focuses on system interoperability among financial platforms. By enabling seamless data exchange between banks, payment processors, and financial service providers, we ensure a secure and connected banking ecosystem.
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
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Revolutionizing Banking with Secure Solutions</p>
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
                                src="/images/why-us-banking.jpg" // Generate with prompt above
                                alt="Why choose our banking IT services"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">About CodeBright</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Why Choose Our Banking IT Solutions?</p>
                            <p className="text-base text-gray-600 leading-7 mb-6">
                                We offer customized banking IT solutions tailored to your institution’s unique needs, ensuring security, compliance, and operational efficiency.
                            </p>
                            <p className="text-base text-gray-600 leading-7 mb-8">
                                Our cutting-edge technologies and industry expertise help financial institutions enhance customer experience, optimize digital banking services, and mitigate cybersecurity risks.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Secure & Scalable Digital Banking Platforms
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Regulatory Compliance & Risk Management
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
                        Our projects are born from a passion for innovation that knows no bounds. Partner with us to modernize your financial IT infrastructure today.
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