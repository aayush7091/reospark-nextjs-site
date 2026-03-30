import Link from "next/link";
import {
    Scale,
    Mail,
    UserCheck,
    ShieldAlert,
    Ban,
    Server,
    Settings2,
    MessageSquare,
    CreditCard,
    Receipt,
    Copyright,
    FileEdit,
    AlertTriangle,
    ShieldCheck,
    Gavel,
    Power
} from "lucide-react";

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            {/* Page Header */}
            <section className="relative overflow-hidden bg-teal-900 bg-[url('/green_bg.png')] bg-cover bg-center bg-no-repeat px-6 py-16 md:py-20 lg:px-8 text-center">
                {/* Gradient overlay to ensure text readability over the image */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.800),transparent)] opacity-50" />

                <div className="mx-auto max-w-3xl">
                    <div className="inline-flex items-center rounded-full border border-teal-700 bg-teal-800/50 px-4 py-1.5 text-sm font-medium text-teal-100 mb-6 backdrop-blur-sm">
                        <Scale size={16} className="mr-2" />
                        Legal & Compliance
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Terms and Conditions
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-teal-100 font-medium">
                        Understand Your Rights and Responsibilities
                    </p>
                    <p className="mt-2 text-base text-teal-200">
                        Our terms define how you can use our services and what you can expect from us.
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
                                <li><a href="#general-usage" className="hover:text-teal-600 transition">1. General Usage</a></li>
                                <li><a href="#services" className="hover:text-teal-600 transition">2. Services</a></li>
                                <li><a href="#payments-refunds" className="hover:text-teal-600 transition">3. Payments and Refunds</a></li>
                                <li><a href="#intellectual-property" className="hover:text-teal-600 transition">4. Intellectual Property</a></li>
                                <li><a href="#user-content" className="hover:text-teal-600 transition">5. User Content</a></li>
                                <li><a href="#liability" className="hover:text-teal-600 transition">6. Limitation of Liability</a></li>
                                <li><a href="#indemnification" className="hover:text-teal-600 transition">7. Indemnification</a></li>
                                <li><a href="#governing-law" className="hover:text-teal-600 transition">8. Governing Law</a></li>
                                <li><a href="#termination" className="hover:text-teal-600 transition">9. Termination</a></li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4">Need clarification on these terms?</p>
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
                            <p className="text-lg leading-8 text-gray-900 font-medium">
                                Welcome to CodeBright!
                            </p>
                            <p>
                                These Terms and Conditions (“Terms”) govern your use of our website, products, and services. By accessing or using our services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our services.
                            </p>
                            <p>
                                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting, and continued use of our services constitutes your acceptance of the revised Terms.
                            </p>
                        </div>

                        <hr className="my-10 border-gray-100" />

                        {/* Section 1 */}
                        <div id="general-usage" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. General Usage</h2>
                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <UserCheck size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Eligibility</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">By using our services, you represent that you are at least 18 years old or have parental/guardian consent to use our services.</p>
                                </div>

                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <ShieldAlert size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Account Responsibility</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">If you create an account, you are responsible for maintaining the confidentiality of your login credentials and activities.</p>
                                </div>

                                <div className="rounded-2xl border border-red-100 bg-red-50/30 p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                                        <Ban size={20} className="text-red-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Prohibited Activities</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">You agree not to engage in unauthorized access, data scraping, or any activity that disrupts or harms our services.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id="services" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Services</h2>
                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <Server size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Service Availability</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">We strive to ensure uninterrupted service but cannot guarantee that our services will be available at all times or free of errors.</p>
                                </div>

                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <Settings2 size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Modifications</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">We reserve the right to modify, suspend, or discontinue any part of our services without prior notice.</p>
                                </div>

                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <MessageSquare size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Feedback</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">Any suggestions, ideas, or feedback you provide may be used by us without any obligation to you.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="payments-refunds" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Payments and Refunds</h2>
                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                                <div className="flex gap-4 items-start">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 border border-teal-100">
                                        <CreditCard size={24} className="text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mt-0 mb-1">Payment Terms</h3>
                                        <p className="text-sm leading-6 m-0 text-gray-600">All fees for our products or services must be paid in accordance with the pricing and payment terms presented at the time of purchase.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 border border-teal-100">
                                        <Receipt size={24} className="text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mt-0 mb-1">Refund Policy</h3>
                                        <p className="text-sm leading-6 m-0 text-gray-600">Refund requests will be handled in accordance with our <Link href="/legal/refunds" className="text-teal-600 hover:underline font-medium">Refund Policy</Link>, available on our website.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="intellectual-property" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                            <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <Copyright className="mt-1 h-6 w-6 shrink-0 text-gray-500" />
                                    <div className="space-y-3">
                                        <p className="m-0 text-gray-700">
                                            All content, including text, graphics, logos, and software, is the intellectual property of <strong>CodeBright</strong> or its licensors and is protected by copyright and other intellectual property laws.
                                        </p>
                                        <p className="m-0 text-gray-900 font-medium">
                                            You may not reproduce, distribute, or create derivative works from our content without prior written permission.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id="user-content" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <FileEdit size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
                                <ul className="list-disc pl-5 space-y-3 marker:text-teal-500">
                                    <li>You retain ownership of any content you submit through our services. However, by submitting content, you grant us a non-exclusive, royalty-free license to use, display, and distribute your content as necessary to provide our services.</li>
                                    <li>You are solely responsible for the content you submit and agree not to upload content that is illegal, offensive, or violates the rights of others.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div id="liability" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <AlertTriangle size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                                <p>
                                    To the fullest extent permitted by law, CodeBright will not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div id="indemnification" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <ShieldCheck size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Indemnification</h2>
                                <p>
                                    You agree to indemnify and hold harmless CodeBright, its affiliates, and employees from any claims, damages, or losses arising from your use of our services or violation of these Terms.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div id="governing-law" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <Gavel size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                                <p>
                                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these Terms will be subject to the exclusive jurisdiction of the courts in Noida, India.
                                </p>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div id="termination" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                                    <Power size={24} className="text-red-500" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                                <p>
                                    We reserve the right to terminate or suspend your access to our services at any time if you breach these Terms or engage in prohibited activities.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Contact CTA for Mobile */}
                        <div className="mt-16 block lg:hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Need clarification on these terms?</h3>
                            <p className="text-sm text-gray-600 mb-6">Our support team is happy to help you understand your rights and responsibilities.</p>
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