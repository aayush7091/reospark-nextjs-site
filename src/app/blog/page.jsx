import Image from "next/image";
import Link from "next/link";
import {
    Newspaper,
    ArrowRight,
    Smartphone,
    CheckCircle2,
    Apple,
    Play,
    Mail,
    Phone
} from "lucide-react";

// Blog Post Data
const blogs = [
    {
        category: "Software Development",
        title: "How Python is Transforming Modern Software Development",
        description: "Discover how Python’s simplicity and versatility make it a top choice for innovative software solutions in 2026 and beyond.",
        image: "/images/blog-python.jpg", // Generate using prompt above
        tags: ["Best Practices for Clean Code", "Building Scalable Applications"],
        link: "/blog/python-transforming-software"
    },
    {
        category: "Cloud Storage",
        title: "Maximizing Efficiency with AWS S3: Best Practices",
        description: "Learn how AWS S3 provides scalable and secure cloud storage solutions for businesses, and discover best practices for optimizing your usage.",
        image: "/images/blog-aws.jpg", // Generate using prompt above
        tags: ["Scalable Storage", "Improved Security", "Cost-Efficient"],
        link: "/blog/aws-s3-efficiency"
    },
    {
        category: "Software Development",
        title: "Boosting Collaboration & Code Management with GitHub",
        description: "Explore how GitHub streamlines collaborative development with version control, issue tracking, and seamless integrations with CI/CD tools.",
        image: "/images/blog-github.jpg", // Generate using prompt above
        tags: ["Version Control", "Continuous Integration", "Code Review"],
        link: "/blog/github-collaboration"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24 text-center">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-4xl">
                    <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                        <Newspaper size={16} className="mr-2" />
                        Our Blogs & Insights
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                        Discover Expert Tips and Trends in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Software</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Stay ahead with insights from our experts in Python, Flutter, and SaaS solutions. Subscribe to our blog for updates on the latest industry trends, development tips, and innovative solutions that drive success.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <form className="flex w-full max-w-md items-center gap-2 rounded-2xl bg-white p-2 shadow-lg border border-gray-100">
                            <input
                                type="email"
                                placeholder="Enter your email to subscribe"
                                className="w-full bg-transparent px-4 py-2 text-sm focus:outline-none text-gray-900 placeholder:text-gray-400"
                                required
                            />
                            <button
                                type="submit"
                                className="rounded-xl bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 shrink-0"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Blog Grid Section */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-y border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <div key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:border-teal-200 h-full">

                                {/* Blog Image */}
                                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold text-teal-700 uppercase tracking-wider shadow-sm border border-white/20">
                                        {blog.category}
                                    </div>
                                </div>

                                {/* Blog Content */}
                                <div className="flex flex-col flex-1 p-8">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition leading-snug">
                                        {blog.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-gray-600 flex-1">
                                        {blog.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {blog.tags.map((tag, i) => (
                                            <span key={i} className="inline-block rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-500 border border-gray-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <div className="mt-8 pt-5 border-t border-gray-100">
                                        <Link href={blog.link} className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 group/link">
                                            Read Article <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured App Promo Section (Work Observers) */}
            <section className="bg-teal-900 py-16 md:py-24 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.teal.800),transparent_50%)] opacity-60" />

                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Promo Text */}
                        <div>
                            <div className="inline-flex items-center rounded-full border border-teal-700 bg-teal-800/50 px-3 py-1 text-xs font-bold text-teal-200 uppercase tracking-widest mb-6">
                                Featured Product
                            </div>
                            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                                Start your project <br />
                                <span className="text-teal-300">from your pocket.</span>
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-teal-100">
                                Seamless productivity with <strong>Work Observers</strong>. Download the app today and unlock a new level of organization, efficiency, and real-time team management. Available on all responsive devices.
                            </p>

                            <div className="mt-8 space-y-3">
                                <div className="flex items-center gap-3 text-teal-50 font-medium">
                                    <CheckCircle2 size={20} className="text-teal-400" /> Pivotal Product Development
                                </div>
                                <div className="flex items-center gap-3 text-teal-50 font-medium">
                                    <CheckCircle2 size={20} className="text-teal-400" /> Incredibly Easy to Use
                                </div>
                            </div>

                            {/* App Store Buttons */}
                            <div className="mt-10 flex flex-wrap gap-4">
                                <button className="flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 transition-transform hover:scale-105 shadow-lg">
                                    <Apple size={24} className="text-gray-900" />
                                    <div className="text-left">
                                        <p className="text-[10px] font-semibold text-gray-500 uppercase leading-none">Get it on</p>
                                        <p className="text-sm font-bold text-gray-900 leading-tight">App Store</p>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 transition-transform hover:scale-105 shadow-lg">
                                    <Play size={24} className="text-gray-900" fill="currentColor" />
                                    <div className="text-left">
                                        <p className="text-[10px] font-semibold text-gray-500 uppercase leading-none">Get it on</p>
                                        <p className="text-sm font-bold text-gray-900 leading-tight">Play Store</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* App Mockup Image */}
                        <div className="relative aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                            <Image
                                src="/images/app-promo.png" // Use a transparent PNG mockup of phones here
                                alt="Work Observers App Interface"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Form Section (Standardized Footer Contact) */}
            <section id="contact" className="bg-white py-16 md:py-24 border-t border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        <div>
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Contact</h2>
                            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Let's Get in Touch</p>
                            <p className="text-lg text-gray-600 leading-7 mb-10">
                                You can reach us anytime via the form, or using our direct channels below. We are always ready to collaborate on your next big idea.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 shrink-0">
                                        <Mail className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">Email Us</p>
                                        <p className="text-base font-bold text-gray-900">hr@codebright.in</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 shrink-0">
                                        <Phone className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">Call Us</p>
                                        <p className="text-base font-bold text-gray-900">0120-4212729</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Your First Name</label>
                                        <input type="text" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Your Last Name</label>
                                        <input type="text" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Your Email</label>
                                        <input type="email" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Your Number</label>
                                        <input type="tel" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white" placeholder="+91 00000 00000" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Leave us a message...</label>
                                    <textarea rows={4} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none bg-white" placeholder="How can we help?"></textarea>
                                </div>

                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="terms-blog" className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600 cursor-pointer" />
                                    <label htmlFor="terms-blog" className="text-sm text-gray-600 cursor-pointer">
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