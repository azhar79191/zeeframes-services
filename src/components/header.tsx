"use client";

import Image from "next/image"
import logo from "../assets/images/logo.webp"
import Link from "next/link"
import Button from "./button"
import { useState } from "react"
import { ToggleIcon } from "../assets/icons";

const navlinks = [
    {
        id: 1,
        text: "Home",
        link: "/"
    },
    {
        id: 2,
        text: "About",
        link: "/about"
    },
    {
        id: 3,
        text: "Services",
        link: "/services"
    },
    {
        id: 4,
        text: "Portfolio",
        link: "/portfolio"
    },
    {
        id: 5,
        text: "Industries",
        link: "industries"
    },
    {
        id: 6,
        text: "Blogs",
        link: "blogs"
    }
]

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-[#0D0D0D] sticky top-0 z-50">
            <div className="container">
                <nav className="flex items-center px-2 md:px-10 py-5 md:py-9 justify-between">
                    {/* Logo */}
                    <Link href='/'>
                        <Image
                            src={logo}
                            alt="logo"
                            width={129}
                            height={22}
                            style={{ width: "auto", height: "auto" }}
                            className="w-[115px] md:w-[129px]"
                        />
                    </Link>
                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center">
                        {navlinks.map((item, index) => (
                            <li key={index} className="px-4">
                                <Link href={item.link} className="text-sm leading-5 text-[#FFFFFF] hover:text-[#F3FE00] transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:block">
                        <Button text="Work with Us" href='/' />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden cursor-pointer flex flex-col gap-1.5 w-6 h-6 justify-center items-center z-50"
                        aria-label="Toggle menu"
                    >
                        <ToggleIcon />

                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden fixed inset-0 bg-[#0D0D0D] z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                        <ul className="flex flex-col items-center gap-6">
                            {navlinks.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.link}
                                        className="text-2xl leading-8 text-[#FFFFFF] hover:text-[#F3FE00] transition-colors"
                                        onClick={toggleMobileMenu}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Button text="Work with Us" href='/' />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;