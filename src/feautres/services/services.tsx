import {  ArrowButton, BrandIcon, DashboardIcon, DesignIcon, FLowIcon, MobileIcon, PhoneCall, Startup, PrototypeIcon, SystemIcon } from "@/src/assets/icons";
import Link from "next/link";
import serviceData from "@/src/data/services.json";
import SectionHeading from "@/src/components/SectionHeading";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
    DesignIcon:    <DesignIcon />,
    FLowIcon:      <FLowIcon />,
    BrandIcon:     <BrandIcon />,
    MobileIcon:    <MobileIcon />,
    DashboardIcon: <DashboardIcon />,
    SystemIcon:    <SystemIcon />,
    PrototypeIcon: <PrototypeIcon />,
    Startup:       <Startup />,
};

const ServicesSection = () => {
    return (
        <section className="bg-[#0B0B0B]" id="how-we-help">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                        <SectionHeading
                            label="How We Help"
                            heading="UI/UX Design Services We Offer"
                            headingClassName="text-[#FFF] w-full md:w-[433px]"
                            description="A complete design practice covering every stage of the product lifecycle:"
                            descriptionClassName="text-[#D4D4D8] w-full md:w-[447px]"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 rounded-[14px]">
                            {serviceData.map((card, index) => (
                                card.isSpecial ? (
                                    <div
                                        key={card.id}
                                        className="bg-[#FFF] hover:bg-[#F3FE00] border border-[#E4E4E7] hover:border-[#373737] p-5 md:p-6 flex flex-col gap-8 md:justify-between h-full md:h-63.25 rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px] group transition-all"
                                    >
                                        <div className="text-4xl text-[#0B0B0B] group-hover:text-[#FFF] transition-colors">
                                            <PhoneCall />
                                        </div>
                                        <div className="flex flex-col gap-3 md:gap-4">
                                            <h3 className="text-[#09090B] group-hover:text-[#27272A] text-lg font-semibold leading-7 font-tight transition-colors">
                                                Not sure which path fits your project?
                                            </h3>
                                            <p className="text-[#52525B] group-hover:text-[#52525B] text-sm transition-colors">
                                                Tell us where you are and we'll recommend the right approach — honestly.
                                            </p>
                                            <Link
                                                href="/consultation"
                                                aria-label="Get a free consultation"
                                                className="group/btn px-4 py-2 rounded-full border text-sm font-medium leading-5 flex items-center gap-2 w-fit transition-all duration-300 bg-[#0B0B0B] border-white text-white group-hover:bg-white group-hover:border-black group-hover:text-black group-hover/btn:bg-transparent"
                                            >
                                                <span>Get a Free Consultation</span>
                                                <span className="p-1"><ArrowButton /></span>
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        key={card.id}
                                        className={`bg-[#0F0F0F] border border-[#373737] p-5 md:p-6 flex flex-col gap-8 md:justify-between hover:border-[rgba(255,255,255,0.16)] transition-colors h-auto md:h-63.25 relative overflow-hidden group
                                            ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-tl-[14px]" : ""}
                                            ${index === 2 ? "md:rounded-tr-[14px]" : ""}
                                            ${index === 6 ? "md:rounded-bl-[14px]" : ""}
                                            ${index !== 8 ? "border-b-0 md:border-b" : ""}
                                            ${index % 3 !== 2 ? "md:border-r-0" : ""}
                                            ${index < 6 ? "md:border-b-0" : ""}
                                        `}
                                    >
                                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />
                                        <div className="text-4xl relative z-10">{iconMap[card.iconKey!]}</div>
                                        <div className="flex flex-col gap-3 relative z-10">
                                            <h3 className="text-[#FFF] text-lg font-tight font-semibold leading-7">{card.title}</h3>
                                            <p className="text-[#D4D4D8] text-sm">{card.description}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
