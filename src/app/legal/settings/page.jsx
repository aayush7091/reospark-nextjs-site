import Link from "next/link";
import { Settings, Mail, UserCog, Shield, Bell, Layout, Lock, RefreshCcw } from "lucide-react";

export default function SettingsPolicyPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            {/* Page Header */}
            <section className="relative overflow-hidden bg-teal-900 bg-[url('/green_bg.png')] bg-cover bg-center bg-no-repeat px-6 py-16 md:py-20 lg:px-8 text-center">
                {/* Gradient overlay to ensure text readability over the image */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.800),transparent)] opacity-50" />

                <div className="mx-auto max-w-3xl">
                    <div className="inline-flex items-center rounded-full border border-teal-700 bg-teal-800/50 px-4 py-1.5 text-sm font-medium text-teal-100 mb-6 backdrop-blur-sm">
                        <Settings size={16} className="mr-2" />
                        Legal & Compliance
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Settings Policy
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-teal-100 font-medium">
                        Personalize Your Experience
                    </p>
                    <p className="mt-2 text-base text-teal-200">
                        Our settings page allows you to control and customize your preferences for an enhanced user experience.
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
                                <li><a href="#purpose" className="hover:text-teal-600 transition">1. Purpose of Settings</a></li>
                                <li><a href="#types-of-settings" className="hover:text-teal-600 transition">2. Types of Settings Available</a></li>
                                <li><a href="#access-update" className="hover:text-teal-600 transition">3. How to Access and Update</a></li>
                                <li><a href="#security-privacy" className="hover:text-teal-600 transition">4. Data Security and Privacy</a></li>
                                <li><a href="#policy-changes" className="hover:text-teal-600 transition">5. Changes to This Policy</a></li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4">Need help configuring your account?</p>
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
                                This Settings Policy explains how <strong className="text-gray-900">CodeBright</strong> ("we", "our", "us") provides you with tools to manage your preferences and configure your experience when using our website or services. By adjusting your settings, you can customize features, control notifications, and manage your data preferences.
                            </p>
                        </div>

                        <hr className="my-10 border-gray-100" />

                        {/* Section 1 */}
                        <div id="purpose" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Purpose of Settings</h2>
                            <p className="mb-4">
                                The settings feature is designed to give you control over various aspects of your interaction with our platform, including:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-teal-500">
                                <li>Adjusting notification preferences.</li>
                                <li>Managing privacy options.</li>
                                <li>Enabling or disabling certain features.</li>
                                <li>Updating account details like email or password.</li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div id="types-of-settings" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Types of Settings Available</h2>

                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                                {/* Account Settings */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100 hover:shadow-md">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                        <UserCog size={24} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">Account Settings</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        Manage your account details, such as username, email, password, and profile information. These settings are essential for maintaining your account security and personalization.
                                    </p>
                                </div>

                                {/* Privacy Settings */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100 hover:shadow-md">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                        <Shield size={24} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">Privacy Settings</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        Control how your personal data is used, shared, or displayed on our platform. This includes options for enabling/disabling data sharing with third parties.
                                    </p>
                                </div>

                                {/* Notification Preferences */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100 hover:shadow-md">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                        <Bell size={24} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">Notification Preferences</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        Customize how you receive notifications, such as email alerts, SMS, or in-app messages. You can opt in or out of marketing communications at any time.
                                    </p>
                                </div>

                                {/* Display Preferences */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100 hover:shadow-md">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                        <Layout size={24} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">Display Preferences</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        Adjust the visual layout of our platform, such as theme settings, font size, or language preferences to suit your specific viewing needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="access-update" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How to Access and Update Settings</h2>
                            <p className="mb-4">
                                You can access and manage your settings through the following methods:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-teal-500 mb-6">
                                <li>Log in to your account and navigate to the <strong>"Settings"</strong> section in your profile menu.</li>
                                <li>Use the settings icon or link available on our website or app dashboard.</li>
                            </ul>
                            <div className="rounded-xl bg-teal-50 p-4 border border-teal-100">
                                <p className="text-sm text-teal-800 m-0">
                                    <strong>Need assistance?</strong> Contact our support team via email at <a href="mailto:contact@codebright.in" className="text-teal-600 font-semibold underline hover:text-teal-700">contact@codebright.in</a>.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="security-privacy" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <Lock size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security and Privacy</h2>
                                <p>
                                    We take your privacy seriously. Any changes you make to your settings are securely saved and applied immediately. Your settings-related data is encrypted to prevent unauthorized access.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id="policy-changes" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <RefreshCcw size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Changes to This Policy</h2>
                                <p>
                                    We may update this Settings Policy from time to time to reflect changes in our services or legal requirements. When updates occur, we will notify you through email or in-app messages and encourage you to review the revised policy.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Contact CTA for Mobile */}
                        <div className="mt-16 block lg:hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Need help configuring your account?</h3>
                            <p className="text-sm text-gray-600 mb-6">Our support team is here to help you set up your preferences correctly.</p>
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