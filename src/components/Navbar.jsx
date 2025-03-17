import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Linkedin, Github, Mail, AlignJustify, ChevronsDownUp } from "lucide-react";
import Image from '../assets/portfolioImage-removebg-preview.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="z-50 flex justify-between items-center p-4 md:p-8">
            {/* Logo Section */}
            <div className="flex items-center ">
                <div className="w-20 h-20  rounded-md">
                    <img src={Image} alt="" />
                </div>

            </div>

            {/* Desktop Navigation */}
            <nav className="hidden text-gray-800 font-medium md:flex space-x-6">
                {["Home", "Projects", "About", "Services", "Contact"].map((item, index) => (
                    <NavLink
                        key={index}
                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className={({ isActive }) =>
                            isActive
                                ? "text-purple-900 underline underline-offset-2"
                                : "hover:text-purple-600 hover:underline hover:underline-offset-2"
                        }
                    >
                        {item}
                    </NavLink>
                ))}
            </nav>

            {/* Social Icons (Only Visible on Medium and Larger Screens) */}
            <div className="hidden md:flex space-x-4">
                <Linkedin
                    className="w-6 h-6 hover:text-purple-600 cursor-pointer"
                    onClick={() => window.open("https://www.linkedin.com/in/ashraycp/", "_blank")}
                />
                <Github
                    className="w-6 h-6 hover:text-purple-600 cursor-pointer"
                    onClick={() => window.open("https://github.com/ashrayachu", "_blank")}
                />
                <Mail
                    className="w-6 h-6 hover:text-purple-600 cursor-pointer"
                    onClick={() => (window.location.href = "mailto:ashraycp07@gmail.com")}
                />
            </div>

            {/* Mobile Menu Button */}
            <div className="relative md:hidden">
                {!isOpen ? (
                    <AlignJustify className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(true)} />
                ) : (
                    <div className="fixed inset-0 w-full h-screen bg-customPurple flex flex-col items-center justify-center z-50 transition-all">
                        {/* Close Button */}
                        <ChevronsDownUp className="w-8 h-8 absolute text-white top-6 right-6 cursor-pointer" onClick={() => setIsOpen(false)} />

                        {/* Mobile Navigation Links */}
                        <nav className="flex flex-col space-y-6 text-white text-lg font-semibold">
                            {["Home", "Projects", "About", "Services", "Contact"].map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="hover:text-gray-300 transition"
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    {item}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Social Links for Mobile */}
                        <div className="flex space-x-6 mt-6">
                            <Linkedin
                                className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer"
                                onClick={() => window.open("https://www.linkedin.com/in/ashraycp/", "_blank")}
                            />
                            <Github
                                className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer"
                                onClick={() => window.open("https://github.com/ashrayachu", "_blank")}
                            />
                            <Mail
                                className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer"
                                onClick={() => (window.location.href = "mailto:ashraycp07@gmail.com")}
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;
