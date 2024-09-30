"use client"
import React from 'react'
import HyperText from './magicui/hyper-text'
import IconCloud from './magicui/icon-cloud'
import {LinkPreview} from "./ui/link-preview"
import SkillsIcon from './layouts/SkillsIcon'

export default function Skills() {
    const slugs = [
        // Front End
        "typescript","javascript","html5","css3",
        // Backend
        "php",
        // Library
        "react","nextjs",
        // UI Framework
        "tailwindcss","bootstrap",
        // Style Guide
        "prettier",
        // Database
        "postgresql","mysql",
        // Server
        "nginx","vercel",
        // Tools
        "github","git","visualstudiocode","gitlab", "sublimetext", "webstorm", "phpstorm", "jetbrains","canva", "coreldraw",
        // Operating System
        "linux", "archlinux", "debian", "ubuntu","windows"
      ];
  return (
    <div id='skills' className='px-4 w-[90%] mx-auto'>
        <div data-aos="fade-left" className="flex flex-row-reverse items-center justify-center">
            <HyperText
                className="text-xl font-bold text-black dark:text-white lg:mr-2 mr-0 "
                text="skills"/>
            <div className="h-[2px] lg:w-[95%] w-[78%] bg-black dark:bg-white mr-5"></div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse w-full h-full gap-y-5">
            <div className="w-full lg:w-[70%] h-full">
                <div data-aos="fade-down" className="">
                    <p className="text-base text-center text-dark dark:text-light">
                    I possess skills in both frontend and backend development, with a focus on responsive design using <LinkPreview url="https://tailwindcss.com" className="font-bold font-sans italic text-dark dark:text-white text-lg">Tailwind CSS</LinkPreview>{" "}. I &apos;m experienced in frameworks like <LinkPreview url="https://nextjs.org/" className="font-bold font-sans italic text-dark dark:text-white text-lg">Next.Js</LinkPreview>{" "} and <LinkPreview url="https://react.dev/" className="font-bold font-sans italic text-dark dark:text-white text-lg">React.Js</LinkPreview>{" "} and I often utilize the <LinkPreview url="https://framer.com/motion" className="font-bold font-sans italic text-dark dark:text-white text-lg">Framer Motion</LinkPreview>{" "} library. Additionally, I usually incorporate UI components from <LinkPreview url="https://ui.aceternity.com/" className="font-bold font-sans italic text-dark dark:text-white text-lg">Aceternity UI</LinkPreview>{" "} or <LinkPreview url="https://magicui.design/" className="font-bold font-sans italic text-dark dark:text-white text-lg">Magic UI</LinkPreview>{" "} to enhance the user experience.
                    </p>
                </div>
                <div data-aos="fade-right" className="h-full w-full mt-8 px-4 py-3">
                    <SkillsIcon />
                </div>
            </div>
            <div data-aos="fade-left" className="w-full lg:w-[30%] h-full">
                <IconCloud iconSlugs={slugs}/>
            </div>
        </div>
    </div>
  )
}
