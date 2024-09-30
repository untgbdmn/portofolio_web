"use client"
import React from 'react'
import HyperText from './magicui/hyper-text'
import { MdEmail, MdLocationOn, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {motion} from 'framer-motion'

export default function Contact() {
  return (
    <div id='contact' className='px-4 w-[90%] mx-auto pb-2'>
        <div className="flex flex-row-reverse items-center justify-center">
            <HyperText
            className="text-xl font-bold text-black dark:text-white lg:mr-2 mr-0"
            text="contact"
            />
            <div className="h-[2px] lg:w-[90%] w-[78%] bg-black dark:bg-white mr-5"></div>
        </div>

        <div className='flex lg:flex-row flex-col gap-4 lg:gap-0'>
            <div className="text-center lg:text-start">
                <h1 className="text-2xl font-sans font-bold">Get in Touch!</h1>
                <div className="">
                    <div className="flex flex-col text-lg font-bold">
                        <h1 className="">Untung Budiman</h1>
                        <h2 className="text-sm text-primary">Web Developer</h2>
                        <div className="flex flex-col text-sm mt-2 text-center lg:text-start justify-center lg:justify-start items-center lg:items-start">
                            <h1 className="inline-flex items-center gap-2">
                                <MdLocationOn />Galur, Kulon Progo, DI Yogyakarta
                            </h1>
                            <h1 className="inline-flex items-center gap-2">
                                <MdEmail />budimanuntung28@gmail.com
                            </h1>
                            <h1 className="inline-flex items-center gap-2">
                                <MdOutlinePhoneInTalk />+62 851-8480-8340
                            </h1>
                        </div>
                        <div className="flex flex-row gap-2 mt-2 items-center lg:items-start justify-center lg:justify-start">
                            <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}
                                className='bg-black text-white p-[5px] rounded-full dark:bg-white dark:text-black'>
                                <FaGithub className='text-lg'/>
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}
                                className='bg-black text-white p-[5px] rounded-full dark:bg-white dark:text-black'>
                                <FaLinkedinIn className='text-lg'/>
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}
                                className='bg-black text-white p-[5px] rounded-full dark:bg-white dark:text-black'>
                                <FaInstagram className='text-lg'/>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
            <form action="" className="w-full lg:ml-10 ml-0 flex-row flex gap-4">
                <div className="flex flex-col w-1/2 h-full gap-3">
                    <h1 className="text-2xl font-bold">Send me message!</h1>
                    <label htmlFor="name" className='w-full inline-flex flex-col'>
                        Nama
                        <input type="text" name="name" id="name" className='w-full h-7 bg-black/80 dark:bg-white/25 pl-2 rounded-sm text-white focus:outline-none' placeholder='Input your name'/>
                    </label>
                    <label htmlFor="email" className='w-full inline-flex flex-col'>
                        Email
                        <input type="text" name="email" id="email" className='w-full h-7 bg-black/80 dark:bg-white/25 pl-2 rounded-sm text-white focus:outline-none' placeholder='Input your email'/>
                    </label>
                    <button type="submit" className='h-full w-full bg-black text-white dark:bg-white dark:text-black font-bold hover:bg-opacity-50 transition-opacity duration-500 hover:dark:bg-opacity-50 hover:dark:text-white'>Send To Me!</button>
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" className='h-full w-full bg-black/80 dark:bg-white/25 p-2 rounded-md text-white focus:outline-none resize-none' placeholder='Message...'></textarea>
                </div>
            </form>
        </div>
        <div className="w-full h-[2px] bg-black dark:bg-white mt-5"></div>
        <p className="w-full inline-flex items-center justify-center text-sm mt-2 font-semibold">&copy;2024  <a href="" className="font-bold text-black dark:text-third ml-2"> Untung Budiman</a> . All Rights Reserved</p>
    </div>
  )
}
