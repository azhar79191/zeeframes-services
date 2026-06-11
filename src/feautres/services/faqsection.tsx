"use client";

import { MinusIcon, PlusIcon } from "@/src/assets/icons";
import { useState } from "react";

const faqs = [
    {
        id: 1,
        question: "What does a UI UX design agency do?",
        answer: "A UI UX design agency researches users, designs interfaces, and prototypes experiences for digital products — turning business ideas into usable, scalable, on-brand software."
    },
    {
        id: 2,
        question: "How much does it cost to hire a UI UX design agency?",
        answer: "Project costs typically range from $15,000 to $150,000+ depending on scope, complexity, and timeline. We offer fixed-price projects for defined deliverables and monthly retainers for ongoing design support."
    },
    {
        id: 3,
        question: "How long does a typical UI UX design project take?",
        answer: "Most UI UX design projects run between 4 to 12 weeks. Simple MVP designs can be completed in 3-4 weeks, while complex enterprise products may take 3-6 months depending on research depth and iteration cycles."
    },
    {
        id: 4,
        question: "Do you design for mobile apps or only web products?",
        answer: "We design for both mobile apps (iOS and Android) and web products (responsive websites, web apps, SaaS platforms). Our team has experience across native mobile, progressive web apps, and cross-platform solutions."
    },
    {
        id: 5,
        question: "Do you build design systems?",
        answer: "Yes, we build comprehensive design systems with tokenized components, documentation, and governance guidelines. We use tools like Figma, design tokens, and component libraries to ensure consistency across your product ecosystem."
    },
    {
        id: 6,
        question: "Can you work with our existing development team?",
        answer: "Absolutely. We collaborate seamlessly with in-house development teams through developer handoffs, design QA reviews, and ongoing support. We provide inspection-ready Figma files, redlines, and technical specifications."
    },
    {
        id: 7,
        question: "How do you use AI in your UI UX design process?",
        answer: "We integrate AI tools like Figma Make, Google Stitch, Lovable, and LLM synthesis into our workflow to accelerate research analysis, wireframe generation, and content creation — while maintaining human oversight for strategic decisions and craft quality."
    },
    {
        id: 8,
        question: "Do you offer UI UX design as a one-time project or ongoing retainer?",
        answer: "Both. We offer fixed-scope projects for defined deliverables like MVP design or redesigns, and monthly retainers for ongoing product evolution, A/B testing, design system maintenance, and continuous improvement."
    }
];

const FaqSection = () => {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-[#FAF9F4]">
            <div className="container">
                <div className="px-0 md:px-55 py-6 md:py-20">
                    <div className="space-y-6 md:space-y-12">
                        {/* Header */}
                        <div className="space-y-2 md:space-y-4">
                            <p className="text-[#18181B] text-sm">Questions</p>
                            <h2 className="text-[#27272A] text-2xl md:text-4xl font-semibold leading-8 md:leading-11 -tracking-[0.72px]">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        {/* FAQ List */}
                        <div className="flex flex-col">
                            {faqs.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className={`bg-[#FFF] border border-[#E4E4E7] ${
                                        index === 0 ? "rounded-t-[14px] border-b-0" :
                                        index === faqs.length - 1 ? "rounded-b-[14px]" :
                                        "border-b-0"
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="w-full p-6 flex items-center justify-between text-left"
                                    >
                                        <h3 className="text-[#27272A] text-base md:text-lg font-semibold
                                        leading-6 md:leading-7">
                                            {faq.question}
                                        </h3>
                                        <span className="text-2xl text-[#27272A] flex-shrink-0 ml-2 md:ml-4">
                                            {openId === faq.id ? <MinusIcon/> : <PlusIcon/>}
                                        </span>
                                    </button>
                                    {openId === faq.id && faq.answer && (
                                        <div className="px-6 pb-6 pt-2">
                                            <p className="text-[#3F3F46] text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
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