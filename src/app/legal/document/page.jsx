import Link from "next/link";
import {
    FileText,
    Mail,
    UserCheck,
    Copyright,
    Share2,
    FileWarning,
    ShieldCheck,
    EyeOff,
    AlertCircle,
    FileKey,
    Scale,
    Database,
    RefreshCcw
} from "lucide-react";

export default function DocumentTermsPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            {/* Page Header */}
            <section
                className="relative overflow-hidden bg-teal-900 bg-[url('/green_bg.png')] bg-cover bg-center bg-no-repeat px-6 py-16 md:py-20 lg:px-8 text-center"
            >
                {/* Gradient overlay - now layering on top of the image */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.800),transparent)] opacity-50" />

                <div className="mx-auto max-w-3xl">
                    <div className="inline-flex items-center rounded-full border border-teal-700 bg-teal-800/50 px-4 py-1.5 text-sm font-medium text-teal-100 mb-6 backdrop-blur-sm">
                        <FileText size={16} className="mr-2" />
                        Legal & Compliance
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Document Submission Terms
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-teal-100 font-medium">
                        Guidelines for Submitting Documents
                    </p>
                    <p className="mt-2 text-base text-teal-200">
                        By submitting documents, you agree to our terms and take responsibility for the content you upload.
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
                                <li><a href="#document-ownership" className="hover:text-teal-600 transition">1. Document Ownership</a></li>
                                <li><a href="#acceptable-content" className="hover:text-teal-600 transition">2. Acceptable Content</a></li>
                                <li><a href="#data-protection" className="hover:text-teal-600 transition">3. Data Protection</a></li>
                                <li><a href="#platform-usage" className="hover:text-teal-600 transition">4. Platform Usage</a></li>
                                <li><a href="#licensing" className="hover:text-teal-600 transition">5. Licensing and Permissions</a></li>
                                <li><a href="#liability" className="hover:text-teal-600 transition">6. Limitation of Liability</a></li>
                                <li><a href="#storage-retention" className="hover:text-teal-600 transition">7. Storage and Retention</a></li>
                                <li><a href="#modifications" className="hover:text-teal-600 transition">8. Modifications to Terms</a></li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4">Questions about uploading files?</p>
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
                                These terms govern the submission of documents on our platform. By submitting a document, you acknowledge that you have read, understood, and agree to comply with these terms. If you do not agree, please refrain from submitting documents on this platform.
                            </p>
                        </div>

                        <hr className="my-10 border-gray-100" />

                        {/* Section 1 */}
                        <div id="document-ownership" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Document Ownership</h2>

                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <UserCheck size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Your Responsibility</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">You confirm that you own or have the necessary permissions to submit the document.</p>
                                </div>

                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <Copyright size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">No Copyright Violation</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">Your submission must not infringe on the intellectual property rights, privacy, or confidentiality of any third party.</p>
                                </div>

                                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                                        <Share2 size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Third-Party Content</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">If your document includes third-party content, ensure you have appropriate licenses or permissions to use and submit it.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id="acceptable-content" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                                    <FileWarning size={24} className="text-red-500" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptable Content</h2>
                                <ul className="list-disc pl-5 space-y-3 marker:text-teal-500">
                                    <li>Documents must not contain any material that is unlawful, defamatory, obscene, offensive, or violates the rights of others.</li>
                                    <li>We reserve the right to reject or remove any document that violates these terms or applicable laws.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="data-protection" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Data Protection</h2>
                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
                                        <ShieldCheck size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Personal Data</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        Any personal data included in your document must comply with data protection regulations, including the GDPR (if applicable).
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-teal-100">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
                                        <EyeOff size={20} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Confidential Information</h3>
                                    <p className="text-sm leading-6 m-0 text-gray-600">
                                        Avoid submitting sensitive or confidential information unless explicitly required by the service you are using.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="platform-usage" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <AlertCircle size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Platform Usage</h2>
                                <p>You agree to use the document submission platform for legitimate purposes only.</p>
                                <p className="mt-3">
                                    Any misuse of the platform, such as uploading malicious content or attempting unauthorized access, is strictly prohibited and may result in account suspension or legal action.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id="licensing" className="scroll-mt-32 mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Licensing and Permissions</h2>
                            <div className="rounded-2xl bg-teal-50 p-6 border border-teal-100">
                                <div className="flex items-start gap-4">
                                    <FileKey className="mt-1 h-6 w-6 shrink-0 text-teal-600" />
                                    <div className="space-y-3">
                                        <p className="m-0 text-teal-900">
                                            By submitting a document, you grant us a non-exclusive, worldwide, royalty-free license to use, store, reproduce, and process the document as necessary to provide our services.
                                        </p>
                                        <p className="m-0 text-teal-800 font-medium">
                                            You retain ownership of the document and its content, subject to the license granted to us for service purposes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div id="liability" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <Scale size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                                <p>
                                    We are not responsible for the accuracy, legality, or appropriateness of the documents submitted by users. Users are solely responsible for the content of their submissions.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div id="storage-retention" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <Database size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Document Storage and Retention</h2>
                                <ul className="list-disc pl-5 space-y-3 marker:text-teal-500">
                                    <li>Your document will be stored on our systems only as long as necessary to provide the intended service.</li>
                                    <li>We take reasonable measures to protect your documents but cannot guarantee absolute security against unauthorized access or data breaches.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div id="modifications" className="scroll-mt-32 mt-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 mt-1 hidden md:block">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                                    <RefreshCcw size={24} className="text-teal-600" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications to Terms</h2>
                                <p>
                                    We reserve the right to update or modify these terms at any time. Users are encouraged to review the terms periodically for updates.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Contact CTA for Mobile */}
                        <div className="mt-16 block lg:hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Questions about uploading files?</h3>
                            <p className="text-sm text-gray-600 mb-6">Our support team is here to help ensure your submissions meet guidelines.</p>
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