import { ArrowButton } from "@/src/assets/icons";
import Image from "next/image";
import Link from "next/link";
import insight1 from "../../assets/images/img1.png";
import insight2 from "../../assets/images/image.png";
import insight3 from "../../assets/images/img3.png";
import Button from "@/src/components/button";

const insights = [
    {
        id: 1,
        image: insight1,
        title: "20+ GenAI UX patterns, examples and implementation tactics",
        description: "A shared language for product teams to build usable, intelligent product experiences.",
        readTime: "7 min read",
        date: "Jan 23, 2025",
        slug: "genai-ux-patterns"
    },
    {
        id: 2,
        image: insight2,
        title: "Skipping Figma, human after all, Figma grid, accessibility as an afterthought",
        description: "Weekly curated resources for designers — thinkers and makers.",
        readTime: "7 min read",
        date: "Jan 23, 2025",
        slug: "weekly-design-resources"
    },
    {
        id: 3,
        image: insight3,
        title: "Is your creative character being sacrificed to Algorithm, Inc.?",
        description: "AI is changing how we work. Here's why and how we must preserve the human spirit that drives...",
        readTime: "7 min read",
        date: "Jan 23, 2025",
        slug: "creative-character-ai"
    }
];

const InsightsSection = () => {
    return (
        <section className="bg-[#FAF9F4]">
            <div className="container">
                <div className="py-6 md:py-20">
                    <div className="space-y-6 md:space-y-12">
                        {/* Header */}
                        <header className="flex flex-col md:flex-row items-start md:items-center gap-3 md:justify-between">
                            <div className="space-y-4">
                                <p className="text-[#18181B] text-sm">Our Insights</p>
                                <h2 className="text-[#27272A] text-2xl md:text-4xl font-semibold leading-8 md:leading-11 -tracking-[0.72px]">
                                    Insights That Inspire Vision Forward
                                </h2>
                            </div>
                           <Button
                           text="Explore More"
                           className="bg-[#000] border-0 w-full md:w-fit flex items-center justify-center"
                           textClassName="text-[#FFF] text-base font-medium"
                           iconClassName="text-[#FFF]"
                           />
                        </header>

                        {/* Insights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {insights.map((insight) => (
                                <article 
                                    key={insight.id}
                                    className=" group"
                                >
                                    <Link href={`/insights/${insight.slug}`} className="block">
                                        {/* Image */}
                                        <div className="relative w-full h-[227px] rounded-t-[12px] overflow-hidden">
                                            <Image
                                                src={insight.image}
                                                alt={insight.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 bg-[#FFF] hover:bg-[#F4F2E8] flex flex-col gap-5 border border-t-0 rounded-b-[14px] border-[#E4E4E7]">
                                            <div className="space-y-2 md:space-y-4">
                                                <h3 className="text-[#0B0B0B] text-xl font-medium md:font-semibold leading-7.5">
                                                    {insight.title}
                                                </h3>
                                                <p className="text-[#3F3F46] text-sm md:text-base line-clamp-2">
                                                    {insight.description}
                                                </p>
                                            </div>

                                            {/* Meta */}
                                            <div className="flex items-center gap-2 text-[#71717A] text-sm text-[#52525B]">
                                                <time dateTime={insight.date}>{insight.readTime}</time>
                                                <span>•</span>
                                                <time dateTime={insight.date}>{insight.date}</time>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;
