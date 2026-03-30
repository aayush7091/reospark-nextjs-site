import Link from "next/link";
import {
    Cookie,
    Mail,
    ShieldAlert,
    LineChart,
    SlidersHorizontal,
    Target,
    CheckCircle2,
    Settings,
    ToggleRight,
    Globe,
    RefreshCcw
} from "lucide-react";

export default function CookiesPolicyPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            {/* Page Header */}
            <section className="relative overflow-hidden bg-teal-900 bg-[url('/green_bg.png')] bg-cover bg-center bg-no-repeat px-6 py-16 md:py-20 lg:px-8 text-center">
                {/* Gradient overlay to ensure text readability over the image */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.800),transparent)] opacity-50" />

                <div className="mx-auto max-w-3xl">
                    <div className="inline-flex items-center rounded-full border border-teal-700 bg-teal-800/50 px-4 py-1.5 text-sm font-medium text-teal-100 mb-6 backdrop-blur-sm">
                        <Cookie size={16} className="mr-2" />
                        Legal & Compliance
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Cookies Policy
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-teal-100 font-medium">
                        Understanding Our Use of Cookies
                    </p>
                    <p className="mt-2 text-base text-teal-200">
                        We use cookies to improve your experience, analyze site performance, and personalize content. Learn more about how we use cookies below.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Sticky Sidebar (Table of Contents) */}
                    <div className="hidden lg:block lg:col-span-4 sticky top-32">
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                                Contents
                            </h3>
                            <ul className="space-y-3 text-sm font-medium text-gray-500">
                                <li><a href="#introduction" className="hover:text-teal-600 transition">Introduction</a></li>
                                <li><a href="#what-are-cookies" className="hover:text-teal-600 transition">1. What Are Cookies?</a></li>
                                <li><a href="#types-of-cookies" className="hover:text-teal-600 transition">2. Types of Cookies We Use</a></li>
                                <li><a href="#how-we-use" className="hover:text-teal-600 transition">3. How We Use Cookies</a></li>
                                <li><a href="#managing-cookies" className="hover:text-teal-600 transition">4. Managing Cookies</a></li>
                                <li><a href="#third-party" className="hover:text-teal-600 transition">5. Third-Party Cookies</a></li>
                                <li><a href="#policy-changes" className="hover:text-teal-600 transition">6. Changes to This Policy</a></li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4">Questions about our privacy practices?</p>
                                <Link
                                    href="/contact"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
                                >
                                    <Mail size={16} />
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Legal Text Content */}
                    <div className="lg:col-span-8 prose prose-teal max-w-none text-gray-600">

                        {/* Introduction */}
                        <div id="introduction" className="scroll-mt-32">
                            <p className="text-lg leading-8">
                                This Cookies Policy explains how <strong className="text-gray-900">CodeBright</strong> ("we", "our", "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control their use.
                            </p>
                        </div>

                        <hr className="my-10 border-gray-100" />

                        {/* Section 1 */}
                        <div id="what-are-cookies" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files that are stored on your device when you visit a website. They help the website remember information about your visit, making it easier to use the site again and enhancing your experience. Cookies may store preferences, session information, and other details.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div id="types-of-cookies" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Types of Cookies We Use</h2>

                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                                {/* Essential Cookies */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100 hover:shadow-md">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
                                        <ShieldAlert size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Essential Cookies</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        These cookies are necessary for the functioning of our website and cannot be disabled. They include cookies that enable you to log in, secure your account, and perform other essential functions.
                                    </p>
                                </div>

                                {/* Performance Cookies */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100 hover:shadow-md">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
                                        <LineChart size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Performance Cookies</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve website performance and usability.
                                    </p>
                                </div>

                                {/* Functional Cookies */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100 hover:shadow-md">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
                                        <SlidersHorizontal size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Functional Cookies</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        These cookies remember your preferences and settings, such as language, region, or accessibility preferences, to enhance your browsing experience.
                                    </p>
                                </div>

                                {/* Advertising Cookies */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100 hover:shadow-md">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
                                        <Target size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Advertising Cookies</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        These cookies are used to show you relevant advertisements based on your interests. They also help us measure the effectiveness of our advertising campaigns.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="how-we-use" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Cookies</h2>
                            <p className="mb-4">We use cookies to:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                                    <span className="text-gray-600">Provide you with a seamless user experience.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                                    <span className="text-gray-600">Remember your preferences and settings.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                                    <span className="text-gray-600">Analyze website traffic and performance.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                                    <span className="text-gray-600">Show relevant advertisements and measure ad performance.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div id="managing-cookies" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Managing Cookies</h2>
                            <p className="mb-6">You can control and manage cookies in several ways:</p>

                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                                        <Settings size={20} className="text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900 m-0">Browser Settings</h4>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Most web browsers allow you to control cookies through their settings. You can set your browser to block or delete cookies. However, please note that some features of our website may not function properly if cookies are disabled.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                                        <ToggleRight size={20} className="text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900 m-0">Cookie Banner</h4>
                                        <p className="mt-1 text-sm text-gray-600">
                                            When you visit our site, you can adjust your preferences using the cookie banner that appears at the bottom of the screen.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 rounded-xl bg-gray-50 p-4 border border-gray-100 text-sm">
                                For more detailed information on managing and deleting cookies, visit{" "}
                                <a
                                    href="https://aboutcookies.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-teal-600 hover:text-teal-700 underline"
                                >
                                    aboutcookies.org
                                </a>.
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id="third-party" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <Globe size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Cookies</h2>
                                <p>
                                    We may allow third-party services to set cookies on our website for analytics, advertising, and other purposes. These third parties include services like Google Analytics, Facebook, or other marketing platforms. We encourage you to review the privacy policies of these providers to understand their cookie practices.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div id="policy-changes" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <RefreshCcw size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Policy</h2>
                                <p>
                                    We may update this Cookies Policy from time to time to reflect changes in our practices or applicable laws. We encourage you to review this policy periodically to stay informed about our use of cookies.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Contact CTA for Mobile */}
                        <div className="mt-16 block lg:hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Questions about our privacy practices?</h3>
                            <p className="text-sm text-gray-600 mb-6">Reach out to our compliance team for more info.</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
                            >
                                <Mail size={16} />
                                Contact Us
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}