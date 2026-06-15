import { ReactNode } from "react";

interface ExtraCardProps {
    icon: ReactNode;
    number: string;
    title: string;
    description: string;
}

const ExtraCard = ({ icon, number, title, description }: ExtraCardProps) => (
    <div
        className="border border-[#27272A] p-6 rounded-b-[14px] flex items-start justify-between"
        style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)" }}
    >
        <div className="flex flex-col gap-21">
            <span>{icon}</span>
            <div className="flex flex-col gap-1.5">
                <h4 className="text-[#FFF] font-tight text-lg font-semibold leading-7">{title}</h4>
                <p className="text-[#A1A1AA] text-sm">{description}</p>
            </div>
        </div>
        <span className="text-[#71717A] text-xs">{number}</span>
    </div>
);

export default ExtraCard;
