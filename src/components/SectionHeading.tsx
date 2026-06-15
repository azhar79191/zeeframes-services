import { ReactNode } from "react";

interface SectionHeadingProps {
    label: string;
    heading: string;
    labelClassName?: string;
    headingClassName?: string;
    description?: string;
    descriptionClassName?: string;
    right?: ReactNode;
}

const SectionHeading = ({
    label,
    heading,
    labelClassName = "text-[#F3FE00]",
    headingClassName = "text-[#FFF]",
    description,
    descriptionClassName,
    right,
}: SectionHeadingProps) => (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:justify-between">
        <div className="space-y-2 md:space-y-4">
            <p className={`text-sm ${labelClassName}`}>{label}</p>
            <h2 className={`text-2xl font-tight md:text-4xl font-semibold leading-8 md:leading-11 tracking-[-0.72px] ${headingClassName}`}>
                {heading}
            </h2>
        </div>
        {description && (
            <p className={`text-sm md:text-base ${descriptionClassName}`}>{description}</p>
        )}
        {right}
    </div>
);

export default SectionHeading;
