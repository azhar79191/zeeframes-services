import { ReactNode } from "react";
import { cardAnimations } from "./CardAnimations";

interface DeliverableCardProps {
    icon: ReactNode;
    number: string;
    title: string;
    description: string;
    animationIndex?: number;
    className?: string;
}

const DeliverableCard = ({ icon, number, title, description, animationIndex, className = "" }: DeliverableCardProps) => {
    const Animation = animationIndex !== undefined ? cardAnimations[animationIndex] : null;

    return (
        <div
            className={`border border-[#27272A] p-6 flex flex-col gap-19 relative overflow-hidden group hover:border-[rgba(255,255,255,0.16)] transition-colors ${className}`}
            style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)" }}
        >
            <div aria-hidden="true" className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />
            {Animation && <Animation />}
            <div className="flex items-start justify-between relative z-10">
                <span>{icon}</span>
                <span className="text-[#71717A] text-xs">{number}</span>
            </div>
            <div className="flex flex-col gap-1.5 relative z-10">
                <h4 className="text-[#FFF] text-lg font-tight font-semibold leading-7">{title}</h4>
                <p className="text-[#A1A1AA] text-sm">{description}</p>
            </div>
        </div>
    );
};

export default DeliverableCard;
