import { DesignIcon, FLowIcon, PrototypeIcon } from "@/src/assets/icons";
import Button from "@/src/components/button";
import glassknot from "@/src/assets/images/glass-knot.webp";
import Image from "next/image";
import bgzee from "@/src/assets/images/bg-zee.webp";
import reasonsData from "@/src/data/zeeframes.json";
import SectionHeading from "@/src/components/SectionHeading";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
    DesignIcon:    <DesignIcon />,
    FLowIcon:      <FLowIcon />,
    PrototypeIcon: <PrototypeIcon />,
};

const WhyZeeframe = () => {
    return (
        <section className="bg-[#0B0B0B]" id="why-zeeframes">
            <div className="container">
                <div className="py-6 md:py-16">
                    <div className="flex flex-col gap-6 md:gap-12 py-6 md:py-15 px-4 md:px-8 rounded-[14px]" style={{ background: "linear-gradient(180deg, #151515 0%, #0B0B0B 100%)" }}>
                        <SectionHeading
                            label="Why Zeeframes"
                            heading="Why Choose Zeeframes as Your UI/UX Design Agency"
                            headingClassName="text-[#FFF] w-full md:w-[517px]"
                            description="Hundreds of agencies can design a screen. Here's what makes us a different kind of design partner:"
                            descriptionClassName="text-[#D4D4D8] w-full md:w-[630px]"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {reasonsData.map((reason, index) => (
                                <div
                                    key={reason.id}
                                    className={`border border-[#373737] hover:border-[rgba(255,255,255,0.16)] p-6 flex flex-col gap-8 md:gap-16 relative overflow-hidden group transition-colors
                                    ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-tl-[14px]" : ""}
                                    ${index === 2 ? "md:rounded-tr-[14px]" : ""}
                                    ${index === 3 ? "md:rounded-bl-[14px]" : ""}
                                    ${index === 5 ? "rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px]" : ""}
                                    ${index !== 5 ? "border-b-0 md:border-b" : ""}
                                    ${index === 0 || index === 1 || index === 3 || index === 4 ? "md:border-r-0" : ""}
                                    ${index === 0 || index === 1 || index === 2 ? "md:border-b-0" : ""}
                                    `}
                                    style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)" }}
                                >
                                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />
                                    <div className="text-4xl relative z-10">{iconMap[reason.iconKey]}</div>
                                    <div className="flex flex-col gap-3 relative z-10">
                                        <h3 className="text-[#FFF] font-tight text-base md:text-lg font-semibold leading-6 md:leading-7">{reason.title}</h3>
                                        <p className="text-[#D4D4D8] text-sm leading-normal">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-0 md:mx-8 p-6 md:px-16 md:py-15 flex flex-col md:flex-row items-center gap-6 md:justify-between relative rounded-[14px] overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <Image src={bgzee} alt="bg" fill className="object-cover" />
                        </div>
                        <div className="space-y-8 relative z-10">
                            <div className="space-y-3">
                                <h3 className="text-4xl md:text-5xl font-tight font-semibold leading-11 md:leading-15 text-[#27272A] -tracking-[0.96px]">See how we've helped others win</h3>
                                <p className="text-sm md:text-lg w-full md:w-[779px] font-tight text-[#27272A]">Browse our portfolio of successfully shipped products across SaaS, mobile, and enterprise platforms crafted with a focus on usability, innovation, and business growth.</p>
                            </div>
                            <Button
                                text="View Our Work"
                                href="/"
                                textClassName="text-base font-semibold text-[#FFF] group-hover:text-[#000]"
                                iconClassName="text-white group-hover:text-[#000]"
                                className="bg-[#000] group group-hover:bg-transparent group-hover:border group-hover:border-[#000] w-full md:w-fit flex items-center justify-center border-0"
                            />
                        </div>
                        <div className="relative z-10">
                            <Image src={glassknot} alt="glass_thumnail" width={264} height={226} className="w-[200px] md:w-[264px] h-[184px] md:h-[226px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyZeeframe;
