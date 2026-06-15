"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { z } from "zod";
import FormInput from "@/src/components/forminput";
import Button from "@/src/components/button";
import { ClutchIcon, QuoteIcon, NavLeft, NavRightIcon } from "@/src/assets/icons";
import di from "@/src/assets/images/di.webp";
import contactData from "@/src/data/contact.json";
import { StaticImageData } from "next/image";

const avatarMap: Record<string, StaticImageData> = { di };

const contactSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email:    z.string().email("Please enter a valid email address"),
    phone:    z.string().min(10, "Please enter a valid phone number"),
    country:  z.string().optional(),
    message:  z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [formData, setFormData] = useState<ContactFormData>({ fullName: "", email: "", phone: "", country: "", message: "" });
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % contactData.testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof ContactFormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});
        try {
            contactSchema.parse(formData);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitSuccess(true);
            setFormData({ fullName: "", email: "", phone: "", country: "", message: "" });
            setTimeout(() => setSubmitSuccess(false), 3000);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
                error.issues.forEach((issue) => {
                    if (issue.path[0]) fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
                });
                setErrors(fieldErrors);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const active = contactData.testimonials[currentTestimonial];

    return (
        <section className="bg-[#FAF9F4]">
            <div className="container">
                <div className="py-6 md:py-15">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Testimonials */}
                        <div className="p-6 md:px-10 md:py-15 w-full md:max-w-[542px] h-[550px] md:h-[780px] flex flex-col justify-between bg-[#FFF] rounded-b-[14px] md:rounded-b-none md:rounded-l-[14px] order-2 md:order-1">
                            <div className="space-y-6 md:space-y-15">
                                <p className="text-[#27272A] text-xl font-tight md:text-2xl font-semibold leading-7.5 md:leading-8">What Our Customers Say</p>
                                <div className="space-y-4">
                                    <QuoteIcon />
                                    <p className="text-[#27272A] text-sm md:text-base leading-7">{active.quote}</p>
                                </div>
                            </div>
                            <div className="space-y-7.5 md:space-y-9 mt-6 md:mt-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={avatarMap[active.avatarKey]}
                                            alt={active.author}
                                            width={52}
                                            height={52}
                                            className="rounded-full border border-[#454545]"
                                            style={{ width: "auto", height: "auto" }}
                                        />
                                        <div className="space-y-1">
                                            <p className="text-[#000] text-sm md:text-base font-semibold md:font-medium">{active.author}</p>
                                            <p className="text-[#000] text-xs md:text-sm">{active.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0"><ClutchIcon /></div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5 md:gap-3">
                                        <button
                                            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + contactData.testimonials.length) % contactData.testimonials.length)}
                                            className="p-3.5 rounded-full cursor-pointer hover:bg-[#000] border border-[#2D2D2D] hover:border-[#A1A1AA] flex items-center justify-center transition-colors"
                                            aria-label="Previous testimonial"
                                        >
                                            <NavLeft />
                                        </button>
                                        <button
                                            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % contactData.testimonials.length)}
                                            className="p-3.5 rounded-full cursor-pointer hover:bg-[#000] border border-[#2D2D2D] hover:border-[#A1A1AA] flex items-center justify-center transition-colors"
                                            aria-label="Next testimonial"
                                        >
                                            <NavRightIcon />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-1.25 ml-5">
                                        {contactData.testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentTestimonial(index)}
                                                className={`h-1.5 rounded-full cursor-pointer transition-all ${index === currentTestimonial ? "w-15 bg-[#A1A1AA]" : "w-1.5 bg-[#D9D9D9]"}`}
                                                aria-label={`Go to testimonial ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[#000] rounded-t-[14px] md:rounded-t-none md:rounded-r-[14px] p-6 md:p-15 w-full  h-auto md:h-[780px] flex flex-col order-1 md:order-2">
                            <form onSubmit={handleSubmit} className="flex flex-col h-full">
                                <div className="space-y-2 md:space-y-4">
                                    <p className="text-[#F3FE00] text-sm">Contact Us</p>
                                    <h2 className="text-[#FFF] text-2xl font-tight pt-2 w-full md:max-w-[510px] md:pt-0 md:text-4xl font-semibold leading-8 md:leading-11 -tracking-[0.72px]">Lets work on what you care about!</h2>
                                    <p className="text-[#D4D4D8] text-sm md:text-base font-medium pt-1">Got a project in mind? From a full UI/UX refresh to a brand-new digital experience, we're ready to help. Let's turn your vision into reality.</p>
                                </div>

                                <div className="grid grid-cols-2 gap-12 mt-6 md:mt-15">
                                    {contactData.formFields.map((field) => (
                                        <div key={field.name}>
                                            <FormInput
                                                label={field.label}
                                                name={field.name}
                                                type={field.type}
                                                value={formData[field.name as keyof ContactFormData] as string}
                                                onChange={handleChange}
                                                error={errors[field.name as keyof ContactFormData]}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12">
                                    <FormInput
                                        label="Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={errors.message}
                                        isTextarea={true}
                                        rows={1}
                                    />
                                </div>

                                <div className="mt-10 md:mt-auto">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-transparent border-[1.5px] border-[#F3FE00] hover:border-0 cursor-pointer text-[#FFF] rounded-full py-3.5 px-5.5 text-base font-semibold hover:bg-gradient-to-r hover:from-[#F3FE00] hover:to-[#33DE1D] hover:text-[#0B0B0B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                                    </button>
                                    {submitSuccess && (
                                        <div className="text-center text-[#F3FE00] text-sm mt-4">
                                            Thank you! We'll get back to you soon.
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
