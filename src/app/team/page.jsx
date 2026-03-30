import Image from "next/image";
import Link from "next/link";
import {
    Users,
    Lightbulb,
    Target,
    Award,
    GraduationCap,
    Sparkles,
    Mail,
    Phone,
    ArrowRight,
    CheckSquare
} from "lucide-react";

// Team Data
const teamMembers = [
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

// Features Data (Cleaned up repetitive text for professional presentation)
const features = [
    {
        title: "Diverse Expertise",
        description: "Our team boasts a wide range of expertise, encompassing various IT disciplines and industries. This wealth of knowledge allows us to tackle complex challenges.",
        icon: Users,
    },
    {
        title: "Collaborative Culture",
        description: "We foster a collaborative environment where ideas flow freely. By working together closely, we ensure every project benefits from collective intelligence.",
        icon: Lightbulb,
    },
    {
        title: "Customer-Centric Approach",
        description: "Everything we do revolves around our clients. We actively listen to your needs and tailor our software solutions to drive your specific business goals.",
        icon: Target,
    },
    {
        title: "Passion for Excellence",
        description: "We don't settle for 'good enough.' Our team is driven by a deep passion for delivering pixel-perfect, high-performance digital products.",
        icon: Award,
    },
    {
        title: "Empowered Learning",
        description: "Technology moves fast, and so do we. We heavily invest in continuous learning, ensuring our developers stay ahead of industry trends and frameworks.",
        icon: GraduationCap,
    },
    {
        title: "Innovation and Creativity",
        description: "We believe that diversity fuels creativity. Our team constantly explores out-of-the-box approaches to build truly innovative and transformative software.",
        icon: Sparkles,
    },
];

// Company Stats
const stats = [
    { value: "4+ Years", label: "Field Experience" },
    { value: "89+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "2020", label: "Established Year" },
    { value: "2 Mins", label: "Response Time" },
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Users size={16} className="mr-2" />
                                Meet our highly talented team
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                The minds behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">CodeBright</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Our team is a vibrant tapestry of backgrounds, expertise, and perspectives. We believe that diversity fuels innovation and creativity.
                            </p>

                            <div className="mt-10">
                                <Link
                                    href="#contact"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800 inline-flex items-center gap-2"
                                >
                                    Book an Appointment <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* AI Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/team-hero.jpg" // Generate with prompt above
                                alt="CodeBright team collaborating"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-y border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Features</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Boosting your business using our team</p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                            Our team is a melting pot of diverse expertise and skills. From seasoned industry veterans to young talents, every member brings a unique set of experiences.
                        </p>
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

            {/* Team Grid Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Team</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Our Professional Experts</p>
                            <p className="mt-4 max-w-2xl text-base text-gray-600">
                                Our team is a collective force of top talents, experts, and visionaries from diverse fields. Are you busy putting out IT fires instead of focusing on your core business? Let our leaders handle it.
                            </p>
                        </div>
                        <Link
                            href="#contact"
                            className="rounded-xl bg-teal-50 border border-teal-100 px-6 py-3 text-sm font-semibold text-teal-700 transition-all hover:bg-teal-100 shrink-0"
                        >
                            Book an expert now
                        </Link>
                    </div>

                    {/* Dynamic Grid for 14 Members */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamMembers.map((person, index) => (
                            <div key={index} className="group text-center bg-gray-50 rounded-3xl p-6 border border-gray-100 transition-all hover:border-teal-200 hover:shadow-lg hover:-translate-y-1">
                                <div className="mx-auto h-28 w-28 rounded-full bg-gray-200 overflow-hidden mb-5 border-4 border-white shadow-sm relative">
                                    <Image
                                        src={`https://i.pravatar.cc/150?u=${encodeURIComponent(person.name)}`}
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

            {/* Stats Section */}
            <section className="bg-teal-900 py-16">
                <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-y-12 gap-x-8 text-center sm:grid-cols-3 lg:grid-cols-5">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-y-3">
                                <dt className="text-4xl font-extrabold tracking-tight text-white">{stat.value}</dt>
                                <dd className="text-sm font-bold text-teal-200 uppercase tracking-wider">{stat.label}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="bg-gray-50/50 py-16 md:py-24 border-t border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Text */}
                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Contact</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Let's Get in Touch</p>
                            <p className="text-lg text-gray-600 leading-7 mb-10">
                                Need any further assistance? Feel free to reach out for any inquiries. You can reach us anytime via the form, or using our direct channels below.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm shrink-0">
                                        <Mail className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">Email Us</p>
                                        <p className="text-base font-bold text-gray-900">hr@codebright.in</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm shrink-0">
                                        <Phone className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">Call Us</p>
                                        <p className="text-base font-bold text-gray-900">0120-4212729</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form UI */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">Your First Name</label>
                                        <input type="text" id="firstName" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="John" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">Your Last Name</label>
                                        <input type="text" id="lastName" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Your Email</label>
                                        <input type="email" id="email" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Your Number</label>
                                        <input type="tel" id="phone" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="+91 00000 00000" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Leave us a message...</label>
                                    <textarea id="message" rows={4} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none" placeholder="How can our team help you?"></textarea>
                                </div>

                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600 cursor-pointer" />
                                    <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                                        You agree to our <Link href="/legal/terms" className="text-teal-600 hover:underline">terms and conditions</Link>.
                                    </label>
                                </div>

                                <button type="button" className="w-full rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                                    Get Started
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}