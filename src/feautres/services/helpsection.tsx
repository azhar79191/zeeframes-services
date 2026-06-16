import { AgenciesIcon, EnterpriseIcon, SaasIcon, StarIcon, Startup } from "@/src/assets/icons";
import Image from "next/image";
import help from "../../assets/images/help.webp";
import helptop from "../../assets/images/help-top.webp";
import Button from "@/src/components/button";
import helpData from "@/src/data/help.json";
import SectionHeading from "@/src/components/SectionHeading";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
    Startup: <Startup />,
    SaasIcon: <SaasIcon />,
    EnterpriseIcon: <EnterpriseIcon />,
    AgenciesIcon: <AgenciesIcon />,
};

const HelpView = () => {
    return (
        <section className="bg-[#0B0B0B]" id="who-we-help">
            <div className="container">
                <div className="md:pb-12 pb-6">
                    <div className="flex flex-col gap-6 md:gap-15">
                        <div className="pt-12 md:pt-23.5">
                            <SectionHeading
                                label="Who We Help"
                                heading="Who Our UI UX Design Services Are For"
                                headingClassName="text-[#FFF] w-[318px] md:w-[442px]"
                                description="The latest industry news, interviews, technologies, and resources. The latest industry news, interviews, technologies, and resources."
                                descriptionClassName="text-[#D4D4D8] w-full md:w-[630px]"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-center z-10">
                            {helpData.cards.map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`bg-[#0F0F0F] border border-[#373737] p-6 flex flex-col gap-10 md:justify-between hover:border-[rgba(255,255,255,0.16)] transition-colors h-auto md:h-78.5 relative overflow-hidden group w-full md:w-auto
                                    ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-l-[14px]" : ""}
                                    ${index === helpData.cards.length - 1 ? "rounded-b-[14px] md:rounded-b-none md:rounded-r-[14px]" : ""}
                                    ${index !== helpData.cards.length - 1 ? "border-b-0 md:border-b md:border-r-0" : ""}
                                    `}
                                >
                                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />
                                    <div className="text-4xl relative z-10">{iconMap[card.iconKey]}</div>
                                    <div className="flex flex-col gap-2 relative z-10">
                                        <h3 className="text-[#FFF] text-base font-tight md:text-lg font-semibold leading-6 md:leading-7">{card.title}</h3>
                                        <p className="text-[#D4D4D8] text-sm">{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="py-6 md:py-15 px-4 md:px-8 flex flex-col md:flex-row rounded-[14px] gap-6 md:gap-12 bg-[#FFF]">
                            <div className="relative">
                                <Image src={help} alt="help img" width={508} height={344} className="rounded-[10px] w-81.5 md:w-127 h-67.5 md:h-86 object-cover" />
                                <Image src={helptop} alt="top" width={508} height={309} className="absolute top-4 left-0 rounded-[10px]" />
                            </div>
                            <div className="space-y-3 md:space-y-4">
                                <h3 className="text-[#27272A] text-2xl md:text-4xl font-semibold leading-6 md:leading-11 tracking-[-0.72px]" style={{ fontFamily: '"Inter Tight"' }}>Signs You Need a UI/UX Design Partner</h3>
                                <p className="text-sm md:text-base font-medium md:font-normal text-[#52525B]">If any of these sound familiar, it's time to engage a UI UX design agency:</p>
                                <ul className="space-y-2 pt-3 md:pt-2 pb-3">
                                    {helpData.signs.map((item) => (
                                        <li key={item.id} className="flex items-center gap-2">
                                            <StarIcon />
                                            <span className="text-sm text-[#52525B]">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    href="/"
                                    text="Request a Free UX Review"
                                    textClassName="text-white transition-colors duration-300 group-hover:text-black"
                                    iconClassName="text-white transition-colors duration-300 group-hover:text-black"
                                    className="group w-full md:w-fit flex items-center justify-center mt-2 border border-transparent bg-black hover:bg-white hover:border-black transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpView;
