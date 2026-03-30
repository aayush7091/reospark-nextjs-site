import Image from "next/image";
import Link from "next/link";
import {
    Building2,
    Target,
    ShieldCheck,
    Zap,
    ArrowRight,
    Code2,
    ShoppingCart,
    Users2,
    Palette,
    Headset,
    CheckCircle2,
    Activity,
    Award
} from "lucide-react";

// Company Stats Data
const stats = [
    { value: "89+", label: "Projects Delivered", desc: "We are spread around the world." },
    { value: "99%", label: "Client Satisfaction", desc: "Our clients are happy with our service." },
    { value: "100+", label: "Active Customers", desc: "Our customers are from many countries." },
    { value: "2020", label: "Established In", desc: "Our company has a great history of success." },
];

// IT Offerings Data (Filtered based on your prompt)
const offerings = [
    { name: "Development", desc: "Our development is pixel perfect in all ways.", icon: Code2 },
    { name: "Woo Commerce", desc: "We have the best team for your shopping websites.", icon: ShoppingCart },
    { name: "CRM Solutions", desc: "We enhance customer experiences for success.", icon: Users2 },
    { name: "Web Design", desc: "We create vibrant, intuitive and minimalist web.", icon: Palette },
    { name: "IT Support", desc: "Free expert assistance for your IT issues.", icon: Headset, highlight: true },
];

// Team Data
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

export default function CompanyPage() {
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
                                Our Company
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                                Providing the Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Horizon Tech Solutions</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Experience the transformative power of innovation and seamless solutions with CodeBright. Our journey doesn't end with the delivery of a solution; it begins there.
                            </p>

                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                                >
                                    Contact Us Today <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/company-hero.jpg" // Generate with prompt above
                                alt="Digital horizon and tech innovation"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-teal-900 py-12 border-y border-teal-800">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-teal-800/50">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center text-center px-4 pt-8 sm:pt-0">
                                <p className="text-4xl font-extrabold text-white mb-2">{stat.value}</p>
                                <p className="text-base font-bold text-teal-300 mb-2 uppercase tracking-wide">{stat.label}</p>
                                <p className="text-sm text-teal-100/70">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Company Section */}
            <section className="bg-white py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-2xl lg:order-last">
                            <Image
                                src="/images/company-about.jpg" // Generate with prompt above
                                alt="Executive team reviewing digital roadmap"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <Award size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Excellence Delivered</p>
                                    <p className="text-xs text-gray-500 font-medium">No Room for Compromise</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Company</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Why our company is an industry leader</p>

                            <div className="space-y-6 text-base text-gray-600 leading-7">
                                <p>
                                    Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project.
                                </p>
                                <p>
                                    At <strong>CodeBright</strong>, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><ShieldCheck size={16} className="text-teal-600" /> Managed Services</div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Zap size={16} className="text-teal-600" /> Flexibility & Adaptability</div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Target size={16} className="text-teal-600" /> Competitive Advantage</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* What We're Offering Section */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-b border-gray-100">
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
                            <div key={index} className={`rounded-2xl p-6 border transition-all hover:-translate-y-1 ${service.highlight ? 'bg-teal-600 border-teal-600 shadow-lg' : 'bg-white border-gray-100 hover:border-teal-200'}`}>
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

            {/* Team Roster Section */}
            <section className="bg-white py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Team</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Our Professional Experts</p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 mb-8">
                            Our team is a collective force of top talents, experts, and visionaries from diverse fields.
                        </p>
                        <Link
                            href="/contact"
                            className="rounded-xl bg-teal-50 text-teal-700 px-6 py-3 text-sm font-bold shadow-sm transition-all hover:bg-teal-100 border border-teal-200"
                        >
                            Book an appointment with our expert now
                        </Link>
                    </div>

                    {/* 4-column Team Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {team.map((person, index) => (
                            <div key={index} className="group text-center bg-gray-50 rounded-3xl p-6 border border-gray-100 transition-all hover:bg-white hover:border-teal-200 hover:shadow-lg hover:-translate-y-1">
                                <div className="mx-auto h-24 w-24 rounded-full bg-gray-200 overflow-hidden mb-4 border-4 border-white shadow-sm relative">
                                    <Image
                                        src={`https://i.pravatar.cc/150?u=${encodeURIComponent(person.name)}`} // Random placeholder avatar
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

            {/* Why Choose Us Section */}
            <section className="bg-gray-50/50 py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xl">
                            <Image
                                src="/images/company-why-us.jpg" // Generate with prompt above
                                alt="IT consultants discussing strategies"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">The CodeBright Difference</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Why are our services better than others?</p>
                            <p className="text-base text-gray-600 leading-7 mb-6">
                                We don't believe in a one-size-fits-all approach. Our services are carefully customized to suit your specific needs, ensuring you achieve your goals effectively and efficiently.
                            </p>
                            <p className="text-base text-gray-600 leading-7 mb-8">
                                We believe in delivering value that extends far beyond the immediate project. Our services are designed to provide sustainable, long-term benefits to your infrastructure.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    PPD Development Methodologies
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Quick Response & Dedicated Support
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
                        Need any further assistance?
                    </h2>
                    <p className="text-lg leading-8 text-teal-100 mb-10 max-w-2xl mx-auto">
                        Feel free to reach out for any inquiries or assistance. Our team is ready to help you shape your digital future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="rounded-xl bg-white px-8 py-4 text-base font-bold text-teal-900 shadow-lg transition-all hover:bg-gray-100 hover:scale-105 inline-block"
                        >
                            Book an Appointment Now
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}