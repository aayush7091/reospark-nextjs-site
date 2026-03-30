import Image from "next/image";
import Link from "next/link";
import {
    ConciergeBell,
    BedDouble,
    CalendarCheck,
    Star,
    Building,
    ShieldCheck,
    BarChart3,
    Headset,
    Key,
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
        title: "Online Booking Integration",
        description: "Streamline reservations and significantly boost occupancy rates with seamless integration of online booking platforms tailored for hotels.",
        icon: CalendarCheck,
    },
    {
        title: "Guest Experience Management",
        description: "Utilize advanced technology to personalize guest experiences, increasing satisfaction, driving brand loyalty, and generating positive reviews.",
        icon: Star,
    },
    {
        title: "Property Management Solutions",
        description: "Efficiently manage daily hotel operations—including check-ins, check-outs, housekeeping, and inventory—from a single integrated system.",
        icon: Building,
    },
    {
        title: "Secure Payment Processing",
        description: "Protect guests' sensitive payment information with secure, reliable, and compliant payment solutions customized for the hospitality industry.",
        icon: ShieldCheck,
    },
    {
        title: "Advanced Analytics & Reporting",
        description: "Gain valuable insights into guest behavior and hotel performance through detailed analytics, helping optimize pricing and business strategies.",
        icon: BarChart3,
    },
    {
        title: "24/7 Technical Support",
        description: "Ensure uninterrupted hotel operations with highly responsive, around-the-clock IT support dedicated specifically to hospitality services.",
        icon: Headset,
    },
];

export default function HospitalityPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <ConciergeBell size={16} className="mr-2" />
                                Hospitality IT Solutions
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                                Elevate Your Hotel with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Smart IT</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Enhance guest experiences, streamline hotel operations, and maximize efficiency using our innovative hospitality technology solutions tailored specifically for modern hotels.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Globe size={16} className="text-teal-600" /> Customized Solutions</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Building size={16} className="text-teal-600" /> Property Management</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Star size={16} className="text-teal-600" /> Guest Satisfaction</div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                                >
                                    Request Your Consultation <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/hospitality-hero.jpg" // Generate with prompt above
                                alt="Modern luxury hotel digital experience"
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
                        Our dedicated team provides innovative IT solutions specifically crafted for hotels and the hospitality industry. With extensive experience in enhancing guest services, operational management, and digital experiences, we empower your hotel to deliver exceptional service.
                    </p>
                    <p className="text-lg leading-8 text-teal-100 mt-4 font-medium">
                        At <strong className="text-white">CodeBright</strong>, we are committed to delivering nothing short of excellence. From booking systems to guest experience platforms, we prioritize quality and seamless integration, ensuring you exceed guest expectations every time.
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
                                src="/images/hospitality-expertise.jpg" // Generate with prompt above
                                alt="Secure hotel booking and data management"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <ShieldCheck size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Secure Guest Data</p>
                                    <p className="text-xs text-gray-500 font-medium">PCI & GDPR Compliant</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Hospitality Specialization</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Premier IT Solutions for Hotels</p>

                            <div className="space-y-6 text-base text-gray-600 leading-7">
                                <p>
                                    Exceptional guest experiences start with innovative hospitality technology. Our hotel-focused IT solutions prioritize seamless guest experiences, advanced booking management, and secure transactions. Leveraging cutting-edge technology, we ensure operational efficiency and greater profitability for your property.
                                </p>
                                <p>
                                    Data security and guest privacy are at the core of our hospitality IT approach. We implement robust cybersecurity measures that safeguard guest information, ensuring full compliance with industry regulations, and building trust through secure digital interactions.
                                </p>
                                <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl mt-6 flex items-start gap-4">
                                    <Key className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                                    <p className="text-teal-900 font-medium m-0">
                                        We recognize the importance of smooth integration between booking platforms, property management systems, and customer engagement tools. Our interoperable solutions result in streamlined operations and enhanced guest loyalty.
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
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Enhancing Your Hotel with Advanced IT</p>
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
                                src="/images/why-us-hospitality.jpg" // Generate with prompt above
                                alt="Hotel managers reviewing digital dashboard"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">About CodeBright</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Why Choose Our Hotel IT Solutions?</p>
                            <p className="text-base text-gray-600 leading-7 mb-6">
                                We provide customized IT solutions tailored specifically for hotels, ensuring that your property excels in guest service, operational efficiency, and long-term profitability.
                            </p>
                            <p className="text-base text-gray-600 leading-7 mb-8">
                                Our services offer value beyond immediate implementation, helping your hotel maintain exceptional guest experiences and sustained business growth in a highly competitive market.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Tailored Hotel Management Systems
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Prompt, Reliable, & 24/7 Support
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
                        <BedDouble size={32} className="text-teal-300" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
                        Build your project with us. <br className="hidden sm:block" /> Make it world-class.
                    </h2>
                    <p className="text-lg leading-8 text-teal-100 mb-10 max-w-2xl mx-auto">
                        Our projects are born from a passion for innovation that knows no bounds. Partner with us to modernize your hospitality infrastructure today.
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