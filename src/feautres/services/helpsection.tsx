"use client";

import { AgenciesIcon, DropDownIcon, EnterpriseIcon, SaasIcon, StarIcon, Startup } from "@/src/assets/icons";
import Image from "next/image";
import { useState } from "react";
import help from '../../assets/images/help.png'
import helptop from "../../assets/images/help-top.png"
import helpglow from "../../assets/images/help-glow.svg"
import Button from "@/src/components/button";
const signs = [
    { id: 0, text: "Your product looks outdated next to competitors." },
    { id: 1, text: "Users complete critical tasks more slowly than they should." },
    { id: 2, text: "Your designers ship inconsistent screens without a design system.." },
    { id: 3, text: "Engineering keeps getting handoffs that lack specs or assets." },
    { id: 4, text: "Analytics show drop-offs at specific flows with no clear fix." },
    { id: 5, text: "A product or feature launch needs a polished, on-brand interface fast." },
]


const tabs = [
    { id: 1, name: "Who We Help" },
    { id: 2, name: "The Gap" },
    { id: 3, name: "How we help" },
    { id: 4, name: "Our process" },
    { id: 5, name: "Stack" },
    { id: 6, name: "Use Cases" },
    { id: 7, name: "Deliverables" },
    { id: 8, name: "Why Zeeframes" }
];

const helpCards = [
    {
        id: 1,
        icon: <Startup />,
        title: "Startups & Founders",
        description: "Launch a polished MVP that impresses investors and converts your first real users."
    },
    {
        id: 2,
        icon: <SaasIcon />,
        title: "SaaS Companies",
        description: "Build and optimize product flows, and drive conversion from sign-up to success metrics."
    },
    {
        id: 3,
        icon: <EnterpriseIcon />,
        title: "Enterprise Teams",
        description: "Modernize legacy products with scalable design systems, UX consistency, and consultant-UX."
    },
    {
        id: 4,
        icon: <AgenciesIcon />,
        title: "Agencies & Consultancies",
        description: "White-labeled design partner for complex client, audits and UX across B2B or SaaS insights."
    }
];

const HelpView = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const activeTabName = tabs.find(tab => tab.id === activeTab)?.name || "Who We Help";

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectTab = (tabId: number) => {
        setActiveTab(tabId);
        setIsDropdownOpen(false);
    };

    return (
        <section className="bg-[#0B0B0B]">
            <div className="container">
                <div className="py-6 md:py-12">
                    <div className="flex flex-col gap-6">
                        {/* Mobile Dropdown - Shows before md */}
                        <div className="relative md:hidden">
                            <button
                                onClick={toggleDropdown}
                                className="w-full bg-[rgba(255,255,255,0.03)] border border-[#373737] rounded-md px-3 py-2.5 flex items-center justify-between text-white"
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

                        {/* Desktop Tabs - Shows md and above */}
                        <div className="hidden md:flex items-center gap-2 relative">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-3 px-4 py-2 text-sm font-medium cursor-pointer rounded-md ${activeTab === tab.id
                                        ? "text-[#F3FE00] bg-[#282601]"
                                        : "text-[#71717A]"
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                            <div className="hidden md:block">
                            <Image
                                src={helpglow}
                                alt="glow"
                                className="absolute right-50 -top-80 z-0"
                            />
</div>
                        </div>
                        <div className="flex flex-col gap-6 md:gap-15">
                            <div className="mt-6 md:mt-15 flex flex-col md:flex-row items-center md:justify-between">
                                <div className="space-y-2 md:space-y-4">
                                    <p className="text-[#F3FE00] text-sm">Who We Help</p>
                                    <h2 className="text-2xl md:text-4xl font-semibold leading-8 md:leading-11 text-[#FFF] w-[318px] md:w-[442px]">Who Our UI UX Design Services Are For</h2>
                                </div>
                                <p className="text-sm md:text-base text-[#D4D4D8] w-full md:w-[630px] ">The latest industry news, interviews, technologies, and resources. The latest industry news, interviews, technologies, and resources.</p>

                            </div>
                            <div className="flex flex-col md:flex-row items-center z-10">
                                {helpCards.map((card, index) => (
                                    <div
                                        key={card.id}
                                        className={`bg-[#0F0F0F] border border-[#373737] p-6 flex flex-col gap-10  md:justify-between hover:border-[rgba(255,255,255,0.16)] transition-colors h-auto md:h-[314px] relative overflow-hidden group w-full md:w-auto
                                        ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-l-[14px]" : ""}
                                        ${index === helpCards.length - 1 ? "rounded-b-[14px] md:rounded-b-none md:rounded-r-[14px]" : ""}
                                        ${index !== helpCards.length - 1 ? "border-b-0 md:border-b md:border-r-0" : ""}
                                        `}
                                    >
                                        {/* Hover Glow Effect */}
                                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />

                                        <div className="text-4xl relative z-10">
                                            {card.icon}
                                        </div>
                                        <div className="flex flex-col gap-2 relative z-10">
                                            <h3 className="text-[#FFF] text-base md:text-lg font-semibold leading-6 md:leading-7">
                                                {card.title}
                                            </h3>
                                            <p className="text-[#D4D4D8] text-sm">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="py-6 md:py-15 px-4 md:px-8 flex flex-col md:flex-row rounded-[14px] gap-6 md:gap-12 bg-[#FFF]">
                                <div className="relative">
                                    <Image
                                        src={help}
                                        alt="help img"
                                        width={508}
                                        height={344}
                                        className="rounded-[10px] w-[326px] md:w-[508px] h-[270px] md:h-[344px] object-cover"
                                    />
                                    <Image
                                        src={helptop}
                                        alt="top"
                                        width={508}
                                        height={309}
                                        className="absolute top-4 left-0 rounded-[10px]"
                                    />
                                </div>
                                <div className="space-y-3 md:space-y-4">
                                    <h3 className="text-[#27272A] text-2xl md:text-4xl font-semibold leading-6 md:leading-11 tracking-[-0.72px]" style={{ fontFamily: '"Inter Tight"' }}>Signs You Need a UI/UX Design Partner</h3>
                                    <p className="text-sm md:text-base font-medium md:font-normal text-[#52525B]">If any of these sound familiar, it's time to engage a UI UX design agency:</p>
                                    <ul className="space-y-2 pt-3 md:pt-2 pb-3">
                                        {signs.map((item) => (
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
                                        className="group w-full md:w-fit flex items-center justify-center mt-2 w-fit border border-transparent bg-black hover:bg-white hover:border-black transition-all duration-300"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpView;