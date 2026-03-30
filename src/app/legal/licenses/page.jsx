"use client";

import Link from "next/link";
import { ShieldCheck, Mail, ArrowRight, User, Users, Building2 } from "lucide-react";

export default function LicensesPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            {/* Page Header */}
            <section className="relative overflow-hidden bg-teal-900 bg-[url('/green_bg.png')] bg-cover bg-center bg-no-repeat px-6 py-16 md:py-20 lg:px-8 text-center">
                {/* Gradient overlay to ensure text readability over the image */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.800),transparent)] opacity-50" />

                <div className="mx-auto max-w-3xl">
                    <div className="inline-flex items-center rounded-full border border-teal-700 bg-teal-800/50 px-4 py-1.5 text-sm font-medium text-teal-100 mb-6 backdrop-blur-sm">
                        <ShieldCheck size={16} className="mr-2" />
                        Legal & Compliance
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Licenses Policy
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-teal-100 font-medium">
                        Manage Your Access Rights
                    </p>
                    <p className="mt-2 text-base text-teal-200">
                        Understand the terms and conditions of our licenses to maximize the benefits of using our products and services.
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
                                <li><a href="#types-of-licenses" className="hover:text-teal-600 transition">1. Types of Licenses</a></li>
                                <li><a href="#license-usage" className="hover:text-teal-600 transition">2. License Usage</a></li>
                                <li><a href="#managing-licenses" className="hover:text-teal-600 transition">3. Managing Licenses</a></li>
                                <li><a href="#renewal-expiration" className="hover:text-teal-600 transition">4. Renewal and Expiration</a></li>
                                <li><a href="#refunds-cancellations" className="hover:text-teal-600 transition">5. Refunds and Cancellations</a></li>
                                <li><a href="#violations" className="hover:text-teal-600 transition">6. Violations of License Terms</a></li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4">Have questions about your specific license?</p>
                                <Link
                                    href="/contact"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
                                >
                                    <Mail size={16} />
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Legal Text Content */}
                    <div className="lg:col-span-8 prose prose-teal max-w-none text-gray-600">

                        {/* Introduction */}
                        <div id="introduction" className="scroll-mt-32">
                            <p className="text-lg leading-8">
                                This Licenses Policy outlines the terms and conditions governing the use of licenses provided by <strong className="text-gray-900">CodeBright</strong> ("we", "our", "us") for access to our software, services, and other digital products. By purchasing or using our licenses, you agree to abide by the terms stated herein.
                            </p>
                        </div>

                        <hr className="my-10 border-gray-100" />

                        {/* Section 1 */}
                        <div id="types-of-licenses" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Types of Licenses</h2>
                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mb-8">
                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <User size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Individual Licenses</h3>
                                    <p className="text-sm leading-6 m-0">Designed for single users to access and use our software and services. Each license is tied to an individual user account and cannot be shared or transferred.</p>
                                </div>
                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <Users size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Team Licenses</h3>
                                    <p className="text-sm leading-6 m-0">Created for organizations, allowing multiple users to access services based on the number of allocated seats or permissions.</p>
                                </div>
                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <Building2 size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Enterprise Licenses</h3>
                                    <p className="text-sm leading-6 m-0">Tailored for large organizations requiring extensive access and customizable features, with terms outlined in a custom agreement.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id="license-usage" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. License Usage</h2>
                            <ul className="list-disc pl-5 space-y-3 marker:text-teal-500">
                                <li>Each license grants the user or organization the non-exclusive right to use our products and services as per the purchased plan.</li>
                                <li>Licenses are non-transferable unless explicitly stated in a written agreement.</li>
                                <li>Users must comply with the terms of their license, including restrictions on sharing login credentials, exceeding seat limits, or unauthorized usage.</li>
                                <li>License usage must adhere to our Terms and Conditions and applicable laws.</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div id="managing-licenses" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Managing Licenses</h2>
                            <p className="mb-4">
                                Users can manage their licenses through their account dashboard. The following actions are available:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 marker:text-teal-500 mb-6">
                                <li>View active licenses and their expiration dates.</li>
                                <li>Renew, upgrade, or cancel licenses based on the service plan.</li>
                                <li>Reallocate team licenses to different users (for organizational accounts).</li>
                            </ul>
                            <div className="rounded-xl bg-teal-50 p-4 border border-teal-100">
                                <p className="text-sm text-teal-800 m-0">
                                    <strong>Need help?</strong> If you encounter issues with managing your licenses, please <Link href="/contact" className="text-teal-600 underline hover:text-teal-700">contact our support team</Link> for assistance.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="renewal-expiration" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Renewal and Expiration</h2>
                            <p>
                                Licenses are subject to renewal based on the purchased subscription period (e.g., monthly, annually). Users will receive notifications prior to license expiration. Failure to renew may result in restricted or terminated access to our services.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div id="refunds-cancellations" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refunds and Cancellations</h2>
                            <p>
                                Refunds for unused licenses are subject to our <Link href="/legal/refunds" className="text-teal-600 font-medium hover:underline">Refund Policy</Link>. Users may cancel licenses at any time, but access will remain available until the end of the current billing cycle unless otherwise stated.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div id="violations" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Violations of License Terms</h2>
                            <p>
                                Unauthorized use of licenses, including but not limited to sharing, reselling, or exceeding usage limits, may result in the immediate termination of the license without refund. Legal action may also be pursued in cases of serious violations.
                            </p>
                        </div>

                        {/* Bottom Contact CTA for Mobile (since sidebar is hidden on small screens) */}
                        <div className="mt-16 block lg:hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Have questions about your license?</h3>
                            <p className="text-sm text-gray-600 mb-6">Our support team is here to help clarify any terms or assist with account management.</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
                            >
                                <Mail size={16} />
                                Contact Support
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}