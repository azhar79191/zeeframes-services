import { DesignIcon, FLowIcon, PrototypeIcon, ResearchIcon, StarIcon, TestingIcon } from "@/src/assets/icons";
import Button from "@/src/components/button";
import glassknot from "@/src/assets/images/glass-knot.png"
import Image from "next/image";
import bgzee from "@/src/assets/images/bg-zee.png"
const reasons = [
    {
        id: 1,
        icon: <DesignIcon />,
        title: "Senior Design Engineers",
        description: "Work with Fortune 500-caliber designers delivering shipgrade specs through engineering fluency."
    },
    {
        id: 2,
        icon: <FLowIcon />,
        title: "AI-Native Workflow",
        description: "Figma Make, Google Stitch, Lovable, and LLM synthesis are part of our daily design practice."
    },
    {
        id: 3,
        icon: <PrototypeIcon />,
        title: "Domain Experts",
        description: "Senior UX designers with real EdTech and education product experience."
    },
    {
        id: 4,
        icon: <ResearchIcon />,
        title: "AI-certified",
        description: "Hands-on with AI tools and workflows — used to accelerate, not replace."
    },
    {
        id: 5,
        icon: <TestingIcon />,
        title: "Trusted by Global Brands",
        description: "Walmart, Cisco, Nissan, Trainee, and fast-growing startups worldwide trust our design craft."
    },
    {
        id: 6,
        icon: <StarIcon />,
        title: "Award-Winning Craft",
        description: "Rated on Clutch, Trustpilot, GoodFirms, and Dribble. Winner at the Tech Behemoths UX/UI Design Awards 2025."
    }
];

const WhyZeeframe = () => {
    return (
        <section className="bg-[#0B0B0B]">
            <div className="container">
                <div className="py-6 md:py-16">
                    <div className="flex flex-col gap-6 md:gap-12 py-6 md:py-15 px-4 md:px-8 rounded-[14px]" style={{ background: 'linear-gradient(180deg, #151515 0%, #0B0B0B 100%)' }}>
                        {/* Header */}
                        <div className="flex flex-col md:flex-row flex-start md:items-center gap-3 md:justify-between">
                            <div className="space-y-2 md:space-y-4">
                                <p className="text-[#F3FE00] text-sm">Why Zeeframes</p>
                                <h2 className="text-2xl md:text-4xl font-semibold leading-8 md:leading-11 text-[#FFF] w-full md:w-[517px]">Why Choose Zeeframes as Your UI/UX Design Agency</h2>
                            </div>
                            <p className="text-sm md:text-base text-[#D4D4D8] w-full md:w-[630px]">Hundreds of agencies can design a screen. Here's what makes us a different kind of design partner:</p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {reasons.map((reason, index) => (
                                <div
                                    key={reason.id}
                                    className={`border border-[#373737] hover:border-[rgba(255,255,255,0.16)] p-6 flex flex-col gap-8 md:gap-16 relative overflow-hidden group transition-colors 
                                    ${index === 0 ? "rounded-t-[14px] md:rounded-t-none md:rounded-tl-[14px]" : ""}
                                    ${index === 2 ? "md:rounded-tr-[14px]" : ""}
                                    ${index === 3 ? "md:rounded-bl-[14px]" : ""}
                                    ${index === 5 ? "rounded-b-[14px] md:rounded-b-none md:rounded-br-[14px]" : ""}
                                    ${index !== 5 ? "border-b-0 md:border-b" : ""}
                                    ${index === 0 || index === 1 || index === 3 || index === 4 ? "md:border-r-0" : ""}
                                    ${index === 0 || index === 1 || index === 2 ? "md:border-b-0" : ""}
                                    `}
                                    style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)' }}
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none" />
                                    
                                    <div className="text-4xl relative z-10">
                                        {reason.icon}
                                    </div>
                                    <div className="flex flex-col gap-3 relative z-10">
                                        <h3 className="text-[#FFF] text-base md:text-lg font-semibold leading-6 md:leading-7">
                                            {reason.title}
                                        </h3>
                                        <p className="text-[#D4D4D8] text-sm leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mx-0 md:mx-8 p-6 md:px-16 md:py-15 flex flex-col md:flex-row items-center gap-6 md:justify-between relative rounded-[14px] overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={bgzee}
                                alt="bg"
                                fill
                                className="object-cover"
                            />
                        </div>
                    

                        <div className="space-y-8 relative z-10">
                            <div className="space-y-3">
                                <h3 className="text-4xl md:text-5xl font-semibold leading-11 md:leading-15 text-[#27272A] -tracking-[0.96px]">See how we've helped others win</h3>
                                <p className="text-sm md:text-lg text-[#27272A]">Browse our portfolio of successfully shipped products across SaaS, mobile, and enterprise platforms crafted with a focus on usability, innovation, and business growth.</p>
                            </div>
                            <Button
                            text="View Our Work"
                            href='/'
                            textClassName="text-base font-semibold text-[#FFF]"
                            iconClassName="text-white"
                            className="bg-[#000] w-full md:w-fit flex items-center justify-center border-0"
                            />
                        </div>
                        <div className="relative z-10">
                            <Image
                            src={glassknot}
                            alt="glass_thumnail"
                            width={264}
                            height={226}
                            className="w-[200px] md:w-[264px] h-[184px] md:h-[226px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhyZeeframe