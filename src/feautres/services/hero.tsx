import { ArrowButton, ArrowLeft, HomeIcon } from "@/src/assets/icons";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../assets/images/iso.webp";
import logo2 from "../../assets/images/top_clutch.webp";
import logo3 from "../../assets/images/goodfirm.webp";
import logo4 from "../../assets/images/winner.webp";
import heroImg from "../../assets/images/hero_img.webp";
import heroBg from "../../assets/images/hero-bg.webp";
import heroBackground from "../../assets/images/hero.webp";
import Button from "@/src/components/button";
import partnerData from "@/src/data/hero.json";

const partnerImages = [logo1, logo2, logo3, logo4];

const HeroSection = () => {
    return (
        <section className="bg-[#030303] relative">
            <div className="absolute inset-0 z-0">
                <Image src={heroBackground} alt="hero section background" fill className="object-cover" />
            </div>

            <div className="container relative z-10">
                <div className="relative py-6 md:pt-15 md:pb-20">
                    <Image
                        src={heroBg}
                        alt="hero background"
                        width={431}
                        height={429}
                        className="absolute hidden md:block right-1.5 top-0 z-0"
                        style={{ width: "auto", height: "auto" }}
                    />
                    <div className="flex flex-col gap-8 relative z-10">
                        <div className="hidden md:flex items-center gap-[2.5px] mt-0 md:mt-8.5">
                            <HomeIcon />
                            <span className="text-sm font-medium text-[#9CA3AF]">Home</span>
                            <ArrowLeft />
                            <span className="text-sm font-medium text-[#9CA3AF]">Services</span>
                            <ArrowLeft />
                            <span className="text-sm font-medium text-[#FFF]">UI/UX Design</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex flex-col gap-6 md:gap-8">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-4xl md:text-5xl font-tight leading-11 md:leading-15 font-semibold text-[#FFF]">UI UX Design Agency</h1>
                                    <p className="w-full md:w-[623px] text-[#D4D4D8] text-sm md:text-base">ZeeFrames is a UI/UX design agency crafting intuitive, high-converting digital products with research-driven UX, polished UI, and AI-powered speed.</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <p className="text-xs md:text-sm font-medium text-[#FFF]">TRUSTED. CERTIFIED. PROVEN.</p>
                                    <ul className="flex items-center gap-5">
                                        {partnerData.map((item, index) => (
                                            <li key={item.id}>
                                                <Link href="/">
                                                    <Image
                                                        src={partnerImages[index]}
                                                        alt={item.alt}
                                                        width={item.width}
                                                        height={item.height}
                                                        style={{ width: "auto", height: "auto" }}
                                                    />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[rgba(255,255,255,0.12)] bg-[rgba(56,56,56,0.35)] backdrop-blur-[6px] rounded-2xl mt-8 md:mt-13.5">
                                <Image
                                    src={heroImg}
                                    alt="hero image"
                                    width={163}
                                    height={168}
                                    className="rounded-sm w-[326px] md:w-[163px] h-[160px] md:h-[168px]"
                                />
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2 w-full md:w-[223px]">
                                        <p className="text-base md:text-lg font-medium leading-6 md:leading-7 text-[#FFF]">Ready to build a product users love?</p>
                                        <p className="text-sm text-[#D4D4D8]">Book a free 30-minute discovery call with a senior UI UX designer.</p>
                                    </div>
                                    <Button
                                        href="/"
                                        text="Schedule Your Free Call"
                                        textClassName="!text-black transition-colors duration-300 group-hover:!text-[#F3FE00]"
                                        iconClassName="!text-black transition-colors duration-300 group-hover:!text-[#F3FE00]"
                                        className="w-full md:w-fit flex justify-center items-center group bg-[#F3FE00] !border !border-[#F3FE00] hover:!bg-transparent hover:!border-[#F3FE00] transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
