import { ArrowButton, InformationIcon, ResearchIcon, StarIcon, TestingIcon } from "@/src/assets/icons";
import Image from "next/image";
import processImg from "../../assets/images/processimg.webp";
import Button from "@/src/components/button";

const processCards = [
    {
        id: 1,
        icon: <ResearchIcon />,
        title: "Discovery & Research",
        points: [
            "Kickoff workshop and stakeholder alignment in FigJam.",
            "User research, competitive benchmarking, and analytics review.",
            "Clear design brief with goals, KPIs, and success metrics."
        ]
    },
    {
        id: 2,
        icon: <InformationIcon />,
        title: "Information Architecture & Flows",
        points: [
            "User journey mapping and sitemap design.",
            "Task flows for critical user actions.",
            "Low-fidelity wireframes for structure review."
        ]
    },
    {
        id: 3,
        icon: <TestingIcon />,
        title: "Design & Testing",
        points: [
            "High-fidelity UI design in Figma with Figma Make and Auto Layout for rapid exploration.",
            "Custom visual language, typography system, and color tokens.",
            "Motion and micro-interaction direction using Lottie and Spline."
        ]
    },
    {
        id: 4,
        isSpecial: true
    }
];

const ProcessSection = () => {
    return (
        <section className="bg-[#FAF9F4]">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="space-y-6 md:space-y-12">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:justify-between">
                            <div className="space-y-2 md:space-y-4">
                                <p className="text-[#18181B] text-sm">Process</p>
                                <h2 className="text-2xl md:text-4xl whitespace-nowrap font-semibold leading-7 md:leading-11 text-[#27272A] tracking-[-0.72px]">Our UI/UX Design Process</h2>
                            </div>
                            <p className="text-sm md:text-base text-[#52525B] w-full leading-5 md:w-[630px]">Every UI UX design engagement follows a clear five-phase sprint. Timelines typically run 4 to 12 weeks based on product complexity.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            {processCards.map((card, index) => (
                                card.id === 4 ? (
                                    // Special card with image
                                    <div
                                        key={card.id}
                                        className="bg-[#0B0B0B] rounded-b-[14px] md:rounded-b-none md:rounded-r-[14px] flex flex-col"
                                    >
                                        <Image
                                            src={processImg}
                                            alt="process"
                                            width={338}
                                            height={193}
                                            className="w-[358px] md:w-[338px] h-[201px] md:[193px]"
                                        />
                                        <div className=" flex flex-col gap-6 md:gap-8 p-5">
                                            <div className="flex flex-col gap-2.5">
                                                <h3 className="text-[#FFF] text-xl font-semibold leading-7">
                                                    Want this process for your product?
                                                </h3>
                                                <p className="text-[#E4E4E7] text-sm">
                                                    Tell us about your project and get a tailored design roadmap within 24 hours.
                                                </p>
                                            </div>
                                            <Button
                                                href="/start-project"
                                                text="Start Your Project"
                                                textClassName="!text-black"
                                                iconClassName="!text-black"
                                                className="w-full md:w-fit flex items-center justify-center !bg-[#FFF] hover:!bg-[#F3FE00] w-fit hover:!border hover:!border-[#F3FE00]"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    // Regular cards
                                    <div
                                        key={card.id}
                                        className={`bg-[#FFF] hover:bg-[#F4F2E8] border border-[#CDCDCD] p-6 flex flex-col gap-8 md:justify-between 
                                        ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-l-[14px]" : ""}
                                        ${index !== 2 ? "border-b-0 md:border-b md:border-r-0" : "md:border-r-0"}
                                        `}
                                    >
                                        <div className="text-4xl">
                                            {card.icon}
                                        </div>
                                        <div className="flex flex-col gap-3 md:gap-6">
                                            <h3 className="text-[#27272A] text-base md:text-xl font-semibold leading-6 md:leading-7">
                                                {card.title}
                                            </h3>
                                            <ul className="space-y-2">
                                                {card.points?.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="flex-shrink-0 mt-0.5">
                                                            <StarIcon />
                                                        </span>
                                                        <span className="text-[#52525B] text-sm leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;