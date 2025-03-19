import React from 'react'
import Inner from './animationLayout/Inner'
import Resume from "../assets/Ashray_Resume_02.pdf"

import { Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom"; // Using React Router for navigation

function Home() {
    const handleDownloadResume = () => {
       window.open(Resume)
    };

    return (
        <Inner>
            <main className="px-8 py-24 max-w-6xl mx-auto relative">
                <Sparkles className="absolute top-12 right-0 text-customPurple" size={32} />

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="text-customPurple">Hi, I'm Ashray,</span>
                    <br />
                    <div className="flex items-center gap-4 mt-4">
                        A Full Stack Web Developer.
                        <div className="w-16 h-16 rounded-full bg-customPurple flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-colors" >
                            <Link to='/projects'>
                                <ArrowUpRight size={24} className="text-white" />
                            </Link>
                        </div>
                    </div>
                </h1>

                <p className="text-xl text-gray-800 max-w-2xl mt-8">
                    – I am an MCA graduate with a passion for web development. I specialize in building fast, responsive, and accessible websites using modern technologies.
                </p>
                <div className='flex gap-2'>
                    <Link
                        to="/contact"
                        className="inline-block mt-12 px-8 py-4 bg-customPurple text-white rounded-lg font-medium hover:bg-purple-500 transition-colors"
                    >
                        Let's Talk
                    </Link>
                    <button
                        onClick={handleDownloadResume}
                        className="inline-block mt-12 px-8 py-4 bg-customDarkGreen text-black rounded-lg font-medium hover:bg-customGreen transition-colors"
                    >
                        Resume
                    </button>
                </div>
            </main>
        </Inner>
    )
}

export default Home