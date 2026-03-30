"use client"

import Image from "next/image";
import Link from "next/link";
import {
    Briefcase,
    MapPin,
    Banknote,
    Clock,
    Palette,
    Code2,
    Smartphone,
    MonitorDot,
    Cloud,
    ShieldCheck,
    Activity,
    Mail,
    Headset,
    Users,
    Zap,
    Target,
    BrainCircuit,
    Timer,
    ChevronRight,
    ShoppingCart,
    Users2
} from "lucide-react";


const jobs = [
    {
        title: "Graphic Designer",
        department: "UI/UX",
        location: "Sector 11, Noida, IND",
        type: "Full Time",
        salary: "₹20k - ₹50k",
        experience: "Minimum 1-2 years experience or above",
    },
    {
        title: "Python Developer Trainee",
        department: "Development",
        location: "Sector 11, Noida, IND",
        type: "Full Time Internship",
        salary: "₹5k - ₹10k",
        experience: "Internship and training",
    },
    {
        title: "Flutter Developer Trainee",
        department: "Development",
        location: "Sector 11, Noida, IND",
        type: "Full Time Internship",
        salary: "₹5k - ₹10k",
        experience: "Internship and training",
    },
    {
        title: "IT Support Specialist",
        department: "IT",
        location: "Sector 3, Noida, IND",
        type: "Full Time",
        salary: "₹10k - ₹40k",
        experience: "0-5 years experience",
    },
    {
        title: "IT Support Specialist",
        department: "IT",
        location: "Sector 11, Noida, IND",
        type: "Full Time",
        salary: "₹10k - ₹40k",
        experience: "0-5 years experience",
    },
    {
        title: "Web Designer",
        department: "Design",
        location: "Sector 11, Noida, IND",
        type: "Full Time",
        salary: "₹10k - ₹30k",
        experience: "For all level designers and freshers",
    },
];


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

export default function CareerPage() {
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
                                You have great opportunities
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Shape the future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">CodeBright</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                If you are a talented and ambitious individual looking to make a mark in your career, we invite you to explore our career opportunities.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Zap size={16} className="text-teal-600" /> Managed Services</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Target size={16} className="text-teal-600" /> Flexibility & Adaptability</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><BrainCircuit size={16} className="text-teal-600" /> Competitive Advantage</div>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <Link
                                    href="#openings"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800"
                                >
                                    View Openings
                                </Link>
                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-white border border-gray-200 px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:bg-gray-50"
                                >
                                    Book an Appointment
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/career-hero.jpg" // Generate with prompt above
                                alt="CodeBright team collaborating"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Team Section */}
            <section className="bg-teal-900 py-16 md:py-24 text-center px-6">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">A Dynamic Assembly of Top-Tier Talent</h2>
                    <p className="text-lg leading-8 text-teal-100">
                        Our team is a dynamic assembly of top-tier talent, seasoned professionals, and innovative thinkers from diverse fields. With a shared passion for innovation and excellence, our experts bring deep industry knowledge and a forward-thinking approach to every project.
                    </p>
                    <p className="text-lg leading-8 text-teal-100 mt-4">
                        At CodeBright, we pride ourselves on crafting exceptional software solutions tailored to meet the unique needs of our clients. From ideation to execution, we adhere to the highest standards of quality, ensuring our products are not only reliable but transformative.
                    </p>
                </div>
            </section>

            {/* Job Openings Section */}
            <section id="openings" className="bg-gray-50/50 py-16 md:py-24 border-y border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Opening in our company</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Job Openings & Opportunities</p>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                <Mail className="h-5 w-5 text-teal-600" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase">Send your resume to</p>
                                <a href="mailto:hr@codebright.in" className="text-base font-bold text-gray-900 hover:text-teal-600 transition">hr@codebright.in</a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job, index) => (
                            <div key={index} className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:border-teal-200 flex flex-col h-full">
                                <div className="mb-4 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 border border-teal-100 w-max">
                                    {job.department}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition">{job.title}</h3>
                                <p className="mt-2 text-sm text-gray-500">{job.experience}</p>

                                <div className="mt-6 space-y-3 flex-1">
                                    <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                        <MapPin size={16} className="text-gray-400" /> {job.location}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                        <Clock size={16} className="text-gray-400" /> {job.type}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                        <Banknote size={16} className="text-gray-400" /> {job.salary}
                                    </div>
                                </div>

                                <a href="mailto:hr@codebright.in" className="mt-8 flex w-full justify-center items-center gap-2 rounded-xl bg-gray-50 py-3 text-sm font-semibold text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white">
                                    Apply Now <ChevronRight size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We're Offering (Services) */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">What We're Offering</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Dealing in all professional IT services.</p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                            One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of hardware, software, networks, and servers.
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

            {/* Why Choose Us */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-y border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xl">
                            <Image
                                src="/images/why-us.jpg" // Generate with prompt above
                                alt="Why choose our services"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Why our services are better than others?</p>
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                                {[
                                    { name: "Customized Approach", icon: Zap, text: "We don't believe in a one-size-fits-all approach. Our services are carefully customized to suit your specific need." },
                                    { name: "Long-term Benefits", icon: Target, text: "We deliver value that extends beyond the immediate project to provide long-term benefits." },
                                    { name: "Pivotal Development", icon: BrainCircuit, text: "Focused on core agile methodologies." },
                                    { name: "Quick Response", icon: Timer, text: "Highly responsive communication to keep your projects on track." },
                                ].map((feature) => (
                                    <div key={feature.name} className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
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

            {/* Mentors / Team Roster */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Mentors</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Our Leadership & Mentors</p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 mb-8">
                            Our team is a collective force of top talents, experts, and visionaries from diverse fields.
                        </p>
                        <Link
                            href="/contact"
                            className="rounded-xl bg-teal-50 px-6 py-2.5 text-sm font-semibold text-teal-700 transition-all hover:bg-teal-100"
                        >
                            Meet our experts now
                        </Link>
                    </div>

                    {/* 4-column Team Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {team.map((person, index) => (
                            <div key={index} className="group text-center bg-gray-50 rounded-3xl p-6 border border-gray-100 transition-all hover:border-teal-200 hover:shadow-lg hover:-translate-y-1">
                                <div className="mx-auto h-24 w-24 rounded-full bg-gray-200 overflow-hidden mb-4 border-4 border-white shadow-sm relative">
                                    {/* Replace with actual image paths when you have them. UI Faces is great for placeholders. */}
                                    <Image
                                        src={`https://i.pravatar.cc/150?u=${person.name}`} // Random placeholder avatar based on name
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
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">Need any further assistance?</h2>
                    <p className="text-lg leading-8 text-teal-100 mb-10">
                        Feel free to reach out for any inquiries or assistance. Our HR and management teams are always ready to help.
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