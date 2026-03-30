import Link from "next/link";
import {
    ShieldCheck,
    Mail,
    Globe,
    Terminal,
    Share2,
    Lock,
    Cookie,
    UserCog
} from "lucide-react";

export default function PrivacyPolicyPage() {
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
                        Privacy Policy
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-teal-100 font-medium">
                        Your Privacy Matters to Us
                    </p>
                    <p className="mt-2 text-base text-teal-200">
                        We are committed to safeguarding your personal information and maintaining your trust through transparency and security.
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
                                <li><a href="#data-collection" className="hover:text-teal-600 transition">1. Data Collection & Usage</a></li>
                                <li><a href="#data-sharing" className="hover:text-teal-600 transition">2. Data Sharing</a></li>
                                <li><a href="#security" className="hover:text-teal-600 transition">3. Security</a></li>
                                <li><a href="#cookies" className="hover:text-teal-600 transition">4. How We Use Cookies</a></li>
                                <li><a href="#controlling-info" className="hover:text-teal-600 transition">5. Controlling Your Info</a></li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4">Have concerns about your privacy or data?</p>
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
                                This privacy policy establishes how <strong className="text-gray-900">CodeBright</strong>, registered at Noida, (referred to as "we", "us", and "the company" in this document) uses and protects any information that you make available to us through the use of our website, software, and IT services.
                            </p>
                            <div className="rounded-2xl bg-teal-50 p-6 border border-teal-100 mt-6">
                                <p className="m-0 text-teal-900">
                                    We handle your data in accordance with the principles of the General Data Protection Regulation (GDPR) and are committed to ensuring that your privacy is protected. In this document, the categories of data we collect are marked in <strong className="text-teal-950">bold</strong>, and the lawful basis for processing are in <em className="text-teal-800">italics</em>.
                                </p>
                            </div>
                            <p className="mt-6">
                                Any information and data that you provide will only be used in accordance with this privacy policy. We may update this policy periodically without prior notice, and we encourage you to review it regularly.
                            </p>
                        </div>

                        <hr className="my-10 border-gray-100" />

                        {/* Section 1 */}
                        <div id="data-collection" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Data Collection and Usage</h2>

                            {/* Subsection 1: Website */}
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <Globe size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">On Our Website</h3>
                                </div>
                                <p className="mb-4">
                                    The following categories of data are collected and processed on our website in accordance with the policies and legal basis set forth by the GDPR:
                                </p>
                                <ul className="list-disc pl-5 space-y-4 marker:text-teal-500">
                                    <li>
                                        To fulfill our <em>contractual obligation</em> to you for providing access to our IT services (such as software, hosting, or consulting), when you create an account or sign up for a service, we collect <strong>name</strong> and <strong>email address</strong>. This data is required for the functioning of your account and for communication related to your use of our services. We may occasionally send marketing communications about our products or services to your email, which is in our <em>legitimate interest</em> for business development. You can unsubscribe from these emails at any time.
                                    </li>
                                    <li>
                                        As a standard prerequisite for the functioning of our website and services, our servers automatically collect and log visitors' <strong>IP addresses</strong>. This is in accordance with our <em>contractual obligation</em> of providing access to our website and services. This data is retained for a maximum of 2 months and is automatically deleted after this period.
                                    </li>
                                    <li>
                                        If you interact with our support portal, or register on our platform, you may voluntarily provide us with an <strong>email address</strong>, a <strong>password</strong>, and (optionally) a <strong>name</strong> as part of our <em>contractual obligation</em> of providing you with customer support. You can manage and update your account information at any time, including closing your account if desired. You may also edit or delete any messages or posts you’ve made within the portal.
                                    </li>
                                    <li>
                                        Visitors to our website may subscribe to our marketing newsletter by providing their <strong>email address</strong>. This information is stored until the user unsubscribes from the newsletter, and is processed under the <em>contractual obligation</em> of providing you with our marketing content.
                                    </li>
                                    <li>
                                        We offer customer support services via email and our contact forms. The data you provide through these channels may include <strong>name</strong> and <strong>email address</strong>, and will be processed for the <em>contractual obligation</em> of assisting you with your inquiries, technical issues, or service requests. This data is deleted when your support request is resolved.
                                    </li>
                                </ul>
                            </div>

                            {/* Subsection 2: Software */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <Terminal size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Through Our Software and IT Services</h3>
                                </div>
                                <ul className="list-disc pl-5 space-y-4 marker:text-teal-500">
                                    <li>
                                        When you use our software or IT services (such as cloud hosting, web development, or system administration), we may collect and store data in order to provide those services effectively. This may include data such as <strong>website files</strong>, <strong>user-generated content</strong>, or <strong>technical logs</strong> that you upload or share with us. These data are collected and processed based on our <em>contractual obligation</em> to provide you with our IT services. You can request to delete or download a copy of this data from the software or via support.
                                    </li>
                                    <li>
                                        Additionally, our software may include optional functionality for form submissions or data processing (e.g., through a form builder or other custom integrations). When you activate these features, data such as <strong>email addresses</strong> and <strong>IP addresses</strong> may be collected and transmitted to third-party services (e.g., email providers, cloud platforms) to fulfill your service request. This processing is based on our <em>contractual obligation</em> to provide you with these services. We may retain <strong>IP addresses</strong> for up to 30 days to prevent abuse and ensure the security of the service.
                                    </li>
                                    <li>
                                        If your use of our services involves any error reporting, technical diagnostics, or crash logs, we may collect <strong>technical data</strong> (e.g., stack traces, system specifications) to improve the quality of our software. This data is anonymized and does not contain any personal information.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id="data-sharing" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <Share2 size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Sharing</h2>
                                <p>
                                    We may share your information with trusted third-party service providers to help us deliver our services to you. These service providers may include payment processors, cloud infrastructure providers, marketing platforms, or customer service providers.
                                </p>
                                <p className="mt-3">
                                    The legal basis for sharing this information is our <em>legitimate interest</em> in providing our services efficiently and effectively. We ensure that any third-party providers we work with comply with data protection laws and safeguard your personal information.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="security" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <Lock size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Security</h2>
                                <p>
                                    We are committed to ensuring that your information is secure. To prevent unauthorized access, loss, or disclosure, we implement physical, electronic, and administrative safeguards. While we take reasonable steps to protect your data, no system is completely secure, and we cannot guarantee absolute security.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="cookies" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <Cookie size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Cookies</h2>
                                <p>
                                    We use cookies to enhance the functionality of our website and services, such as remembering your preferences, keeping you logged in, and improving your experience. Cookies help us gather anonymous data about website usage, which we use to improve our offerings.
                                </p>
                                <p className="mt-3">
                                    You have the option to accept or decline cookies. Most web browsers accept cookies by default, but you can modify your browser settings to decline cookies. Please note that declining cookies may affect your ability to fully access all features of our website and services.
                                </p>
                                <div className="mt-4">
                                    <Link href="/legal/cookies" className="text-teal-600 font-semibold hover:underline">
                                        &rarr; Read our full Cookies Policy
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id="controlling-info" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <UserCog size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Controlling Your Personal Information</h2>
                                <p>
                                    We will never sell, distribute, or lease your personal information to third parties unless we are required by law to do so or as part of a legitimate business operation.
                                </p>
                                <p className="mt-3">
                                    If you believe that any information we hold about you is incorrect, incomplete, or if you wish to have your data erased, you may contact us through our support portal or via email. We will act on your request in accordance with the principles of the GDPR and ensure your rights are respected.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Contact CTA for Mobile */}
                        <div className="mt-16 block lg:hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Have concerns about your data?</h3>
                            <p className="text-sm text-gray-600 mb-6">Contact our compliance team to review, edit, or delete your information.</p>
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