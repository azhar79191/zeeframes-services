import Image from "next/image";
import Link from "next/link";
import footerlogo from '../assets/images/f_logo.webp'
import logo1 from "../assets/images/iso.webp"
import logo2 from '../assets/images/top_clutch.webp'
import logo3 from "../assets/images/goodfirm.webp"
import logo4 from "../assets/images/winner.webp"
import bgFooter from '../assets/images/bg-footer.webp'
import { BeIcon, Facebook, Insta, Internet, Linkden, YouTube } from "../assets/icons";

const partener = [
    { id: 1, img: logo1, alt: "ISO certification", width: 62, height: 62 },
    { id: 2, img: logo2, alt: "Top Clutch award", width: 57, height: 62 },
    { id: 3, img: logo3, alt: "GoodFirms recognition", width: 79, height: 54 },
    { id: 4, img: logo4, alt: "Winner award", width: 90, height: 60 },
]

const navigation = [
    {
        id: 1,
        title: "Company",
        links: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Work", href: "/work" },
            { name: "Insights", href: "/insights" }
        ]
    },
    {
        id: 2,
        title: "Services",
        links: [
            { name: "UX UI Design", href: "/services/ux-ui-design" },
            { name: "UX Research", href: "/services/ux-research" },
            { name: "Design System", href: "/services/design-system" },
            { name: "Web App Design", href: "/services/web-app-design" },
            { name: "Mobile App Design", href: "/services/mobile-app-design" }
        ]
    },
    {
        id: 3,
        title: "Industries",
        links: [
            { name: "Technology", href: "/industries/technology" },
            { name: "Education", href: "/industries/education" },
            { name: "Fintech", href: "/industries/fintech" },
            { name: "Crypto", href: "/industries/crypto" },
            { name: "Healthcare", href: "/industries/healthcare" },
            { name: "Real Estate", href: "/industries/real-estate" }
        ]
    }
]

const socialLinks = [
    { id: 1, svg: <Internet />, link: "www.google.com", label: "Visit our website" },
    { id: 2, svg: <BeIcon />, link: "www.be.com", label: "View our Behance portfolio" },
    { id: 3, svg: <YouTube />, link: "www.youtube.com", label: "Watch us on YouTube" },
    { id: 4, svg: <Facebook />, link: "www.facebook.com", label: "Follow us on Facebook" },
    { id: 5, svg: <Linkden />, link: "www.linkden.com", label: "Connect on LinkedIn" },
    { id: 6, svg: <Insta />, link: "www.instagram.com", label: "Follow us on Instagram" },
]

const Footer = () => {
    return (
        <footer className="px-0 md:px-10 py-6 md:py-16 bg-[#0B0B0B] relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgFooter}
                    alt="footer background"
                    fill
                    className="object-cover opacity-20"
                />
            </div>

            <div className="container relative z-10">
                <div className="flex flex-col gap-10 md:gap-18">
                    <Link href='/' aria-label="Zeeframes home">
                        <Image
                            src={footerlogo}
                            alt="logo"
                            width={1240}
                            height={180}
                            className="w-[327px] h-[47px] md:w-[1240px] md:h-[180px]"
                        />
                    </Link>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-25">
                        <div className="flex flex-col gap-8">
                            <p className="text-[#D5D5D5] text-lg leading-6.75 w-full md:w-[393px]">We transform ideas into user-centered digital experiences for businesses worldwide, from Fortune 500s to startups, using Figma, Webflow, and no-code solutions.</p>
                            <ul className="hidden md:flex items-center gap-5">
                                {partener.map((item, index) => (
                                    <li key={index}>
                                        <Link href="/" aria-label={`${item.alt} - view certification`}>
                                            <Image
                                                src={item.img}
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

                        {/* Three Column Grid for Company, Services, and Industries */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 w-full">
                            {navigation.map((section) => (
                                <div key={section.id} className="flex flex-col gap-5 w-full md:w-[216px]">
                                    <h3 className="text-[#FFFFFF] text-base leading-5 font-semibold">{section.title}</h3>
                                    <ul className="flex flex-col gap-3.5">
                                        {section.links.map((link, index) => (
                                            <li key={index}>
                                                <Link href={link.href} aria-label={`${link.name} - ${section.title}`} className="text-[#D4D4D8] text-sm">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <ul className="flex md:hidden items-center -mt-0.5 gap-5">
                            {partener.map((item, index) => (
                                <li key={index}>
                                    <Link href="/" aria-label={`${item.alt} - view certification`}>
                                        <Image
                                            src={item.img}
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
                    <div className="flex flex-col md:flex-row items-center gap-5 md:justify-between">
                        <p className="text-sm text-[#8F8F8F] hidden md:block">© 2026 Copyright ZeeFrames Private Limited. All rights reserved.</p>
                        <p className="text-sm text-[#8F8F8F] block md:hidden">© ZeeFrames (Private) Limited. All Rights Reserved.</p>
                        <p className="text-sm text-[#8F8F8F]">Privacy Policy</p>
                        <ul className="flex justify-between md:gap-4 items-center">
                            {socialLinks.map((item, index) => (
                                <li key={index} className="p-2">
                                    <Link href={item.link} aria-label={item.label}>
                                        {item.svg}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
