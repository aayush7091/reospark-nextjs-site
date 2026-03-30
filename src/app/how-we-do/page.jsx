import Image from "next/image";
import Link from "next/link";
import {
    Workflow,
    Lightbulb,
    PenTool,
    Layout,
    Search,
    Database,
    Megaphone,
    ArrowRight,
    Activity,
    Users
} from "lucide-react";

// Software Engineering Phases Data
const phases = [
    {
        num: "01",
        title: "Brainstorming Ideas",
        description: "It is a dynamic and collaborative technique that unleashes creativity, aligning your core business vision with technical possibilities.",
        icon: Lightbulb,
    },
    {
        num: "02",
        title: "Product Design",
        description: "It is a dynamic and multi-faceted process that revolves around user experience, wireframing, and creating intuitive digital prototypes.",
        icon: PenTool,
    },
    {
        num: "03",
        title: "Front-End Development",
        description: "This is the art and science of creating visually appealing, highly responsive, and interactive user interfaces using modern web frameworks.",
        icon: Layout,
    },
    {
        num: "04",
        title: "SEO Optimization",
        description: "It is an indispensable strategy for businesses, ensuring your digital products achieve maximum visibility and rank highly in search engines.",
        icon: Search,
    },
    {
        num: "05",
        title: "Back-End Development",
        description: "This is the robust engine that powers functionality, handles complex business logic, manages databases, and ensures enterprise-grade security.",
        icon: Database,
    },
    {
        num: "06",
        title: "Digital Marketing",
        description: "This innovative approach utilizes digital and online platforms to strategically launch your product, attract users, and drive long-term growth.",
        icon: Megaphone,
    },
];

// Client Data
const clients = [
    "Milleniance", "Sona Journey Mart", "EBC", "Faber",
    "Carrier Media India", "Yatra India", "APCTT", "Maruti Suzuki",
    "Relaxo", "Turkish Airlines", "Educomp", "Tedi India",
    "Aarohi Impex", "Student Advisor", "Digi Gyan", "Deepu Prakashan",
    "Zen", "Literacy India", "Gayantantra", "Photo Becho"
];

export default function HowWeWorkPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Workflow size={16} className="mr-2" />
                                Our Methodology
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                                Our Phases in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Software Engineering</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Software development is a multifaceted process that involves various features and highly efficient methodologies. At CodeBright, we ensure every step is optimized for your success.
                            </p>

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
                                src="/images/process-hero.jpg" // Generate with prompt above
                                alt="Agile software engineering workflow"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process Steps Grid */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-y border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">How We Do It</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">A Proven Development Cycle</p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                            We follow a strict, highly refined agile methodology to ensure your product is delivered on time, securely, and exactly to your specifications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {phases.map((phase, index) => (
                            <div key={index} className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:border-teal-200 group overflow-hidden">

                                {/* Background Watermark Number */}
                                <div className="absolute -right-6 -bottom-8 text-[120px] font-black text-gray-50/80 group-hover:text-teal-50/50 transition-colors pointer-events-none select-none z-0">
                                    {phase.num}
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 border border-teal-100 transition-colors group-hover:bg-teal-600 group-hover:border-teal-600">
                                            <phase.icon className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-xl font-black text-teal-200">{phase.num}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">{phase.title}</h3>
                                    <p className="text-sm leading-6 text-gray-600">{phase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Happy Clients Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div className="inline-flex items-center justify-center rounded-full bg-teal-50 p-3 mb-4 border border-teal-100">
                            <Users size={24} className="text-teal-600" />
                        </div>
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Trusted Worldwide</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Our Happy Clients</p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                            We are incredibly proud to have partnered with these visionary brands, enterprises, and organizations to build transformative digital solutions.
                        </p>
                    </div>

                    {/* Client "Logo" Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-gray-100 bg-gray-50 transition-all hover:bg-white hover:border-teal-200 hover:shadow-lg group"
                            >
                                <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Our Happy Client
                                </p>
                                <h4 className="text-sm font-extrabold text-gray-800 group-hover:text-gray-900 transition-colors">
                                    {client}
                                </h4>
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
                        Ready to start your phase one?
                    </h2>
                    <p className="text-lg leading-8 text-teal-100 mb-10 max-w-2xl mx-auto">
                        Bring your ideas to life with our expert software engineering process. Partner with CodeBright today and let's build something extraordinary.
                    </p>
                    <Link
                        href="/contact"
                        className="rounded-xl bg-white px-8 py-4 text-base font-bold text-teal-900 shadow-lg transition-all hover:bg-gray-100 hover:scale-105 inline-block"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>

        </main>
    );
}