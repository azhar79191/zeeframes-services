import Image from "next/image";
import Link from "next/link";
import insight1 from "../../assets/images/img1.webp";
import insight2 from "../../assets/images/image.webp";
import insight3 from "../../assets/images/img3.webp";
import Button from "@/src/components/button";
import insightsData from "@/src/data/insights.json";
import SectionHeading from "@/src/components/SectionHeading";
import { StaticImageData } from "next/image";

const imageMap: Record<string, StaticImageData> = {
    insight1,
    insight2,
    insight3,
};

const InsightsSection = () => {
    return (
        <section className="bg-[#FAF9F4]">
            <div className="container">
                <div className="py-6 md:py-20">
                    <div className="space-y-6 md:space-y-12">
                        <SectionHeading
                            label="Our Insights"
                            labelClassName="text-[#18181B]"
                            heading="Insights That Inspire Vision Forward"
                            headingClassName="text-[#27272A]"
                            right={
                                <Button
                                    text="Explore More"
                                    className="group bg-black hover:bg-[#FFF] border-0 hover:border hover:border-black w-full md:w-fit flex items-center justify-center"
                                    textClassName="text-[#FFF] group-hover:text-[#000] text-base font-medium"
                                    iconClassName="text-[#FFF] group-hover:text-[#000]"
                                />
                            }
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {insightsData.map((insight) => (
                                <article key={insight.id} className="group">
                                    <Link href={`/insights/${insight.slug}`} className="block">
                                        <div className="relative w-full h-56.75 rounded-t-xl overflow-hidden">
                                            <Image src={imageMap[insight.imageKey]} alt={insight.title} fill className="object-cover" />
                                        </div>
                                        <div className="p-6 bg-[#FFF] hover:bg-[#F4F2E8] flex flex-col gap-5 border border-t-0 rounded-b-[14px] border-[#E4E4E7]">
                                            <div className="space-y-2 md:space-y-4">
                                                <h3 className="text-[#0B0B0B] text-xl font-tight font-medium md:font-semibold leading-7.5">{insight.title}</h3>
                                                <p className="text-[#3F3F46] text-sm md:text-base line-clamp-2">{insight.description}</p>
                                            </div>
                                            <div className="flex items-center gap-2  text-sm text-[#52525B]">
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
