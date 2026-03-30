import Image from "next/image";
import Link from "next/link";
import {
    ShoppingCart,
    Store,
    CreditCard,
    PackageCheck,
    Calculator,
    PieChart,
    RefreshCw,
    ShoppingBag,
    ShieldCheck,
    Zap,
    Target,
    BrainCircuit,
    ArrowRight,
    CheckCircle2,
    Activity,
    Users
} from "lucide-react";

// Features Data
const features = [
    {
        title: "Smart Inventory Management",
        description: "Efficiently manage your supermarket inventory with real-time updates, reducing stock shortages and minimizing excess inventory costs.",
        icon: PackageCheck,
    },
    {
        title: "Integrated POS Systems",
        description: "Boost checkout speed and accuracy with advanced point-of-sale systems designed specifically for high-volume supermarkets and retail stores.",
        icon: Calculator,
    },
    {
        title: "Customer Analytics",
        description: "Gain valuable insights into shopping behaviors and purchasing preferences to enhance customer satisfaction and drive loyalty programs.",
        icon: PieChart,
    },
    {
        title: "Automated Stock Replenishment",
        description: "Utilize automated replenishment systems that forecast demand accurately, ensuring optimal product availability on the shelves at all times.",
        icon: RefreshCw,
    },
    {
        title: "E-Commerce Integration",
        description: "Seamlessly integrate online grocery shopping platforms with your physical supermarket, expanding your reach and boosting omnichannel sales.",
        icon: ShoppingBag,
    },
    {
        title: "Secure Payment Solutions",
        description: "Offer customers secure and reliable payment methods, safeguarding financial transactions and enhancing overall consumer trust in your brand.",
        icon: ShieldCheck,
    },
];

export default function SupermarketPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Store size={16} className="mr-2" />
                                Retail & Supermarket IT
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                                Revolutionizing Retail with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Innovative IT</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Enhance supermarket operations, inventory management, and customer experience with advanced technology tailored specifically for retail success and operational efficiency.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><PackageCheck size={16} className="text-teal-600" /> Smart Inventory</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Calculator size={16} className="text-teal-600" /> POS Optimization</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Users size={16} className="text-teal-600" /> Customer Experience</div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                                >
                                    Get Your Free Consultation <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/supermarket-hero.jpg" // Generate with prompt above
                                alt="Modern supermarket checkout technology"
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
                        Our team specializes in delivering customized IT solutions specifically designed for supermarkets and retail businesses. Leveraging extensive industry knowledge and innovative technology, we enhance inventory management, streamline checkout processes, and optimize store operations for maximum efficiency and profitability.
                    </p>
                    <p className="text-lg leading-8 text-teal-100 mt-4 font-medium">
                        At <strong className="text-white">CodeBright</strong>, we are committed to excellence. Our professionals ensure superior customer satisfaction and operational effectiveness to help you stand out in the highly competitive supermarket landscape.
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
                                src="/images/supermarket-specialization.jpg" // Generate with prompt above
                                alt="Secure Point-of-Sale (POS) and inventory system"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <ShieldCheck size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Secure Transactions</p>
                                    <p className="text-xs text-gray-500 font-medium">PCI Compliant POS Systems</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Supermarket Specialization</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Leading IT Solutions for Supermarkets</p>

                            <div className="space-y-6 text-base text-gray-600 leading-7">
                                <p>
                                    Efficient management of supermarket operations directly impacts customer satisfaction and profitability. Our IT solutions focus on robust data security and reliable point-of-sale (POS) systems tailored specifically for fast-paced supermarket environments.
                                </p>
                                <p>
                                    With stringent cybersecurity protocols, we ensure that sensitive customer information and payment details remain fully protected, maintaining strict compliance with retail industry standards.
                                </p>
                                <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl mt-6 flex items-start gap-4">
                                    <CreditCard className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                                    <p className="text-teal-900 font-medium m-0">
                                        By prioritizing secure and seamless transactions, our supermarket IT systems build customer confidence, streamline checkout processes, and enable accurate, real-time inventory management to prevent stock-outs.
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
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Enhancing Your Supermarket with Smart IT</p>
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
                                src="/images/why-us-supermarket.jpg" // Generate with prompt above
                                alt="Supermarket managers reviewing data"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">About CodeBright</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Why Our Supermarket Solutions Stand Out</p>
                            <p className="text-base text-gray-600 leading-7 mb-6">
                                We offer customized IT solutions designed specifically for supermarkets, addressing your unique operational challenges to ensure increased efficiency and bottom-line profitability.
                            </p>
                            <p className="text-base text-gray-600 leading-7 mb-8">
                                Our services provide lasting value beyond the initial implementation. We help you enhance customer experiences, streamline your inventory management, and optimize store performance for sustained success.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Tailored Retail Solutions
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    24/7 Priority Customer Support
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
                        Our projects are born from a passion for innovation that knows no bounds. Partner with us to modernize your supermarket infrastructure today.
                    </p>
                    <Link
                        href="/contact"
                        className="rounded-xl bg-white px-8 py-4 text-base font-bold text-teal-900 shadow-lg transition-all hover:bg-gray-100 hover:scale-105 inline-block"
                    >
                        Get Your Free Consultation
                    </Link>
                </div>
            </section>

        </main>
    );
}