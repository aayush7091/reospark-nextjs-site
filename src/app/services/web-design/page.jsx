import Image from "next/image";
import Link from "next/link";
import {
    Palette,
    MonitorSmartphone,
    Sparkles,
    Search,
    Gauge,
    PenTool,
    Headset,
    Zap,
    Target,
    Layout,
    ArrowRight,
    CheckCircle2,
    Activity,
    Code2,
    ShoppingCart,
    Users2,
    MonitorDot,
    Cloud,
    ShieldCheck,
    Mail
} from "lucide-react";

// Web Design Features Data
const features = [
    {
        title: "User-Centric Approach",
        description: "Our web design starts by deeply understanding your target audience, ensuring maximum user engagement and satisfaction with every interaction.",
        icon: Users2,
    },
    {
        title: "SEO-Friendly Design",
        description: "We architect websites inherently optimized for search engines, increasing your organic online visibility and attracting more high-quality traffic.",
        icon: Search,
    },
    {
        title: "Responsive Layouts",
        description: "All our websites seamlessly adapt to different screen sizes, providing an optimal, pixel-perfect user experience on desktops, tablets, and mobiles.",
        icon: MonitorSmartphone,
    },
    {
        title: "Performance Optimization",
        description: "Fast-loading pages and optimized frontend performance ensure your visitors stay engaged longer and convert at significantly higher rates.",
        icon: Gauge,
    },
    {
        title: "Customized Web Solutions",
        description: "We don't use cookie-cutter templates. Our websites are specifically tailored to match your brand’s unique identity, goals, and industry requirements.",
        icon: PenTool,
    },
    {
        title: "Continuous Support",
        description: "We provide comprehensive ongoing support and updates, ensuring your website remains current, secure, and highly effective long-term.",
        icon: Headset,
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

export default function WebDesignPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                                <Palette size={16} className="mr-2" />
                                Web Design Services
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                                Transform Your Vision with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Professional Design</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                CodeBright crafts engaging, responsive websites designed to drastically enhance user experiences and accelerate your online business growth.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><MonitorSmartphone size={16} className="text-teal-600" /> Mobile-Friendly</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Sparkles size={16} className="text-teal-600" /> Custom Solutions</div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"><Target size={16} className="text-teal-600" /> Enhanced UX</div>
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
                                src="/images/web-design-hero.jpg" // Generate with prompt above
                                alt="Creative designer working on UI/UX wireframes"
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
                        Our web design solutions blend creativity with deep technical functionality, delivering visually appealing and user-friendly websites tailored precisely to your brand. Utilizing the latest design trends and technologies, we collaborate closely to understand your objectives.
                    </p>
                    <p className="text-lg leading-8 text-teal-100 mt-4 font-medium">
                        From concept to launch, <strong className="text-white">CodeBright</strong> offers clear communication and ongoing support. Through responsive design and robust development, we ensure your website engages visitors effectively across all devices to help your digital presence thrive.
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
                                src="/images/web-design-specialization.jpg" // Generate with prompt above
                                alt="Responsive web design across desktop and mobile"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <Layout size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Pixel Perfect</p>
                                    <p className="text-xs text-gray-500 font-medium">UI/UX Excellence</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Web Design Expertise</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Creating Exceptional Websites</p>

                            <div className="space-y-6 text-base text-gray-600 leading-7">
                                <p>
                                    An impactful website design is essential to attracting and retaining online visitors. Our web design process prioritizes intuitive navigation, modern aesthetic appeal, and optimal loading performance. We ensure your website clearly represents your brand identity, driving real engagement and increasing conversions.
                                </p>
                                <p>
                                    SEO and user experience (UX) are core components of our design approach. Each site we create is architecturally structured to rank effectively in search engines, ensuring your business achieves maximum online visibility and attracts highly valuable traffic.
                                </p>
                                <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl mt-6 flex items-start gap-4">
                                    <MonitorSmartphone className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                                    <p className="text-teal-900 font-medium m-0">
                                        We focus heavily on responsive design and seamless cross-platform compatibility, providing an excellent browsing experience whether users access your site from desktops, tablets, or mobile devices.
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
                        <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Web Design Features</h2>
                        <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Growing Your Online Presence</p>
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
                                src="/images/why-us-webdesign.jpg" // Generate with prompt above
                                alt="Creative team reviewing website layout"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">About CodeBright</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Why Our Web Design Services Are Superior?</p>
                            <p className="text-base text-gray-600 leading-7 mb-6">
                                We go entirely beyond standard design templates. Every website we create is uniquely tailored to your specific business objectives and target audience, ensuring you stand out online.
                            </p>
                            <p className="text-base text-gray-600 leading-7 mb-8">
                                Our solutions deliver enduring value through high-performing, heavily SEO-optimized designs that continue to drive tangible results and user engagement long after your launch date.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Unique & Engaging UI/UX Designs
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-semibold bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                                    Fast Turnaround & Responsive Support
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
                        Our projects are born from a passion for innovation that knows no bounds. Partner with us to revolutionize your online web presence today.
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