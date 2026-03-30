import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";


const projects = [
    {
        title: "Global E-Commerce Deployment",
        subtitle: "Scalable WooCommerce solution for UK-based retailer",
        description: "Developed and deployed a robust e-commerce platform that expanded the client's reach into global markets.",
        image: "/projects/ecommerce.jpg", // Generate using prompt above
        tag: "Web Solutions"
    },
    {
        title: "Electronics Brand Scaling",
        subtitle: "High-impact digital branding & market positioning",
        description: "Executed a comprehensive digital scaling strategy for an electronics manufacturer, boosting brand visibility by 140%.",
        image: "/projects/branding.jpg", // Generate using prompt above
        tag: "Digital Strategy"
    },
    {
        title: "iOS Productivity Suite",
        subtitle: "Native Swift application development",
        description: "Architected a native iOS app focused on professional productivity, integrating seamless workflow tools.",
        image: "/projects/mobile-app.jpg", // Generate using prompt above
        tag: "Mobile App"
    },
    {
        title: "Immersive VR Experience",
        subtitle: "Virtual reality simulation environment",
        description: "Designed a specialized virtual reality world for real-world simulation and immersive training scenarios.",
        image: "/projects/vr-world.jpg", // Generate using prompt above
        tag: "Immersive Tech"
    },
    {
        title: "Enterprise Cloud Infrastructure",
        subtitle: "Robust server architecture developed by Reospark",
        description: "Engineered a secure, highly-available cloud infrastructure for a high-growth startup company.",
        image: "/projects/cloud.jpg", // Generate using prompt above
        tag: "Cloud & Devops"
    },
    {
        title: "Smartwatch Productivity App",
        subtitle: "Workflow optimization at your wrist",
        description: "Developed a native smartwatch application enhancing on-the-go communication and task management.",
        image: "/projects/watch-app.jpg", // Generate using prompt above
        tag: "Wearable Tech"
    },
    {
        title: "Custom CRM Solution",
        subtitle: "Salesforce integration and customization",
        description: "Implemented a tailored Salesforce CRM solution to optimize client relationship management and sales pipelines.",
        image: "/projects/crm.jpg", // Generate using prompt above
        tag: "Enterprise SaaS"
    },
    {
        title: "Enterprise ERP System",
        subtitle: "Scalable WooCommerce-integrated resource planning",
        description: "Developed an ERP solution streamlining operations for a rapidly growing WooCommerce company.",
        image: "/projects/erp.jpg", // Generate using prompt above
        tag: "Business Automation"
    },
    {
        title: "Personal Brand Portfolio",
        subtitle: "Unique portfolio that redefines resumes",
        description: "Crafted a distinctive personal portfolio design focused on impact, clarity, and exceptional UI/UX.",
        image: "/projects/personal-portfolio.jpg", // Generate using prompt above
        tag: "Creative Design"
    },
    {
        title: "Data Visualization Dashboard",
        subtitle: "Salesforce dashboard for market insights",
        description: "Created a centralized data visualization dashboard providing real-time market insights via Salesforce data.",
        image: "/projects/dashboard.jpg", // Generate using prompt above
        tag: "Data Analytics"
    },
    {
        title: "Premier IT Support Solutions",
        subtitle: "Fast response managed services by Reospark",
        description: "Delivered a premier, fast-response IT support model ensuring maximum uptime for client operations.",
        image: "/projects/support.jpg", // Generate using prompt above
        tag: "Managed Services"
    },
    {
        title: "Electro E-Commerce Platform",
        subtitle: "High-performance digital marketplace",
        description: "Launched a high-performance e-commerce site utilizing advanced Themeforest architectural patterns.",
        image: "/projects/electro-commerce.jpg", // Generate using prompt above
        tag: "Web Solutions"
    },
];

// Refined Company Stats
const stats = [
    { value: "4+ Years", label: "Field Experience" },
    { value: "89+ Projects", label: "Done Around the World" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "2020", label: "Established Year" },
    { value: "2 Mins", label: "Response Time" },
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            {/* Portfolio Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.50),white)] opacity-70" />
                <div className="mx-auto max-w-7xl text-center">
                    <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-6 shadow-sm">
                        <CheckCircle2 size={16} className="mr-2" />
                        Proven Track Record of Excellence
                    </div>
                    <h1 className="mx-auto max-w-3xl text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Projects</span>
                    </h1>
                    <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-600 font-medium">
                        We deliver world-class digital solutions tailored precisely to your requirements.
                    </p>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
                        Our projects are born from a passion for innovation. We see technological challenges as opportunities to push boundaries and explore new frontiers in software engineering.
                    </p>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className="bg-gray-50/50 py-16 md:py-24 border-y border-gray-100">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition hover:shadow-xl hover:border-teal-100"
                            >
                                {/* Project Image using AI Prompts */}
                                <div className="relative h-60 w-full overflow-hidden border-b border-gray-100 bg-gray-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 rounded-full bg-teal-600/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white tracking-wide">
                                        {project.tag}
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition">
                                            {project.title}
                                        </h3>
                                        <p className="mt-1 text-sm font-semibold text-teal-600">
                                            {project.subtitle}
                                        </p>
                                        <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-5 border-t border-gray-100">
                                        <Link
                                            href="#" // Link to actual case study page if available
                                            className="group/link flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-teal-600"
                                        >
                                            View Case Study
                                            <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="rounded-[40px] bg-teal-900 p-12 lg:p-16 shadow-2xl">
                        <div className="grid grid-cols-2 gap-y-12 gap-x-8 text-center sm:grid-cols-3 lg:grid-cols-5">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col gap-y-3">
                                    <dt className="text-4xl font-extrabold tracking-tight text-white">{stat.value}</dt>
                                    <dd className="text-sm font-semibold text-teal-100 uppercase tracking-widest">{stat.label}</dd>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}