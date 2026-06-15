"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { DropDownIcon } from "@/src/assets/icons";
import helpglow from "../assets/images/help-glow.webp";

const tabs = [
    { id: 1, name: "Who We Help", href: "#who-we-help" },
    { id: 2, name: "How we help", href: "#how-we-help" },
    { id: 3, name: "Our process", href: "#our-process" },
    { id: 4, name: "Stack", href: "#stack" },
    { id: 5, name: "Use Cases", href: "#use-cases" },
    { id: 6, name: "Deliverables", href: "#deliverables" },
    { id: 7, name: "Why Zeeframes", href: "#why-zeeframes" }
];

const StickyNavigation = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const activeTabName = tabs.find(tab => tab.id === activeTab)?.name || "Who We Help";

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectTab = (tabId: number, href: string) => {
        setActiveTab(tabId);
        setIsDropdownOpen(false);
        
        // Scroll to section for mobile
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 152;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, tabId: number, href: string) => {
        e.preventDefault();
        setActiveTab(tabId);
        
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 152; // Header + tabs height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Scroll spy to update active tab based on visible section
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        tabs.forEach((tab) => {
            const element = document.querySelector(tab.href);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveTab(tab.id);
                    }
                },
                {
                    rootMargin: "-40% 0px -55% 0px",
                    threshold: 0
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    return (
        <div className="bg-[#0B0B0B] sticky top-9 md:top-15 z-40 pt-6 md:pt-12 ">
            <div className="container">
                <div className="">
                    {/* Mobile Dropdown - Shows before md */}
                    <div className="relative md:hidden">
                        <button
                            onClick={toggleDropdown}
                            className="w-full bg-[rgba(255,255,255,0.03)] border border-[#373737] rounded-md px-3 py-2.5 flex items-center justify-between text-white"
                        >
                            <span className="text-lg font-semibold">{activeTabName}</span>
                            <DropDownIcon />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F0F0F] border border-[#27272A] rounded-md overflow-hidden z-50 shadow-xl">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => selectTab(tab.id, tab.href)}
                                        className={`w-full px-6 py-4 text-left transition-colors ${activeTab === tab.id
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
                            <a
                                key={tab.id}
                                href={tab.href}
                                onClick={(e) => handleTabClick(e, tab.id, tab.href)}
                                className={`px-3 py-2 text-sm font-medium cursor-pointer rounded-md transition-colors ${activeTab === tab.id
                                    ? "text-[#F3FE00] bg-[#282601]"
                                    : "text-[#71717A] hover:text-white hover:bg-[#1A1A1A]"
                                    }`}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyNavigation;
