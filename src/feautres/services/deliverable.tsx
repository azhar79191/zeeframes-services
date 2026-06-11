"use client";

import { useState } from "react";
import { AnalysisIcon, ClusterIcon, DesignIcon, DropDownIcon, EvaluationIcon, FLowIcon, MapIcon, MobileIcon, PrototypeIcon, SystemIcon } from "@/src/assets/icons";

const tabs = [
    { id: "discover", name: "Discover" },
    { id: "design", name: "Design" },
    { id: "validate", name: "Validate" },
    { id: "ship", name: "Ship" }
];

const deliverablesByTab = {
    discover: {
        mainTitle: "Stakeholder Interviews",
        mainDescription: "Structured conversations extracting goals, constraints & success metrics.",
        items: [
            {
                id: 1,
                number: "02",
                icon: <EvaluationIcon />,
                title: "Heuristic Evaluation",
                description: "Expert review against usability principles."
            },
            {
                id: 2,
                number: "03",
                icon: <AnalysisIcon />,
                title: "Competitive Analysis",
                description: "Benchmark mapping gaps & opportunities."
            },
            {
                id: 3,
                number: "04",
                icon: <MapIcon />,
                title: "User Journey Mapping",
                description: "Touchpoints, emotions and friction."
            },
            {
                id: 4,
                number: "04",
                icon: <ClusterIcon />,
                title: "Affinity Clustering",
                description: "Insights grouped into themes."
            }
        ]
    },
    design: {
        mainTitle: "Information Architecture",
        mainDescription: "Card-sorted site maps & navigation taxonomies validated with users.",
        items: [
            {
                id: 1,
                number: "02",
                icon: <FLowIcon />,
                title: "Interaction Flows",
                description: "Every state, branch and edge case."
            },
            {
                id: 2,
                number: "03",
                icon: <DesignIcon />,
                title: "Lo-fi Wireframes",
                description: "Structural layouts for hierarchy."
            },
            {
                id: 3,
                number: "04",
                icon: <MobileIcon />,
                title: "Hi-fi UI Screens",
                description: "Pixel-perfect brand fidelity."
            },
            {
                id: 4,
                number: "05",
                icon: <SystemIcon />,
                title: "Design System",
                description: "Tokenized component library."
            }
        ],
        extraCard: {
            icon: <PrototypeIcon />,
            number: "06",
            title: "Micro-interactions",
            description: "Choreographed motion specs."
        }
    },
    validate: {
        mainTitle: "Interactive Prototype",
        mainDescription: "Figma or ProtoPie prototypes linked to real test scenarios.",
        layout: "special", // special layout for validate tab
        topCard: {
            id: 1,
            number: "02",
            icon: <EvaluationIcon />,
            title: "Usability Test Report",
            description: "Findings with severity-ranked fixes."
        },
        items: [
            {
                id: 2,
                number: "03",
                icon: <ClusterIcon />,
                title: "Accessibility Audit",
                description: "WCAG 2.2 AA & remediation list."
            },
            {
                id: 3,
                number: "04",
                icon: <AnalysisIcon />,
                title: "A/B Test Specification",
                description: "Hypothesis-driven variants."
            }
        ]
    },
    ship: {
        mainTitle: "Developer Handoff",
        mainDescription: "Inspect-ready Figma file with redlines, assets and motion specs.",
        layout: "special", // same layout as validate
        topCard: {
            id: 1,
            number: "02",
            icon: <DesignIcon />,
            title: "Design QA Review",
            description: "Builds vs design audit pre-release."
        },
        items: [
            {
                id: 2,
                number: "03",
                icon: <EvaluationIcon />,
                title: "Documentation Site",
                description: "Living component reference."
            },
            {
                id: 3,
                number: "04",
                icon: <SystemIcon />,
                title: "Maintenance Retainer",
                description: "Ongoing product support."
            }
        ]
    }
};

const DeliverablesSection = () => {
    const [activeTab, setActiveTab] = useState("discover");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const activeTabName = tabs.find(tab => tab.id === activeTab)?.name || "Discover";

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectTab = (tabId: string) => {
        setActiveTab(tabId);
        setIsDropdownOpen(false);
    };

    const currentData = deliverablesByTab[activeTab as keyof typeof deliverablesByTab];

    return (
        <section className="bg-[#0B0B0B]">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:justify-between">
                            <div className="space-y-2 md:space-y-4">
                                <p className="text-[#F3FE00] text-sm">Deliverables</p>
                                <h2 className="text-2xl md:text-4xl font-semibold leading-8 md:leading-11 text-[#FFF] tracking-[-0.72px] w-full md:w-[442px]">UI/UX Design Deliverables</h2>
                            </div>
                            <p className="text-sm md:text-base text-[#D4D4D8] w-full md:w-[584px]">Every engagement ships with production-ready outputs your team can use immediately:</p>
                        </div>

                        {/* Mobile Dropdown - Shows before md */}
                        <div className="relative md:hidden">
                            <button
                                onClick={toggleDropdown}
                                className="w-full bg-[#0B0B0B] border border-[#27272A] rounded-md px-3 py-2.5 flex items-center justify-between text-white"
                            >
                                <span className="text-lg font-semibold">{activeTabName}</span>
                                <DropDownIcon />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-[#0F0F0F] border border-[#27272A] rounded-[14px] overflow-hidden z-50 shadow-xl">
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

                        {/* Desktop Tabs - Shows md and above */}
                        <div className="hidden md:flex items-center gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-3 py-2 text-sm font-medium cursor-pointer rounded-md transition-colors ${
                                        activeTab === tab.id
                                            ? "bg-[#282601] text-[#C1C300]"
                                            : "text-[#71717A]"
                                    }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        {/* Content Grid */}
                        <div className="flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Large Card */}
                                <div 
                                    className={`border border-[#27272A] p-6 flex flex-col justify-between h-full h-[168px] md:h-full relative overflow-hidden group hover:border-[rgba(255,255,255,0.16)] transition-colors
                                    ${activeTab === "validate" || activeTab === "ship" ? "rounded-t-[14px] md:rounded-t-none md:rounded-l-[14px]" : "rounded-t-[14px] md:rounded-t-none md:rounded-tl-[14px]"}
                                    ${"extraCard" in currentData && currentData.extraCard ? "border-b-0" : ""}
                                    md:border-r-0
                                    `}
                                    style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)' }}
                                >
                                    {/* Hover Glow Effect - Top Right */}
                                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />
                                    
                                    <div className="flex items-start flex-col gap-3 relative z-10">
                                        <h3 className="text-[#F4F4EE] text-lg md:text-5xl font-semibold md:font-bold leading-7 md:leading-15 -tracking-[0.96px]">
                                            {currentData.mainTitle}
                                        </h3>
                                        <p className="text-[#A1A1AA] mb-10 md:mb-0 text-sm md:text-base">
                                            {currentData.mainDescription}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column - Special Layout for Validate and Ship Tabs */}
                                {(activeTab === "validate" || activeTab === "ship") && "topCard" in currentData && currentData.topCard ? (
                                    <div className="flex flex-col">
                                        {/* Top Full-Width Card */}
                                        <div
                                            className="border border-[#27272A] border-b-0 p-6 flex flex-col gap-19 rounded-tr-[14px] md:rounded-tr-[14px]"
                                            style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)' }}
                                        >
                                            <div className="flex items-start justify-between">
                                                <span>{currentData.topCard.icon}</span>
                                                <span className="text-[#71717A] text-xs">{currentData.topCard.number}</span>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <h4 className="text-[#FFF] text-lg font-semibold leading-7">
                                                    {currentData.topCard.title}
                                                </h4>
                                                <p className="text-[#A1A1AA] text-sm">
                                                    {currentData.topCard.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Two Cards */}
                                        <div className="grid grid-cols-1 md:grid-cols-2">
                                            {currentData.items.map((item, index) => (
                                                <div
                                                    key={item.id}
                                                    className={`border border-[#27272A] p-6 flex flex-col gap-19 
                                                    ${index === 0 ? "border-b-0 md:border-b md:border-r-0" : "rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px]"}
                                                    `}
                                                    style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)' }}
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <span>{item.icon}</span>
                                                        <span className="text-[#71717A] text-xs">{item.number}</span>
                                                    </div>
                                                    <div className="flex flex-col gap-1.5">
                                                        <h4 className="text-[#FFF] text-lg font-semibold leading-7">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-[#A1A1AA] text-sm">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    /* Small Cards Grid - Default Layout */
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        {currentData.items.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className={`border border-[#27272A] p-6 flex flex-col gap-19 relative overflow-hidden group hover:border-[rgba(255,255,255,0.16)] transition-colors 
                                                ${index === 1 ? "md:rounded-tr-[14px]" : ""}
                                                ${index === 3 && !("extraCard" in currentData && currentData.extraCard) ? "rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px]" : ""}
                                                ${index === 0 || index === 2 ? "md:border-r-0" : ""}
                                                ${index === 0 || index === 1 ? "border-b-0 md:border-b" : ""}
                                                ${index === 2 && !("extraCard" in currentData && currentData.extraCard) ? "border-b-0 md:border-b" : ""}
                                                ${index === 2 && "extraCard" in currentData && currentData.extraCard ? "border-b-0 md:border-b" : ""}
                                                ${index === 3 && "extraCard" in currentData && currentData.extraCard ? "border-b-0 md:border-b" : ""}
                                                `}
                                                style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)' }}
                                            >
                                                {/* Hover Glow Effect - Bottom Center from both sides */}
                                                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />
                                                
                                                <div className="flex items-start justify-between relative z-10">
                                                    <span>{item.icon}</span>
                                                    <span className="text-[#71717A] text-xs">{item.number}</span>
                                                </div>
                                                <div className="flex flex-col gap-1.5 relative z-10">
                                                    <h4 className="text-[#FFF] text-lg font-semibold leading-7">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-[#A1A1AA] text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Extra Card for Design Tab - Full Width Below */}
                            {activeTab === "design" && "extraCard" in currentData && currentData.extraCard && (
                                <div
                                    className="border border-[#27272A] p-6 rounded-b-[14px] flex items-start gap-6"
                                    style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)' }}
                                >
                                    <div className="flex items-start justify-between w-full">
                                        <div className="flex flex-col gap-21">
                                            <span>{currentData.extraCard.icon}</span>
                                            <div className="flex flex-col gap-1.5">
                                                <h4 className="text-[#FFF] text-lg font-semibold leading-7">
                                                    {currentData.extraCard.title}
                                                </h4>
                                                <p className="text-[#A1A1AA] text-sm">
                                                    {currentData.extraCard.description}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-[#71717A] text-xs">{currentData.extraCard.number}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliverablesSection;