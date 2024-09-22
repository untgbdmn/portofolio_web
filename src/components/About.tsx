"use client"
import React, { useState } from "react";
import HyperText from './magicui/hyper-text'
import {motion} from 'framer-motion'
import Bio from "./layouts/Bio";
import Education from "./layouts/Education";
import Experience from "./layouts/Experience";

export default function About() {
    const [activeTab, setActiveTab] = useState(0);

    const data = [
        {
            title: "About Me",
            content: (
                <div key={1}>
                    <Bio />
                </div>
            )
        },
        {
            title: "Education",
            content: (
                <div key={2}>
                    <Education />
                </div>
            )
        },
        {
            title: "Experience",
            content: (
                <div key={2}>
                    <Experience />
                </div>
            )
        }
    ];
  return (
    <div id='#about' className='px-4 w-[90%] mx-auto py-20 h-full'>
        <div className="flex flex-row items-center justify-center">
            <div className="h-[2px] lg:w-full w-[38%] bg-black dark:bg-white mr-5 lg:hidden block"></div>
            <HyperText
                className="text-xl font-bold text-black dark:text-white lg:mr-2 mr-0"
                text="About"/>
            <div className="h-[2px] lg:w-full w-[38%] bg-black dark:bg-white ml-5"></div>
        </div>
        <div className="w-full h-full flex items-center gap-5 pt-3 justify-center lg:justify-start">
            {data.map((tab, index) => (
                <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                    key={index}
                    className={`tab-button ${activeTab === index ? 'bg-dark text-light dark:bg-light dark:text-dark' : 'bg-secondary dark:bg-third/20'} py-1 px-4 rounded-lg`}
                    onClick={() => setActiveTab(index)}
                >
                    {tab.title}
                </motion.button>
            ))}
        </div>
        <div className="lg:px-10 px-0 mt-5 min-h-96">
            {data[activeTab].content}
        </div>
    </div>
  )
}
