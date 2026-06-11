import { AgenciesIcon, ArrowButton, BrandIcon, DashboardIcon, DesignIcon, EnterpriseIcon, FLowIcon, MobileIcon, PhoneCall, Startup, PrototypeIcon, SystemIcon } from "@/src/assets/icons";
import Button from "@/src/components/button";

import Link from "next/link";

const serviceCards = [
    {
        id: 1,
        icon: <DesignIcon />,
        title: "Product UI Design",
        description: "High-fidelity, on-brand interfaces for web, SaaS, and mobile products."
    },
    {
        id: 2,
        icon: <FLowIcon />,
        title: "UX Design & Flows",
        description: "Information architecture, user flows, wireframes, and interaction design."
    },
    {
        id: 3,
        icon: <BrandIcon />,
        title: "Branding & Visual Identity",
        description: "Logo design, color systems, typography, and brand guidelines that create lasting impressions."
    },
    {
        id: 4,
        icon: <MobileIcon />,
        title: "Mobile App Design",
        description: "Native iOS and Android interfaces designed for real-world usage patterns."
    },
    {
        id: 5,
        icon: <DashboardIcon />,
        title: "SaaS & Dashboard Design",
        description: "Complex data visualization, workflow design, and enterprise-grade interfaces."
    },
    {
        id: 6,
        icon: <SystemIcon />,
        title: "Design Systems",
        description: "Scalable component libraries and tokens that keep teams shipping consistently."
    },
    {
        id: 7,
        icon: <PrototypeIcon />,
        title: "Prototyping & Testing",
        description: "Interactive prototypes validated with real users before engineering commits."
    },
    {
        id: 8,
        icon: <Startup />,
        title: "MVP & Product Revamp Design",
        description: "From first-version MVPs to full product modernization — we deliver clean that's ready for engineering, launch, and growth."
    },
    {
        id: 9,
        isSpecial: true
    }
];
const ServicesSection = () => {
    return (
        <section className="bg-[#0B0B0B]">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:justify-between">
                        <div className="space-y-2 md:space-y-4">
                            <p className="text-[#F3FE00] text-sm">Who We Help</p>
                            <h2 className="text-2xl md:text-4xl font-semibold leading-8 md:leading-11 text-[#FFF] tracking-[-0.72px] w-full md:w-[433px]">UI/UX Design Services We Offer</h2>
                        </div>
                        <p className="text-base text-[#D4D4D8] w-full md:w-[447px] ">A complete design practice covering every stage of the product lifecycle:</p>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 rounded-[14px]">
                         {serviceCards.map((card, index) => (
                                    card.id === 9 ? (
                                        // Special last card with white background with hover effect
                                        <div
                                            key={card.id}
                                            className="bg-[#FFF] hover:bg-[#F3FE00] border border-[#E4E4E7] hover:border-[#373737] p-5 md:p-6 flex flex-col gap-8 md:justify-between h-full md:h-[253px] rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px] group transition-all"
                                        >
                                            <div className="text-4xl text-[#0B0B0B] group-hover:text-[#FFF] transition-colors">
                                                <PhoneCall/>
                                            </div>
                                            <div className="flex flex-col gap-3 md:gap-4">
                                                <h3 className="text-[#09090B] group-hover:text-[#27272A] text-lg font-semibold leading-7 transition-colors">
                                                    Not sure which path fits your project?
                                                </h3>
                                                <p className="text-[#52525B] group-hover:text-[#52525B] text-sm transition-colors">
                                                    Tell us where you are and we'll recommend the right approach — honestly.
                                                </p>
                                                <Button 
                                                    href="/consultation" 
                                                    text="Get a Free Consultation"
                                                    className="bg-[#0B0B0B] !hover:bg-transparent hover:!bg-[#F3FE00] border-[#000]  w-fit"
                                                    textClassName="text-sm font-medium text-[#FFF] hover:!text-[#0B0B0B]"
                                                    iconClassName="text-[#FFF] hover:!text-[#0B0B0B]"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        // Regular cards with hover glow effect
                                        <div
                                            key={card.id}
                                            className={`bg-[#0F0F0F] border border-[#373737] p-5 md:p-6 flex flex-col gap-8 md:justify-between hover:border-[rgba(255,255,255,0.16)] transition-colors h-auto md:h-[253px] relative overflow-hidden group 
                                            ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-tl-[14px]" : ""} 
                                            ${index === 2 ? "md:rounded-tr-[14px]" : ""} 
                                            ${index === 6 ? "md:rounded-bl-[14px]" : ""}
                                            ${index !== 8 ? "border-b-0 md:border-b" : ""}
                                            ${index % 3 !== 2 ? "md:border-r-0" : ""}
                                            ${index < 6 ? "md:border-b-0" : ""}
                                            `}
                                        >
                                            {/* Hover Glow Effect */}
                                            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />
                                            
                                            <div className="text-4xl relative z-10">
                                                {card.icon}
                                            </div>
                                            <div className="flex flex-col gap-3  relative z-10">
                                                <h3 className="text-[#FFF] text-lg font-semibold leading-7">
                                                    {card.title}
                                                </h3>
                                                <p className="text-[#D4D4D8] text-sm">
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                ))}

                    </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default ServicesSection