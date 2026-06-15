"use client";

import { useState } from "react";
import { AnalysisIcon, ClusterIcon, DesignIcon, EvaluationIcon, FLowIcon, MapIcon, MobileIcon, PrototypeIcon, SystemIcon } from "@/src/assets/icons";
import cardanimation from "@/src/assets/images/card-animation.png";
import MainCard from "@/src/components/deliverables/MainCard";
import DeliverableCard from "@/src/components/deliverables/DeliverableCard";
import ExtraCard from "@/src/components/deliverables/ExtraCard";
import MobileTabDropdown from "@/src/components/MobileTabDropdown";
import deliverablesData from "@/src/data/deliverables.json";
import SectionHeading from "@/src/components/SectionHeading";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
    EvaluationIcon: <EvaluationIcon />,
    AnalysisIcon:   <AnalysisIcon />,
    MapIcon:        <MapIcon />,
    ClusterIcon:    <ClusterIcon />,
    FLowIcon:       <FLowIcon />,
    DesignIcon:     <DesignIcon />,
    MobileIcon:     <MobileIcon />,
    SystemIcon:     <SystemIcon />,
    PrototypeIcon:  <PrototypeIcon />,
};

type TabData = typeof deliverablesData.deliverablesByTab;
type TabKey = keyof TabData;

const pickAnim = (seed: number) => seed % 4;

const DeliverablesSection = () => {
    const [activeTab, setActiveTab] = useState<TabKey>("discover");
    const currentData = deliverablesData.deliverablesByTab[activeTab];
    const isSpecialLayout = activeTab === "validate" || activeTab === "ship";
    const hasExtraCard = "extraCard" in currentData && !!currentData.extraCard;

    const mainCardRoundingClass = isSpecialLayout
        ? "rounded-t-[14px] md:rounded-t-none md:rounded-l-[14px]"
        : "rounded-t-[14px] md:rounded-t-none md:rounded-tl-[14px]";

    return (
        <section className="bg-[#0B0B0B]" id="deliverables" aria-label="UI/UX Design Deliverables">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                        <SectionHeading
                            label="Deliverables"
                            heading="UI/UX Design Deliverables"
                            headingClassName="text-[#FFF] w-full md:w-[442px]"
                            description="Every engagement ships with production-ready outputs your team can use immediately:"
                            descriptionClassName="text-[#D4D4D8] w-full md:w-[584px]"
                        />

                        <MobileTabDropdown
                            tabs={deliverablesData.tabs}
                            activeTab={activeTab}
                            onSelect={(id) => setActiveTab(id as TabKey)}
                        />

                        <nav className="hidden md:flex items-center gap-2" aria-label="Deliverables phases">
                            {deliverablesData.tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as TabKey)}
                                    aria-current={activeTab === tab.id ? "true" : undefined}
                                    className={`px-3 py-2 text-sm font-medium cursor-pointer rounded-md transition-colors ${
                                        activeTab === tab.id ? "bg-[#282601] text-[#C1C300]" : "text-[#71717A]"
                                    }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </nav>

                        <div className="flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <MainCard
                                    title={currentData.mainTitle}
                                    description={currentData.mainDescription}
                                    image={cardanimation}
                                    className={mainCardRoundingClass}
                                    hasExtraCard={hasExtraCard}
                                />

                                {isSpecialLayout && "topCard" in currentData && currentData.topCard ? (
                                    <div className="flex flex-col">
                                        <DeliverableCard
                                            icon={iconMap[currentData.topCard.iconKey]}
                                            number={currentData.topCard.number}
                                            title={currentData.topCard.title}
                                            description={currentData.topCard.description}
                                            animationIndex={pickAnim(currentData.topCard.id)}
                                            className="border-b-0 rounded-tr-[14px]"
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2">
                                            {currentData.items.map((item, index) => (
                                                <DeliverableCard
                                                    key={item.id}
                                                    icon={iconMap[item.iconKey]}
                                                    number={item.number}
                                                    title={item.title}
                                                    description={item.description}
                                                    animationIndex={pickAnim(item.id + 1)}
                                                    className={
                                                        index === 0
                                                            ? "border-b-0 md:border-b md:border-r-0"
                                                            : "rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px]"
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        {currentData.items.map((item, index) => (
                                            <DeliverableCard
                                                key={item.id}
                                                icon={iconMap[item.iconKey]}
                                                number={item.number}
                                                title={item.title}
                                                description={item.description}
                                                animationIndex={index}
                                                className={[
                                                    index === 1 ? "md:rounded-tr-[14px]" : "",
                                                    index === 3 && !hasExtraCard ? "rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px]" : "",
                                                    index === 0 || index === 2 ? "md:border-r-0" : "",
                                                    index === 0 || index === 1 ? "border-b-0 md:border-b" : "",
                                                    index === 2 ? "border-b-0 md:border-b" : "",
                                                    index === 3 && hasExtraCard ? "border-b-0 md:border-b" : "",
                                                ].filter(Boolean).join(" ")}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {activeTab === "design" && hasExtraCard && "extraCard" in currentData && currentData.extraCard && (
                                <ExtraCard
                                    icon={iconMap[currentData.extraCard.iconKey]}
                                    number={currentData.extraCard.number}
                                    title={currentData.extraCard.title}
                                    description={currentData.extraCard.description}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliverablesSection;
