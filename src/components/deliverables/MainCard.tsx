import Image, { StaticImageData } from "next/image";

interface MainCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    className?: string;
    hasExtraCard?: boolean;
}

const MainCard = ({ title, description, image, className = "", hasExtraCard }: MainCardProps) => (
    <div
        className={`border border-[#27272A] p-6 flex flex-col justify-between h-42 md:h-full relative overflow-hidden group hover:border-[rgba(255,255,255,0.16)] transition-colors md:border-r-0 ${hasExtraCard ? "border-b-0" : ""} ${className}`}
        style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)" }}
    >
        <div aria-hidden="true" className="absolute -top-20 -right-20 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />
        <Image
            src={image}
            alt="animations"
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-6 left-6 z-0 h-auto w-full max-w-147 scale-40 opacity-0 transition-all duration-1000 ease-out group-hover:scale-100 group-hover:opacity-100"
        />
        <div className="flex items-start flex-col gap-3 relative z-10">
            <h3 className="text-[#F4F4EE] font-tight text-lg md:text-5xl font-semibold md:font-bold leading-7 md:leading-15 tracking-[-0.96px]">
                {title}
            </h3>
            <p className="text-[#A1A1AA] mb-10 md:mb-0 text-sm w-full md:w-117.25 md:text-base">
                {description}
            </p>
        </div>
    </div>
);

export default MainCard;
