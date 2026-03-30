import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    MapPin,
    Clock,
    User,
    ArrowRight,
    Zap,
    Target,
    BrainCircuit,
    Timer,
    CheckCircle2,
    Phone,
    Mail
} from "lucide-react";

// Event Data - Cleaned up dates and brand names for professional consistency
const events = [
    {
        month: "APR",
        day: "17",
        weekday: "Friday",
        title: "CodeBright Cloud Computing & Service Solutions",
        description: "Small merchants, businesses, and other enterprises can now use advanced cloud services to scale their operations securely and replace outdated infrastructure.",
        time: "9:00 AM - 2:00 PM",
        location: "New Embassy, Florida",
        host: "Serena Lee",
        image: "/images/event-cloud.jpg", // Generate using prompt above
    },
    {
        month: "SEP",
        day: "16",
        weekday: "Saturday",
        title: "Strategies to Expand Your Startup Company",
        description: "Discover actionable strategies to rapidly scale your startup. We cover everything from funding to building robust digital platforms for global reach.",
        time: "9:00 AM - 2:00 PM",
        location: "Kuala Lumpur, Malaysia",
        host: "Serena Lee",
        image: "/images/event-startup.jpg", // Generate using prompt above
    },
    {
        month: "JUN",
        day: "15",
        weekday: "Wednesday",
        title: "Cyber Security Enhancements in Daily Operations",
        description: "Learn how to protect your enterprise data with cutting-edge cybersecurity protocols. Small and medium businesses will learn how to secure their point of sale and internal networks.",
        time: "9:00 AM - 2:00 PM",
        location: "Monarch, Germany",
        host: "Silver Costa",
        image: "/images/event-security.jpg", // Generate using prompt above
    },
    {
        month: "AUG",
        day: "12",
        weekday: "Friday",
        title: "AI Development & Advanced Data Analytics",
        description: "Explore the latest in AI and chatbot development across all platforms. We address data structuring, privacy issues, and how to harness analytics for business growth.",
        time: "9:00 AM - 2:00 PM",
        location: "Tokyo, Japan",
        host: "Charles Roger",
        image: "/images/event-analytics.jpg", // Generate using prompt above
    },
];

// Company Stats (Reused from Portfolio for consistency)
const stats = [
    { value: "4+ Years", label: "Field Experience" },
    { value: "89+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "2020", label: "Established Year" },
    { value: "2 Mins", label: "Response Time" },
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Calendar size={16} className="mr-2" />
                                Global Tech Events
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Our mentors teaching <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">everywhere</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Every event we organize is a unique opportunity to craft memorable experiences. We go beyond the ordinary, paying attention to every detail to ensure you leave inspired.
                            </p>

                            <div className="mt-10 flex gap-4">
                                <Link
                                    href="#upcoming-events"
                                    className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800"
                                >
                                    View Schedule
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
                                src="/images/event-hero.jpg" // Generate with prompt above
                                alt="CodeBright tech conference"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events List Section */}
            <section id="upcoming-events" className="bg-gray-50/50 py-16 md:py-24 border-y border-gray-100">
                <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Company Events</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Upcoming Events</p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                            Event management can be a complex undertaking, but attending shouldn't be. Browse our upcoming global workshops and seminars below.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {events.map((event, index) => (
                            <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:border-teal-200 flex flex-col md:flex-row">

                                {/* Image & Date Box */}
                                <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden bg-gray-100 shrink-0">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Floating Date Badge */}
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 text-center min-w-[80px] shadow-lg border border-white/20">
                                        <p className="text-sm font-bold text-teal-600 uppercase leading-none">{event.month}</p>
                                        <p className="text-3xl font-extrabold text-gray-900 mt-1 leading-none">{event.day}</p>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-sm font-bold text-teal-600 uppercase tracking-wider mb-2">
                                        {event.weekday}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition">{event.title}</h3>
                                    <p className="mt-3 text-base text-gray-600 leading-7">
                                        {event.description}
                                    </p>

                                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <Clock size={18} className="text-teal-500 shrink-0" /> {event.time}
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <MapPin size={18} className="text-teal-500 shrink-0" /> {event.location}
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-medium text-gray-700 sm:col-span-2">
                                            <User size={18} className="text-teal-500 shrink-0" /> Hosted by: {event.host}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mid-page CTA */}
            <section className="bg-teal-900 py-16 md:py-20 text-center px-6">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">Build your project with us. Make it world-class.</h2>
                    <p className="text-lg leading-8 text-teal-100 mb-8">
                        Our projects are born from a passion for innovation that knows no bounds. Partner with us to bring your vision to life.
                    </p>
                    <Link
                        href="/contact"
                        className="rounded-xl bg-white px-8 py-4 text-base font-bold text-teal-900 shadow-lg transition-all hover:bg-gray-100 hover:scale-105 inline-block"
                    >
                        Book an Appointment Now
                    </Link>
                </div>
            </section>

            {/* Why Choose Us (Reused for consistency) */}
            <section className="bg-white py-16 md:py-24 border-b border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl">
                            <Image
                                src="/images/why-us.jpg" // Reusing why-us image
                                alt="Why choose our services"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Advantage</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Why our services are better than others?</p>
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                                {[
                                    { name: "Customized Approach", icon: Zap, text: "We don't believe in a one-size-fits-all approach. Our services are carefully customized to suit your specific need." },
                                    { name: "Long-term Benefits", icon: Target, text: "We deliver value that extends beyond the immediate project to provide long-term benefits." },
                                    { name: "Pivotal Development", icon: BrainCircuit, text: "Focused on core agile methodologies and high-quality product architecture." },
                                    { name: "Quick Response", icon: Timer, text: "Highly responsive communication to keep your projects on track and moving fast." },
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

            {/* Stats Section */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-y-12 gap-x-8 text-center sm:grid-cols-3 lg:grid-cols-5">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-y-3">
                                <dt className="text-4xl font-extrabold tracking-tight text-teal-600">{stat.value}</dt>
                                <dd className="text-sm font-bold text-gray-900 uppercase tracking-wider">{stat.label}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-16 md:py-24 border-t border-gray-100">
                <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
                    <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Contact</h2>
                    <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Let's Get in Touch</p>
                    <p className="mt-6 text-lg text-gray-600 leading-7 mb-10">
                        You can reach us anytime. We're ready to answer your questions and help you build your next world-class project.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">
                        <div className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 border border-teal-100 shrink-0">
                                <Mail className="h-6 w-6 text-teal-600" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Email Us</p>
                                <p className="text-base font-bold text-gray-900">hr@codebright.in</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 border border-teal-100 shrink-0">
                                <Phone className="h-6 w-6 text-teal-600" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Call Us</p>
                                <p className="text-base font-bold text-gray-900">0120-4212729</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="/contact"
                            className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-10 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-700 hover:to-teal-800"
                        >
                            Get Started
                        </Link>
                        <p className="text-sm text-gray-500">
                            By contacting us, you agree to our <Link href="/legal/terms" className="text-teal-600 hover:underline">terms and conditions</Link>.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}