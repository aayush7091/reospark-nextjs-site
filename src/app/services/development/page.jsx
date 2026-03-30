import Image from "next/image";
import Link from "next/link";
import {
    Code2,
    Terminal,
    ShieldCheck,
    Zap,
    GitMerge,
    Database,
    Gauge,
    TestTube,
    Activity,
    ArrowRight,
    CheckCircle2,
    Target,
    BrainCircuit,
    ShoppingCart,
    Users2,
    Palette,
    MonitorDot,
    Cloud,
    Mail,
    Headset,
    Briefcase
} from "lucide-react";

// Development Features Data
const features = [
    {
        title: "Custom Requirements Analysis",
        description: "Thoroughly analyzing your business requirements ensures the software architecture aligns perfectly with your goals and expectations from day one.",
        icon: Briefcase,
    },
    {
        title: "Continuous Integration (CI/CD)",
        description: "We use continuous integration and delivery methodologies to accelerate software deployments, reduce bottlenecks, and maintain high quality.",
        icon: Terminal,
    },
    {
        title: "Seamless System Integration",
        description: "Our developers build software with interoperability in mind, enabling seamless API integration with your existing systems and third-party platforms.",
        icon: GitMerge,
    },
    {
        title: "Advanced Data Management",
        description: "We provide robust database architecture and data management solutions, ensuring your applications scale efficiently with growing data volumes.",
        icon: Database,
    },
    {
        title: "Performance Optimization",
        description: "We focus heavily on delivering lightweight, powerful software optimized for speed, responsiveness, and highly efficient server resource usage.",
        icon: Gauge,
    },
    {
        title: "Comprehensive Testing",
        description: "Rigorous quality assurance (QA) and automated testing ensure the reliability, security, and optimal performance of your software before launch.",
        icon: TestTube,
    },
];

// IT Offerings Data (Reused for consistency)
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

export default function SoftwareDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Code2 size={16} className="mr-2" />
                                Software Development Services
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                                Innovative Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Software Solutions</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                CodeBright's expert team specializes in delivering customized software solutions engineered to meet your business goals with precision, scalability, and efficiency.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Terminal size={16} className="text-teal-600" /> End-to-End Solutions</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Zap size={16} className="text-teal-600" /> Agile Methodology</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Target size={16} className="text-teal-600" /> Competitive Edge</div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                                >
                                    Start Your Project <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/software-dev-hero.jpg" // Generate with prompt above
                                alt="Programmers collaborating on custom software"
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
                        Our software development expertise ensures reliable, scalable, and tailored solutions for your unique business requirements. Using agile development methodologies, we work closely with you throughout every step—from initial concept and planning to implementation and deployment.
                    </p>
                    <p className="text-lg leading-8 text-teal-100 mt-4 font-medium">
                        At <strong className="text-white">CodeBright</strong>, our transparent communication and iterative processes allow for maximum flexibility and continuous improvement, guaranteeing your software remains robust and competitive in the evolving digital landscape.
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
                                src="/images/software-dev-expertise.jpg" // Generate with prompt above
                                alt="Secure software architecture visualization"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <ShieldCheck size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Secure by Design</p>
                                    <p className="text-xs text-gray-500 font-medium">Enterprise Grade Architecture</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Development Expertise</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Excellence in Software Development</p>

                            <div className="space-y-6 text-base text-gray-600 leading-7">
                                <p>
                                    Precision and quality define successful software solutions. Our software development approach prioritizes robust security and efficient performance, ensuring that every product we deliver meets the highest industry standards.
                                </p>
                                <p>
                                    Data protection and security compliance are fundamental aspects of our development process. Our solutions comply fully with modern regulations, safeguarding your data and enhancing trust among your users and stakeholders.
                                </p>
                                <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl mt-6 flex items-start gap-4">
                                    <GitMerge className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                                    <p className="text-teal-900 font-medium m-0">
                                        Recognizing the importance of system integration, our solutions are designed with seamless interoperability in mind, facilitating smooth and efficient collaboration between various software platforms and legacy technologies.
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
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Development Features</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Power Your Vision Through Expert Development</p>
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

            {/* Why Choose Us Section */}
            <section className="bg-gray-50/50 py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xl">
                            <Image
                                src="/images/why-us-development.jpg" // Generate with prompt above
                                alt="Agile development team reviewing a Kanban board"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">About CodeBright</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Why Our Development Services Stand Out</p>
                            <p className="text-base text-gray-600 leading-7 mb-6">
                                We focus entirely on delivering customized software solutions precisely aligned with your business objectives, ensuring optimal ROI and a distinct competitive advantage.
                            </p>
                            <p className="text-base text-gray-600 leading-7 mb-8">
                                Our approach extends far beyond immediate project requirements, providing long-term value, highly scalable architecture, and technical adaptability to your evolving business demands.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Agile Development Process & Sprints
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Rapid Response & Continuous Support
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
                        Our projects are born from a passion for innovation that knows no bounds. Partner with us to engineer your next software masterpiece today.
                    </p>
                    <Link
                        href="/contact"
                        className="rounded-xl bg-white px-8 py-4 text-base font-bold text-teal-900 shadow-lg transition-all hover:bg-gray-100 hover:scale-105 inline-block"
                    >
                        Start Your Software Project
                    </Link>
                </div>
            </section>

        </main>
    );
}