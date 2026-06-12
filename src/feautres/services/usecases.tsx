import { FundedIcon, DashboardIcon, MobileIcon, EcomIcon, BagIcon, SystemIcon, AuditIcon, PerformanceIcon, StartegyIcon, ArrowButton } from "@/src/assets/icons";
import Link from "next/link";

const useCases = [
    {
        id: 1,
        icon: <FundedIcon />,
        title: "MVP Design for a Funded Startup",
        description: "From Figma wireframes to a launch-ready interface in 6 weeks, validated with real users."
    },
    {
        id: 2,
        icon: <AuditIcon />,
        title: "SaaS Dashboard Redesign",
        description: "Rebuild a complex analytics dashboard with cleaner hierarchy, raising daily active usage."
    },
    {
        id: 3,
        icon: <StartegyIcon />,
        title: "Mobile App Redesign",
        description: "Native iOS and Android refresh with accessibility and new brand system baked in."
    },
    {
        id: 4,
        icon: <EcomIcon />,
        title: "E-commerce Experience Overhaul",
        description: "Checkout redesign and navigation simplification to improve conversion metrics."
    },
    {
        id: 5,
        icon: <BagIcon />,
        title: "Enterprise Legacy Modernization",
        description: "Phased modernization of an internal tool with a scalable design system for long-term consistency."
    },
    {
        id: 6,
        icon: <PerformanceIcon />,
        title: "Design System Build",
        description: "A component library and tokens shipping faster and cleaner across every product team."
    },
    {
        id: 7,
        icon: <AuditIcon />,
        title: "UI/UX Experience Audit",
        description: "Lorem ipsum dolor sit amet consectetur. Nulla neque diam odio eget cras amet."
    },
    {
        id: 8,
        icon: <PerformanceIcon />,
        title: "Design Performance Testing Review",
        description: "Lorem ipsum dolor sit amet consectetur. Nulla neque diam odio eget cras amet."
    },
    {
        id: 9,
        icon: <StartegyIcon />,
        title: "UI/UX Strategy Consultation",
        description: "Lorem ipsum dolor sit amet consectetur. Nulla neque diam odio eget cras amet."
    }
];

const UsecasesSection = () => {
    return (
        <section className="bg-[#FAF9F4]">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:justify-between">
                            <div className="space-y-2 md:space-y-4">
                                <p className="text-[#18181B] text-sm">Use Cases</p>
                                <h2 className="text-2xl md:text-4xl whitespace-nowrap font-semibold leading-8 md:leading-11 text-[#27272A] tracking-[-0.72px]">UI/UX Design Use Cases</h2>
                            </div>
                            <p className="text-sm md:text-base text-[#52525B] w-full md:w-[427px]">Real projects we design for startups, SaaS companies, and enterprises:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {useCases.map((useCase, index) => {
                                // Desktop: 3 columns
                                const isFirstCol = index % 3 === 0;
                                const isLastCol = index % 3 === 2;
                                const isLastRow = index >= 6;

                                return (
                                    <div
                                        key={useCase.id}
                                        className={`bg-[#FFF] hover:bg-[#F4F2E8] border-[0.6px] border-[#CDCDCD] p-6 flex flex-col gap-6 
                                        ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-tl-[14px]" : ""}
                                        ${index === 2 ? "md:rounded-tr-[14px]" : ""}
                                        ${index === 6 ? "md:rounded-bl-[14px]" : ""}
                                        ${index === useCases.length - 1 ? "rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px]" : ""}
                                        ${index !== useCases.length - 1 ? "border-b-0 md:border-b" : ""}
                                        ${!isLastCol ? "md:border-r-0" : ""}
                                        ${!isLastRow ? "md:border-b-0" : ""}
                                        `}
                                    >
                                        <div>
                                            {useCase.icon}
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <h3 className="text-[#27272A] text-base md:text-lg font-semibold leading-6 md:leading-7">
                                                {useCase.title}
                                            </h3>
                                            <p className="text-[#3F3F46] text-sm ">
                                                {useCase.description}
                                            </p>
                                        </div>
                                        <Link href="#" className="text-[#18181B] text-sm font-medium hover:underline">
                                            <div className="flex items-center gap-2">
                                                <span>View Details</span>
                                                <div className="block md:hidden">
                                                    <ArrowButton />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsecasesSection;