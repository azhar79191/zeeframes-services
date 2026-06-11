"use client";

import { useState } from "react";
import Image from "next/image";

// Import tool logos
import figma from "../../assets/images/tools/figma.png";
import figjam from "../../assets/images/tools/pen.png";
import framer from "../../assets/images/tools/frmer.png";
import penpot from "../../assets/images/tools/penpot.png";
import sketch from "../../assets/images/tools/sketch.png";
import axure from "../../assets/images/tools/axure.png";
import protopie from "../../assets/images/tools/protpie.png";
import adobexd from "../../assets/images/tools/xd.png";
import { DropDownIcon } from "@/src/assets/icons";

const tabs = [
    { id: "ux-ui", name: "UI/UX Design" },
    { id: "ai", name: "AI & Creative Intelligence" },
    { id: "lowcode", name: "Low Code" },
    { id: "usability", name: "Usability Testing" },
    { id: "graphics", name: "Graphic & Motion" },
    { id: "collaboration", name: "Collaboration" },
    { id: "documentation", name: "Documentation" }
];

const toolsData = [
    // UI/UX Design
    { id: 1, name: "Figma", image: figma, category: "ux-ui", width: 48, height: 72 },
    { id: 2, name: "FigJam", image: figjam, category: "ux-ui", width: 72, height: 72 },
    { id: 3, name: "Framer", image: framer, category: "ux-ui", width: 48, height: 72 },
    { id: 4, name: "Penpot", image: penpot, category: "ux-ui", width: 54, height: 72 },
    { id: 5, name: "Sketch", image: sketch, category: "ux-ui", width: 70, height: 70 },
    { id: 6, name: "Axure RP", image: axure, category: "ux-ui", width: 72, height: 17 },
    { id: 7, name: "ProtoPie", image: protopie, category: "ux-ui", width: 63, height: 64 },
    { id: 8, name: "Adobe Xd", image: adobexd, category: "ux-ui", width: 70, height: 70 },
    
    // AI & Creative Intelligence
    { id: 9, name: "Figma", image: figma, category: "ai", width: 48, height: 72 },
    { id: 10, name: "FigJam", image: figjam, category: "ai", width: 72, height: 72 },
    { id: 11, name: "Framer", image: framer, category: "ai", width: 48, height: 72 },
    { id: 12, name: "Penpot", image: penpot, category: "ai", width: 54, height: 72 },
    { id: 13, name: "Sketch", image: sketch, category: "ai", width: 70, height: 70 },
    { id: 14, name: "Axure RP", image: axure, category: "ai", width: 72, height: 17 },
    { id: 15, name: "ProtoPie", image: protopie, category: "ai", width: 63, height: 64 },
    { id: 16, name: "Adobe Xd", image: adobexd, category: "ai", width: 70, height: 70 },
    
    // Low Code
    { id: 17, name: "Figma", image: figma, category: "lowcode", width: 48, height: 72 },
    { id: 18, name: "FigJam", image: figjam, category: "lowcode", width: 72, height: 72 },
    { id: 19, name: "Framer", image: framer, category: "lowcode", width: 48, height: 72 },
    { id: 20, name: "Penpot", image: penpot, category: "lowcode", width: 54, height: 72 },
    { id: 21, name: "Sketch", image: sketch, category: "lowcode", width: 70, height: 70 },
    { id: 22, name: "Axure RP", image: axure, category: "lowcode", width: 72, height: 17 },
    { id: 23, name: "ProtoPie", image: protopie, category: "lowcode", width: 63, height: 64 },
    { id: 24, name: "Adobe Xd", image: adobexd, category: "lowcode", width: 70, height: 70 },
    
    // Usability Testing
    { id: 25, name: "Figma", image: figma, category: "usability", width: 48, height: 72 },
    { id: 26, name: "FigJam", image: figjam, category: "usability", width: 72, height: 72 },
    { id: 27, name: "Framer", image: framer, category: "usability", width: 48, height: 72 },
    { id: 28, name: "Penpot", image: penpot, category: "usability", width: 54, height: 72 },
    { id: 29, name: "Sketch", image: sketch, category: "usability", width: 70, height: 70 },
    { id: 30, name: "Axure RP", image: axure, category: "usability", width: 72, height: 17 },
    { id: 31, name: "ProtoPie", image: protopie, category: "usability", width: 63, height: 64 },
    { id: 32, name: "Adobe Xd", image: adobexd, category: "usability", width: 70, height: 70 },
    
    // Graphic & Motion
    { id: 33, name: "Figma", image: figma, category: "graphics", width: 48, height: 72 },
    { id: 34, name: "FigJam", image: figjam, category: "graphics", width: 72, height: 72 },
    { id: 35, name: "Framer", image: framer, category: "graphics", width: 48, height: 72 },
    { id: 36, name: "Penpot", image: penpot, category: "graphics", width: 54, height: 72 },
    { id: 37, name: "Sketch", image: sketch, category: "graphics", width: 70, height: 70 },
    { id: 38, name: "Axure RP", image: axure, category: "graphics", width: 72, height: 17 },
    { id: 39, name: "ProtoPie", image: protopie, category: "graphics", width: 63, height: 64 },
    { id: 40, name: "Adobe Xd", image: adobexd, category: "graphics", width: 70, height: 70 },
    
    // Collaboration
    { id: 41, name: "Figma", image: figma, category: "collaboration", width: 48, height: 72 },
    { id: 42, name: "FigJam", image: figjam, category: "collaboration", width: 72, height: 72 },
    { id: 43, name: "Framer", image: framer, category: "collaboration", width: 48, height: 72 },
    { id: 44, name: "Penpot", image: penpot, category: "collaboration", width: 54, height: 72 },
    { id: 45, name: "Sketch", image: sketch, category: "collaboration", width: 70, height: 70 },
    { id: 46, name: "Axure RP", image: axure, category: "collaboration", width: 72, height: 17 },
    { id: 47, name: "ProtoPie", image: protopie, category: "collaboration", width: 63, height: 64 },
    { id: 48, name: "Adobe Xd", image: adobexd, category: "collaboration", width: 70, height: 70 },
    
    // Documentation
    { id: 49, name: "Figma", image: figma, category: "documentation", width: 48, height: 72 },
    { id: 50, name: "FigJam", image: figjam, category: "documentation", width: 72, height: 72 },
    { id: 51, name: "Framer", image: framer, category: "documentation", width: 48, height: 72 },
    { id: 52, name: "Penpot", image: penpot, category: "documentation", width: 54, height: 72 },
    { id: 53, name: "Sketch", image: sketch, category: "documentation", width: 70, height: 70 },
    { id: 54, name: "Axure RP", image: axure, category: "documentation", width: 72, height: 17 },
    { id: 55, name: "ProtoPie", image: protopie, category: "documentation", width: 63, height: 64 },
    { id: 56, name: "Adobe Xd", image: adobexd, category: "documentation", width: 70, height: 70 },
];

