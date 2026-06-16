import { ArrowButton, InformationIcon, ResearchIcon, StarIcon, TestingIcon } from "@/src/assets/icons";
import Image from "next/image";
import processImg from "../../assets/images/processimg.webp";
import Button from "@/src/components/button";
import processData from "@/src/data/process.json";
import SectionHeading from "@/src/components/SectionHeading";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
    ResearchIcon:     <ResearchIcon />,
    InformationIcon:  <InformationIcon />,
    TestingIcon:      <TestingIcon />,
};

const ProcessSection = () => {
    return (
        <section className="bg-[#FAF9F4]" id="our-process">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                        <SectionHeading
                            label="Process"
                            labelClassName="text-[#18181B]"
                            heading="Our UI/UX Design Process"
                            headingClassName="text-[#27272A] whitespace-nowrap"
                            description="Every UI UX design engagement follows a clear five-phase sprint. Timelines typically run 4 to 12 weeks based on product complexity."
                            descriptionClassName="text-[#52525B] leading-5 w-full md:w-[630px]"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            {processData.map((card, index) => (
                                card.isSpecial ? (
                                    <div key={card.id} className="bg-[#0B0B0B] rounded-b-[14px] md:rounded-b-none md:rounded-r-[14px] flex flex-col">
                                        <Image
                                            src={processImg}
                                            alt="process"
                                            width={338}
                                            height={193}
                                            className="w-[358px] md:w-[338px] h-auto"
                                        />
                                        <div className="flex flex-col gap-6 md:gap-8 p-5">
                                            <div className="flex flex-col gap-2.5">
                                                <h3 className="text-[#FFF] text-xl font-tight font-semibold leading-5.25">Want this process for your product?</h3>
                                                <p className="text-[#E4E4E7] text-sm">Tell us about your project and get a tailored design roadmap within 24 hours.</p>
                                            </div>
                                            <Button
                                                href="/start-project"
                                                text="Start Your Project"
                                                textClassName="!text-black"
                                                iconClassName="!text-black"
                                                className="w-full md:w-fit flex items-center justify-center !bg-[#FFF] hover:!bg-[#F3FE00] w-fit hover:!border hover:!border-[#F3FE00]"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        key={card.id}
                                        className={`bg-[#FFF] hover:bg-[#F4F2E8] border border-[#CDCDCD] p-6 flex flex-col gap-8 items-start md:gap-27 
                                        ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-l-[14px]" : ""}
                                        ${index !== 2 ? "border-b-0 md:border-b md:border-r-0" : "md:border-r-0"}
                                        `}
                                    >
                                        <div className="text-4xl">{iconMap[card.iconKey!]}</div>
                                        <div className="flex flex-col gap-3 md:gap-6">
                                            <h3 className="text-[#27272A] font-tight text-base md:text-lg font-semibold leading-6 md:leading-7">{card.title}</h3>
                                            <ul className="space-y-2">
                                                {card.points?.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="shrink-0 mt-0.5"><StarIcon /></span>
                                                        <span className="text-[#52525B] text-sm leading-5">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
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

export default ProcessSection;
