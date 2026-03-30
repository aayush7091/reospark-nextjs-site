import Image from "next/image";
import Link from "next/link";
import {
    HeartPulse,
    ShieldCheck,
    Database,
    GitMerge,
    ClipboardList,
    LineChart,
    Zap,
    Target,
    BrainCircuit,
    Timer,
    Activity,
    ArrowRight
} from "lucide-react";

// Features Data (Deduplicated and refined for professional tone)
const features = [
    {
        title: "Requirements Gathering",
        description: "The development process starts with gathering and analyzing requirements from stakeholders, including clients, end-users, and medical business analysts.",
        icon: ClipboardList,
    },
    {
        title: "DevOps & Interoperability",
        description: "In today's interconnected world, software must integrate seamlessly. We develop with interoperability in mind, ensuring smooth data exchange across platforms.",
        icon: GitMerge,
    },
    {
        title: "Data Integration & Scalability",
        description: "Healthcare applications are designed to scale. As user bases grow and patient data increases, our software robustly handles high-volume information safely.",
        icon: Database,
    },
    {
        title: "Analytics Performance",
        description: "We implement powerful analytics engines that process vast amounts of medical data in real-time, delivering actionable insights for better patient outcomes.",
        icon: LineChart,
    },
];

export default function HealthcarePage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <HeartPulse size={16} className="mr-2" />
                                Healthcare IT Solutions
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Transforming patient care through <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Technology</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                In the ever-evolving landscape of healthcare, technology plays a pivotal role in shaping the future of patient care, medical services, and overall industry efficiency.
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
                                src="/images/healthcare-hero.jpg" // Generate with prompt above
                                alt="Doctor using modern healthcare technology"
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

            {/* Specialization Section */}
            <section className="bg-white py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-2xl lg:order-last">
                            <Image
                                src="/images/healthcare-security.jpg" // Generate with prompt above
                                alt="Healthcare data security and HIPAA compliance"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <ShieldCheck size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">HIPAA Compliant</p>
                                    <p className="text-xs text-gray-500 font-medium">Enterprise Grade Security</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Healthcare Specialization</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">We are the best in healthcare technology</p>

                            <div className="space-y-6 text-base text-gray-600 leading-7">
                                <p>
                                    Accurate diagnosis is crucial in effective healthcare delivery. Our projects emphasize the utmost importance of data security and privacy in healthcare IT solutions.
                                </p>
                                <p>
                                    Robust cybersecurity measures are implemented to safeguard sensitive patient information, ensuring compliance with relevant regulations such as the Health Insurance Portability and Accountability Act (HIPAA). By prioritizing data protection, patient trust is bolstered, and healthcare organizations can operate with confidence in the digital realm.
                                </p>
                                <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl mt-6">
                                    <p className="text-teal-900 font-medium m-0">
                                        The Healthcare IT project recognizes the importance of interoperability among healthcare systems. We ensure seamless data exchange between different healthcare providers, laboratories, and pharmacies.
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
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Boosting your business using our team</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                                src="/images/why-us.jpg" // Re-use the standard why-us image
                                alt="Why choose our healthcare IT services"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Why our services are better than others?</p>
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                                {[
                                    { name: "Customized Approach", icon: Zap, text: "We don't believe in a one-size-fits-all approach. Our services are carefully customized to suit your specific healthcare facility's needs." },
                                    { name: "Long-term Benefits", icon: Target, text: "We deliver value that extends beyond the immediate project to provide long-term operational benefits." },
                                    { name: "Pivotal Development", icon: BrainCircuit, text: "Focused on core agile methodologies and scalable medical architectures." },
                                    { name: "Quick Response", icon: Timer, text: "Highly responsive communication to keep your IT projects on track and moving fast." },
                                ].map((feature) => (
                                    <div key={feature.name} className="relative bg-gray-50 p-6 rounded-2xl border border-gray-100 transition hover:border-teal-200">
                                        <dt>
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-100">
                                                <feature.icon className="h-5 w-5 text-teal-600" aria-hidden="true" />
                                            </div>
                                            <p className="mt-4 text-base font-bold text-gray-900 m-0">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 text-sm leading-6 text-gray-600 m-0">{feature.text}</dd>
                                    </div>
                                ))}
                            </dl>
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
                        Our projects are born from a passion for innovation that knows no bounds. Partner with us to modernize your healthcare IT infrastructure today.
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