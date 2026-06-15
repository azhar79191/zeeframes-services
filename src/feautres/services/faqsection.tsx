"use client";

import { MinusIcon, PlusIcon } from "@/src/assets/icons";
import { useState } from "react";
import faqData from "@/src/data/faq.json";
import SectionHeading from "@/src/components/SectionHeading";

const FaqSection = () => {
    const [openId, setOpenId] = useState<number | null>(1);

    return (
        <section className="bg-[#FAF9F4]">
            <div className="container">
                <div className="px-0 md:px-55 py-6 md:py-20">
                    <div className="space-y-6 md:space-y-12">
                        <SectionHeading
                            label="Questions"
                            labelClassName="text-[#18181B]"
                            heading="Frequently Asked Questions"
                            headingClassName="text-[#27272A]"
                        />

                        <div className="flex flex-col">
                            {faqData.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className={`bg-[#FFF] border border-[#E4E4E7] ${
                                        index === 0 ? "rounded-t-[14px] border-b-0" :
                                        index === faqData.length - 1 ? "rounded-b-[14px]" :
                                        "border-b-0"
                                    }`}
                                >
                                    <button
                                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                        className="w-full p-6 flex items-center justify-between text-left"
                                    >
                                        <h3 className="text-[#27272A] font-tight text-base md:text-lg font-semibold leading-6 md:leading-7">
                                            {faq.question}
                                        </h3>
                                        <span className="text-2xl text-[#27272A] flex-shrink-0 ml-2 md:ml-4">
                                            {openId === faq.id ? <MinusIcon /> : <PlusIcon />}
                                        </span>
                                    </button>
                                    {openId === faq.id && (
                                        <div className="px-6 pb-6 pt-2">
                                            <p className="text-[#3F3F46] text-sm leading-normal">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
