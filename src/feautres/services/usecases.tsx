import { FundedIcon, EcomIcon, BagIcon, AuditIcon, PerformanceIcon, StartegyIcon, ArrowButton } from "@/src/assets/icons";
import Link from "next/link";
import useCaseData from "@/src/data/usecases.json";
import SectionHeading from "@/src/components/SectionHeading";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
    FundedIcon:      <FundedIcon />,
    AuditIcon:       <AuditIcon />,
    StartegyIcon:    <StartegyIcon />,
    EcomIcon:        <EcomIcon />,
    BagIcon:         <BagIcon />,
    PerformanceIcon: <PerformanceIcon />,
};

const UsecasesSection = () => {
    return (
        <section className="bg-[#FAF9F4]" id="use-cases">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                        <SectionHeading
                            label="Use Cases"
                            labelClassName="text-[#18181B]"
                            heading="UI/UX Design Use Cases"
                            headingClassName="text-[#27272A] whitespace-nowrap"
                            description="Real projects we design for startups, SaaS companies, and enterprises:"
                            descriptionClassName="text-[#52525B] w-full md:w-[427px]"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {useCaseData.map((useCase, index) => {
                                const isLastCol = index % 3 === 2;
                                const isLastRow = index >= 6;
                                return (
                                    <div
                                        key={useCase.id}
                                        className={`bg-[#FFF] hover:bg-[#F4F2E8] border-[0.6px] border-[#CDCDCD] p-6 flex flex-col gap-6
                                        ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-tl-[14px]" : ""}
                                        ${index === 2 ? "md:rounded-tr-[14px]" : ""}
                                        ${index === 6 ? "md:rounded-bl-[14px]" : ""}
                                        ${index === useCaseData.length - 1 ? "rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px]" : ""}
                                        ${index !== useCaseData.length - 1 ? "border-b-0 md:border-b" : ""}
                                        ${!isLastCol ? "md:border-r-0" : ""}
                                        ${!isLastRow ? "md:border-b-0" : ""}
                                        `}
                                    >
                                        <div>{iconMap[useCase.iconKey]}</div>
                                        <div className="flex flex-col gap-3">
                                            <h3 className="text-[#27272A] text-base font-tight md:text-lg font-semibold leading-6 md:leading-7">{useCase.title}</h3>
                                            <p className="text-[#3F3F46] text-sm">{useCase.description}</p>
                                        </div>
                                        <Link href="#" className="text-[#18181B] text-sm font-medium hover:underline">
                                            <div className="flex items-center gap-2 group">
                                                <span>View Details</span>
                                                <div className="opacity-100 md:opacity-0 group-hover:opacity-100"><ArrowButton /></div>
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
