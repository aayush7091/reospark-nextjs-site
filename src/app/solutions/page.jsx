"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Lightbulb,
    ShieldCheck,
    Zap,
    Target,
    BrainCircuit,
    ArrowRight,
    Code2,
    ShoppingCart,
    Users2,
    Palette,
    MonitorDot,
    Cloud,
    Activity,
    Mail,
    Headset,
    CheckCircle2,
    Layers,
    SearchCode,
    Wrench,
    Rocket
} from "lucide-react";

// IT Offerings Data
const offerings = [
    { name: "Development", desc: "Our development is pixel perfect in all ways.", icon: Code2 },
    { name: "Woo Commerce", desc: "We have the best team for your shopping websites.", icon: ShoppingCart },
    { name: "CRM Solutions", desc: "We enhance customer experiences for success.", icon: Users2 },
    { name: "Web Design", desc: "We create vibrant, intuitive and minimalist web.", icon: Palette },
    { name: "Hardware Services", desc: "We offer expert assistance for your IT issues.", icon: MonitorDot },
    { name: "Cloud Services", desc: "We can provide cloud solutions all around the world.", icon: Cloud },
    { name: "Network Security", desc: "Robust security to keep your digital assets safe.", icon: ShieldCheck },
    { name: "Monitoring", desc: "24/7 monitoring to enhance experiences for success.", icon: Activity },
    { name: "Email Services", desc: "Reliable and secure corporate email hosting.", icon: Mail },
    { name: "IT Support", desc: "Free expert assistance for your IT issues.", icon: Headset, highlight: true },
];

// Interactive Case Studies Data
const caseStudiesData = [
    {
        title: "Development",
        subtitle: "Software Engineering",
        description: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
        image: "/images/overview-development.jpg"
    },
    {
        title: "Woo Commerce",
        subtitle: "E-Commerce Solutions",
        description: "We architect scalable WooCommerce platforms that handle high-volume traffic, streamline inventory management, and provide secure, frictionless checkout experiences to dramatically boost your online revenue.",
        image: "/images/overview-woocommerce.jpg"
    },
    {
        title: "CRM Solutions",
        subtitle: "Customer Management",
        description: "Our customized CRM implementations centralize your data, automate tedious workflows, and provide actionable insights, empowering your sales and support teams to build lasting customer relationships.",
        image: "/images/overview-crm.jpg"
    },
    {
        title: "Web Designing",
        subtitle: "UI/UX Experiences",
        description: "We craft visually stunning, responsive, and SEO-optimized websites that serve as the digital face of your enterprise, ensuring every visitor enjoys an intuitive and engaging journey.",
        image: "/images/overview-webdesign.jpg"
    },
    {
        title: "IT Support",
        subtitle: "Managed Infrastructure",
        description: "Our 24/7 managed IT support ensures your critical business systems remain secure, stable, and highly efficient, minimizing downtime and allowing you to focus strictly on your core objectives.",
        image: "/images/overview-itsupport.jpg"
    },
    {
        title: "Web Development",
        subtitle: "Web Solutions",
        description: "From complex enterprise web portals to lightweight progressive web apps, our full-stack development team builds robust, scalable web architectures tailored to your specific operational needs.",
        image: "/images/overview-webdev.jpg"
    },
    {
        title: "Mobile Development",
        subtitle: "App Solutions",
        description: "We design and deploy high-performance iOS and Android mobile applications that connect your business directly to your users' fingertips, combining sleek design with flawless functionality.",
        image: "/images/overview-mobile.jpg"
    }
];

