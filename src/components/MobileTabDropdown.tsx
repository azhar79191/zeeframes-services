"use client";

import { useState } from "react";
import { DropDownIcon } from "@/src/assets/icons";

interface Tab {
    id: string;
    name: string;
}

interface MobileTabDropdownProps {
    tabs: Tab[];
    activeTab: string;
    onSelect: (id: string) => void;
}

const MobileTabDropdown = ({ tabs, activeTab, onSelect }: MobileTabDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeTabName = tabs.find(t => t.id === activeTab)?.name ?? tabs[0].name;

    return (
        <div className="relative md:hidden">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                className="w-full bg-[#0B0B0B] border border-[#27272A] rounded-md px-3 py-2.5 flex items-center justify-between text-white"
            >
                <span className="text-lg font-semibold">{activeTabName}</span>
                <DropDownIcon />
            </button>

            {isOpen && (
                <ul
                    role="listbox"
                    className="absolute top-full left-0 right-0 mt-1 bg-[#0F0F0F] border border-[#27272A] rounded-[14px] overflow-hidden z-50 shadow-xl"
                >
                    {tabs.map(tab => (
                        <li key={tab.id} role="option" aria-selected={activeTab === tab.id}>
                            <button
                                onClick={() => { onSelect(tab.id); setIsOpen(false); }}
                                className={`w-full px-6 py-4 text-left transition-colors ${
                                    activeTab === tab.id
                                        ? "bg-[#282601] text-[#F3FE00]"
                                        : "text-[#71717A] hover:bg-[#1A1A1A] hover:text-white"
                                }`}
                            >
                                <span className="text-base font-medium">{tab.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MobileTabDropdown;
