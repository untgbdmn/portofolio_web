"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Dark from '@/public/darkmode.png'
import Light from '@/public/white.png'
import Image from 'next/image'
import { VelocityScroll } from './magicui/scroll-based-velocity'
import {motion} from 'framer-motion'
import AOS from 'aos'
import "aos/dist/aos.css";


function Hero() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div id='#home' className='px-4 w-[90%] mx-auto py-16 relative'>
        <div className='flex lg:flex-row flex-col-reverse mb-10 lg:mb-0'>
            <div data-aos="fade-right" className="lg:w-2/3 w-full text-center lg:text-left flex flex-col justify-center">
                <h1 className="font-semibold text-sm">Hi, I &apos;m</h1>
                <h1 className="text-3xl font-sans font-bold text-dark dark:text-third">Untung Budiman</h1>
                <TypeAnimation sequence={[
                "Web Developer", 1000,
                "Graphic Designer", 1000,
                ]} wrapper='span' speed={30} repeat={Infinity} className='font-sans italic font-bold text-lg'/>
                <p className="dark:text-secondary text-dark">
                    <span className='font-bold text-black dark:text-white'>Enthusiastic web developer, quick learner, easily adaptable, and enjoys new projects</span>. Strong team player with great communication. Confident in being a valuable asset to your team.
                </p>

                <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
                    <Link href={'#contact'}>
                        <motion.button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black dark:bg-white backdrop-blur-lg px-3 py-1 text-base font-semibold text-white dark:text-black transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:dark:shadow-gray-600 hover:shadow-black border border-black dark:border-white/20">
                            <span className="text-base font-sans">Contact Me!</span>
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                <div className="relative h-full w-10 dark:bg-black/30 bg-white/30"></div>
                            </div>
                        </motion.button>
                    </Link>
                </div>
            </div>
            <div data-aos="fade-left" className="lg:w-1/3 w-full mb-8 lg:mb-0">
                <Image src={Dark} className='w-full h-full dark:block hidden' alt='darkmode'/>
                <Image src={Light} className='w-full h-full block dark:hidden' alt='light'/>
            </div>
    </div>

    <VelocityScroll
        text1="Web Developer "
        text2='Graphic Designer '
        default_velocity={3}
        className="font-display text-center text-5xl font-bold lg:mt-3"/>
    </div>
  )
}

export default Hero