export default function SolutionsPage() {
    const [activeTab, setActiveTab] = useState(0);
    const activeData = caseStudiesData[activeTab];

    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Lightbulb size={16} className="mr-2" />
                                Premier IT Solutions
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                                Empowering you with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">premier solutions</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                At CodeBright, we are completely committed to providing exceptional solutions and unwavering technical support to meet your enterprise's every need.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><ShieldCheck size={16} className="text-teal-600" /> Managed Services</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Zap size={16} className="text-teal-600" /> High Adaptability</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Target size={16} className="text-teal-600" /> Competitive Advantage</div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="#offerings"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                                >
                                    Explore Our Services <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/solutions-hero.jpg" // Generate with prompt above
                                alt="Abstract visualization of enterprise IT solutions"
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
                        Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project.
                    </p>
                    <p className="text-lg leading-8 text-teal-100 mt-4 font-medium">
                        At <strong className="text-white">CodeBright</strong>, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving absolutely no room for compromise.
                    </p>
                </div>
            </section>

            {/* What We're Offering (Services Grid) */}
            <section id="offerings" className="bg-white py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">What We're Offering</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Dealing in all professional IT services.</p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                            One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {offerings.map((service, index) => (
                            <div key={index} className={`rounded-2xl p-6 border transition-all hover:-translate-y-1 ${service.highlight ? 'bg-teal-600 border-teal-600 shadow-lg' : 'bg-gray-50 border-gray-100 hover:border-teal-200'}`}>
                                <service.icon className={`h-8 w-8 mb-4 ${service.highlight ? 'text-teal-100' : 'text-teal-600'}`} />
                                <h3 className={`text-base font-bold mb-2 ${service.highlight ? 'text-white' : 'text-gray-900'}`}>
                                    {service.name}
                                    {service.highlight && <span className="ml-2 inline-block rounded bg-teal-500 px-2 py-0.5 text-[10px] text-white uppercase tracking-widest">Free!</span>}
                                </h3>
                                <p className={`text-sm leading-6 ${service.highlight ? 'text-teal-100' : 'text-gray-600'}`}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Case Studies Section */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Sidebar List of Fields */}
                        <div className="lg:col-span-4">
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Case Studies</h2>
                            <p className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Detailing of our products</p>

                            <ul className="flex flex-col gap-3">
                                {caseStudiesData.map((area, index) => {
                                    const isActive = activeTab === index;
                                    return (
                                        <li key={index}>
                                            <button
                                                onClick={() => setActiveTab(index)}
                                                className={`w-full flex items-center justify-between rounded-xl px-5 py-4 font-semibold transition-all text-left ${isActive
                                                        ? 'bg-teal-600 text-white shadow-md'
                                                        : 'bg-white text-gray-600 border border-gray-100 hover:border-teal-200 hover:text-teal-600'
                                                    }`}
                                            >
                                                {area.title}
                                                {isActive && <ArrowRight size={18} className="text-teal-200" />}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Main Content Area (Dynamic) */}
                        <div className="lg:col-span-8">
                            <div key={activeTab} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl h-full animate-in fade-in duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 shrink-0">
                                        <Layers size={24} className="text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">
                                            {activeData.subtitle}
                                        </p>
                                        <h3 className="text-3xl font-bold text-gray-900">
                                            {activeData.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-600 leading-8">
                                    {activeData.description}
                                </p>

                                <div className="mt-8 relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                                    <Image
                                        src={activeData.image}
                                        alt={activeData.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Consulting Excellence Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Consulting Excellence</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Best pathway to our clients.</p>
                            <p className="text-lg text-gray-600 leading-8 mb-8">
                                Our consulting process begins with a thorough assessment of your current IT infrastructure, workflows, and operational pain points to guarantee the best outcome.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    24/7 Full Service Support
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Immediate Technical Response
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Easy & Approachable Consultants
                                </li>
                            </ul>

                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl hidden lg:block">
                                <Image
                                    src="/images/consulting-team.jpg" // Generate with prompt above
                                    alt="IT Consultants discussing digital roadmap"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Content: 1-2-3 Vertical Steps */}
                        <div className="relative">
                            {/* Connecting Line */}
                            <div className="absolute left-[2.25rem] top-10 bottom-10 w-0.5 bg-gray-100 hidden md:block" />

                            <div className="space-y-12">
                                {/* Step 1 */}
                                <div className="relative flex gap-6">
                                    <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl bg-teal-50 border border-teal-100 shadow-sm z-10">
                                        <SearchCode className="h-8 w-8 text-teal-600" />
                                    </div>
                                    <div>
                                        <span className="text-5xl font-extrabold text-gray-100 block -mt-2 mb-1">01</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery and Analysis</h3>
                                        <p className="text-base text-gray-600 leading-7">
                                            Perform an in-depth analysis of the client's existing IT systems, identifying performance bottlenecks and strategic opportunities.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex gap-6">
                                    <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl bg-teal-50 border border-teal-100 shadow-sm z-10">
                                        <Wrench className="h-8 w-8 text-teal-600" />
                                    </div>
                                    <div>
                                        <span className="text-5xl font-extrabold text-gray-100 block -mt-2 mb-1">02</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Tailored Solutions</h3>
                                        <p className="text-base text-gray-600 leading-7">
                                            Architect and develop custom IT solutions and scalable infrastructure specifically based on findings from the analysis phase.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex gap-6">
                                    <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl bg-teal-600 shadow-lg z-10">
                                        <Rocket className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-5xl font-extrabold text-gray-100 block -mt-2 mb-1">03</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Deployment and Support</h3>
                                        <p className="text-base text-gray-600 leading-7">
                                            Execute smooth system rollouts and regularly communicate with our clients to manage any concerns with continuous support.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-teal-900 py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
                        Ready to upgrade your infrastructure?
                    </h2>
                    <p className="text-lg leading-8 text-teal-100 mb-10 max-w-2xl mx-auto">
                        Partner with CodeBright for dependable IT solutions that enhance your technology infrastructure and allow you to focus on your core business goals.
                    </p>
                    <Link
                        href="/contact"
                        className="rounded-xl bg-white px-8 py-4 text-base font-bold text-teal-900 shadow-lg transition-all hover:bg-gray-100 hover:scale-105 inline-block"
                    >
                        Schedule a Consultation
                    </Link>
                </div>
            </section>

        </main>
    );
}