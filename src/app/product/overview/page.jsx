"use client"

import Image from "next/image";
import Link from "next/link";
import {
    Building2,
    Lightbulb,
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
    ShieldCheck,
    Activity,
    Mail,
    Headset,
    CheckCircle2,
    MessageSquare,
    BellRing,
    ClipboardList,
    LayoutList,
    Layers
} from "lucide-react";
import { useState } from "react";


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


const team = [
    { name: "Priyesh Tiwari", role: "Project Manager" },
    { name: "Pradeep Kumar", role: "Sr. Python Developer" },
    { name: "Garima", role: "Python Developer" },
    { name: "Manas Rai", role: "Flutter Developer" },
    { name: "Sumit Kumar", role: "Flutter Developer" },
    { name: "Rashmi Rani Singh", role: "Sr. Flutter Developer" },
    { name: "Mayank Rajput", role: "Python Developer" },
    { name: "Ankita", role: "Flutter Developer" },
    { name: "Awanish Rai", role: "Python Developer" },
    { name: "Prabhat Kr Jha", role: "Python Developer" },
    { name: "Samiksha Katiyar", role: "Python Developer" },
    { name: "Shraddha Gupta", role: "Flutter Developer" },
    { name: "Abhishek Kumar", role: "IT Support Manager" },
    { name: "Roushan Kumar", role: "Content Support Manager" },
];


const coreValues = [
    { name: "Collaboration Tools", icon: MessageSquare },
    { name: "Smart Reminders", icon: BellRing },
    { name: "Requirement Gathering", icon: ClipboardList },
    { name: "Task Management", icon: LayoutList },
];

const caseStudiesData = [
    {
        title: "Development",
        subtitle: "Mobile Development",
        description: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
        image: "/images/overview-development.jpg"
    },
    {
        title: "Woo Commerce",
        subtitle: "Visit Site Now",
        description: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
        image: "/images/overview-woocommerce.jpg" // Make sure to add this image
    },
    {
        title: "CRM Solutions",
        subtitle: "Mobile Development",
        description: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
        image: "/images/overview-crm.jpg" // Make sure to add this image
    },
    {
        title: "Web Designing",
        subtitle: "Mobile Development",
        description: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
        image: "/images/overview-webdesign.jpg" // Make sure to add this image
    },
    {
        title: "IT Support",
        subtitle: "Mobile Development",
        description: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
        image: "/images/overview-itsupport.jpg" // Make sure to add this image
    },
    {
        title: "Web Development",
        subtitle: "Web Solutions",
        description: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
        image: "/images/overview-webdev.jpg" // Make sure to add this image
    },
    {
        title: "Mobile Development",
        subtitle: "App Solutions",
        description: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
        image: "/images/overview-mobile.jpg" // Make sure to add this image
    }
];

export default function CompanyOverviewPage() {

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
                                <Building2 size={16} className="mr-2" />
                                Company Overview
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                                A Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Innovation & Impact</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Innovation is at the heart of our identity. We embrace emerging technologies and foster a culture of creativity to shape the future of IT solutions.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><ShieldCheck size={16} className="text-teal-600" /> Managed Services</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Zap size={16} className="text-teal-600" /> High Adaptability</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Target size={16} className="text-teal-600" /> Competitive Advantage</div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="#team"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                                >
                                    Meet Our Team <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/overview-hero.jpg" // Generate with prompt above
                                alt="Abstract visualization of corporate innovation"
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
                        At <strong className="text-white">CodeBright</strong>, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.
                    </p>
                </div>
            </section>

            {/* Our True Words (Mission & Vision) */}
            <section className="bg-white py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-2xl lg:order-last">
                            <Image
                                src="/images/overview-mission.jpg" // Generate with prompt above
                                alt="Executive leadership team"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <Lightbulb size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Catalyst for Growth</p>
                                    <p className="text-xs text-gray-500 font-medium">Transformative Solutions</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our True Words</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">We're the best in all fields</p>

                            <div className="space-y-6 text-base text-gray-600 leading-7">
                                <p>
                                    At <strong>CodeBright</strong>, we are more than just a company; we are a catalyst for growth. Our journey is guided by a clear vision: to be at the forefront of transformative solutions that shape industries and enrich lives.
                                </p>
                                <p>
                                    This vision is deeply rooted in our core values: <strong>excellence, innovation, integrity, and collaboration</strong>. Excellence is the hallmark of everything we do. From delivering cutting-edge technologies to providing unparalleled services, we are relentless in our pursuit of perfection.
                                </p>

                                {/* Core Values / Features Grid */}
                                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                                    {coreValues.map((val, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 border border-teal-100 shrink-0">
                                                <val.icon size={18} className="text-teal-600" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-900">{val.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Case Studies / Expertise Section */}
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
                            {/* Added key={activeTab} to trigger a subtle fade re-render when switching tabs */}
                            <div key={activeTab} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl h-full animate-in fade-in duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 shrink-0">
                                        <Layers size={24} className="text-teal-600" />
                                    </div>
                                    <div>
                                        {/* Subtitle / Category Label */}
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">
                                            {activeData.subtitle}
                                        </p>
                                        {/* Dynamic Title */}
                                        <h3 className="text-3xl font-bold text-gray-900">
                                            {activeData.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Dynamic Description */}
                                <p className="text-lg text-gray-600 leading-8">
                                    {activeData.description}
                                </p>

                                {/* Dynamic Image */}
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

            {/* What We're Offering (Services Grid) */}
            <section className="bg-white py-16 md:py-24 border-b border-gray-100">
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

            {/* Team Roster */}
            <section id="team" className="bg-gray-50/50 py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Meet Our Team</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">The Innovators Behind the Code</p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 mb-8">
                            Our team is a collective force of top talents, experts, and visionaries from diverse fields.
                        </p>
                    </div>

                    {/* 4-column Team Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {team.map((person, index) => (
                            <div key={index} className="group text-center bg-white rounded-3xl p-6 border border-gray-100 transition-all hover:border-teal-200 hover:shadow-lg hover:-translate-y-1">
                                <div className="mx-auto h-24 w-24 rounded-full bg-gray-200 overflow-hidden mb-4 border-4 border-white shadow-sm relative">
                                    <Image
                                        src={`https://i.pravatar.cc/150?u=${encodeURIComponent(person.name)}`} // Random placeholder avatar based on name
                                        alt={person.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                                <p className="text-sm font-medium text-teal-600 mt-1">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-teal-900 py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
                        Need any further assistance?
                    </h2>
                    <p className="text-lg leading-8 text-teal-100 mb-10 max-w-2xl mx-auto">
                        Feel free to reach out for any inquiries or assistance. We are always ready to help you shape the digital landscape of tomorrow.
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