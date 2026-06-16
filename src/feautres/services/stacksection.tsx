"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import figma from "../../assets/images/tools/figma.webp";
import figjam from "../../assets/images/tools/pen.webp";
import framer from "../../assets/images/tools/frmer.webp";
import penpot from "../../assets/images/tools/penpot.webp";
import sketch from "../../assets/images/tools/sketch.webp";
import axure from "../../assets/images/tools/axure.webp";
import protopie from "../../assets/images/tools/protpie.webp";
import adobexd from "../../assets/images/tools/xd.webp";
import MobileTabDropdown from "@/src/components/MobileTabDropdown";
import stackData from "@/src/data/stack.json";
import SectionHeading from "@/src/components/SectionHeading";

const imageMap: Record<string, StaticImageData> = {
    figma, figjam, framer, penpot, sketch, axure, protopie, adobexd,
};

const StackSection = () => {
    const [activeTab, setActiveTab] = useState("ux-ui");
    const filteredTools = stackData.tools.filter(tool => tool.category === activeTab);

    return (
        <section className="bg-[#0B0B0B]" id="stack">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                        <SectionHeading
                            label="Stack"
                            heading="Tools We Use for UI/UX Design"
                            headingClassName="text-[#FFF] w-full md:w-[300px]"
                            description="Our design stack blends industry-standard tools with modern AI platforms, giving your team senior craft at startup speed."
                            descriptionClassName="text-[#D4D4D8] w-full md:w-[447px]"
                        />

                        <MobileTabDropdown tabs={stackData.tabs} activeTab={activeTab} onSelect={setActiveTab} />

                        <div className="flex gap-4 md:gap-6">
                            <div className="hidden md:flex flex-col gap-2 p-3 rounded-[14px] bg-[#18181B]">
                                {stackData.tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`text-left px-4 cursor-pointer py-3 rounded-md text-sm font-medium transition-colors relative ${
                                            activeTab === tab.id ? "bg-[rgba(243,254,0,0.12)] text-[#F3FE00]" : "text-[#D4D4D8]"
                                        }`}
                                    >
                                        {activeTab === tab.id && (
                                            <span className="absolute left-0 top-2.75 w-0.75 h-5.25 bg-[#F3FE00]" />
                                        )}
                                        {tab.name}
                                    </button>
                                ))}
                            </div>

                            <div className="flex-1 bg-[#FAF9F4] rounded-[14px]">
                                <div className="grid grid-cols-2 md:grid-cols-4">
                                    {filteredTools.map((tool, index) => {
                                        const isFirstRow    = index < 4;
                                        const isSecondRow   = index >= 4 && index < 8;
                                        const isFirstCol    = index % 4 === 0;
                                        const isLastCol     = index % 4 === 3;
                                        const isMobileFirstRow = index < 2;
                                        const isMobileLastRow  = index >= filteredTools.length - 2;
                                        const isMobileFirstCol = index % 2 === 0;
                                        const isMobileLastCol  = index % 2 === 1;

                                        return (
                                            <div
                                                key={tool.id}
                                                className={`bg-[#FFF] hover:bg-[#F4F2E8] px-6 py-4.5 md:py-12 flex flex-col items-center gap-3 md:justify-between h-full md:h-48.5 w-full md:w-65.5 border border-[#F1EFE6]
                                                ${index === 0 ? "rounded-tl-[14px]" : ""}
                                                ${index === 1 ? "rounded-tr-[14px] md:rounded-tr-none" : ""}
                                                ${index === 3 ? "md:rounded-tr-[14px]" : ""}
                                                ${index === 4 ? "md:rounded-bl-[14px]" : ""}
                                                ${index === filteredTools.length - 2 ? "rounded-bl-[14px] md:rounded-bl-none" : ""}
                                                ${index === filteredTools.length - 1 ? "rounded-br-[14px]" : ""}
                                                ${isMobileFirstRow ? "border-t-0" : ""}
                                                ${!isMobileLastRow ? "border-b-0 md:border-b" : ""}
                                                ${isMobileFirstCol ? "border-l-0 md:border-l border-r-0 md:border-r" : ""}
                                                ${isMobileLastCol ? "border-r-0 md:border-r" : ""}
                                                ${isFirstRow || isSecondRow ? "md:border-t-0" : ""}
                                                ${isSecondRow ? "md:border-b-0" : ""}
                                                ${isFirstCol ? "md:border-l-0" : ""}
                                                ${isLastCol ? "md:border-r-0" : ""}
                                                `}
                                            >
                                                <div className="flex-1 flex items-center justify-center">
                                                    <Image
                                                        src={imageMap[tool.imageKey]}
                                                        alt={tool.name}
                                                        width={tool.width}
                                                        height={tool.height}
                                                        style={{ width: "auto", height: "auto" }}
                                                    />
                                                </div>
                                                <span className="text-[#27272A] text-sm">{tool.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StackSection;