const StackSection = () => {
    const [activeTab, setActiveTab] = useState("ux-ui");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const activeTabName = tabs.find(tab => tab.id === activeTab)?.name || "UI/UX Design";

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectTab = (tabId: string) => {
        setActiveTab(tabId);
        setIsDropdownOpen(false);
    };

    const filteredTools = toolsData.filter(tool => tool.category === activeTab);

    return (
        <section className="bg-[#0B0B0B]">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:justify-between">
                            <div className="space-y-2 md:space-y-4">
                                <p className="text-[#F3FE00] text-sm">Stack</p>
                                <h2 className="text-2xl md:text-4xl font-semibold leading-8 md:leading-11 text-[#FFF] tracking-[-0.72px] w-full md:w-[433px]">Tools We Use for UI/UX Design</h2>
                            </div>
                            <p className="text-sm md:text-base text-[#D4D4D8] w-full md:w-[447px]">Our design stack blends industry-standard tools with modern AI platforms, giving your team senior craft at startup speed.</p>
                        </div>

                        {/* Mobile Dropdown - Shows before md */}
                        <div className="relative md:hidden">
                            <button
                                onClick={toggleDropdown}
                                className="w-full bg-[#0B0B0B] border border-[#27272A] rounded-md px-3 py-2.5 flex items-center justify-between text-white"
                            >
                                <span className="text-lg font-semibold">{activeTabName}</span>
                               <DropDownIcon/>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F0F0F] border border-[#27272A] rounded-md overflow-hidden z-50 shadow-xl">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => selectTab(tab.id)}
                                            className={`w-full px-6 py-4 text-left transition-colors ${
                                                activeTab === tab.id
                                                    ? "bg-[#282601] text-[#F3FE00]"
                                                    : "text-[#71717A] hover:bg-[#1A1A1A] hover:text-white"
                                            }`}
                                        >
                                            <span className="text-base font-medium">{tab.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4 md:gap-6">
                            {/* Desktop Tabs Sidebar - Shows md and above */}
                            <div className="hidden md:flex flex-col gap-2 p-3 rounded-[14px] bg-[#18181B]">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`text-left px-4 cursor-pointer py-3 rounded-md text-sm font-medium transition-colors relative ${
                                            activeTab === tab.id
                                                ? "bg-[rgba(243,254,0,0.12)] text-[#F3FE00]"
                                                : "text-[#D4D4D8]"
                                        }`}
                                    >
                                        {activeTab === tab.id && (
                                            <span className="absolute left-0 top-2.75  w-[3px] h-[21px] bg-[#F3FE00]" />
                                        )}
                                        {tab.name}
                                    </button>
                                ))}
                            </div>

                            {/* Tools Grid */}
                            <div className="flex-1 bg-[#FAF9F4] rounded-[14px]">
                                <div className="grid grid-cols-2 md:grid-cols-4">
                                    {filteredTools.map((tool, index) => {
                                        const isFirstRow = index < 4;
                                        const isSecondRow = index >= 4 && index < 8;
                                        const isFirstCol = index % 4 === 0;
                                        const isLastCol = index % 4 === 3;
                                        
                                        // Mobile: 2 columns
                                        const isMobileFirstRow = index < 2;
                                        const isMobileLastRow = index >= filteredTools.length - 2;
                                        const isMobileFirstCol = index % 2 === 0;
                                        const isMobileLastCol = index % 2 === 1;
                                        
                                        return (
                                            <div
                                                key={tool.id}
                                                className={`bg-[#FFF] hover:bg-[#F4F2E8] px-6 py-4.5 md:py-12 flex flex-col items-center gap-3 md:justify-between h-full md:h-[194px] w-full md:w-[262px] border border-[#F1EFE6] 
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
                                                        src={tool.image}
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