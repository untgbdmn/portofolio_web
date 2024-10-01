"use client"
import React, {useEffect} from 'react'
import HyperText from './magicui/hyper-text'
import CV from "../public/cvform.png"
import Porto from "@/public/cv_2.png"
import { Highlight } from './ui/hero-highlight'
import AOS from 'aos'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

const Portofolio: React.FC = () => {
    useEffect(() => {
        AOS.init({
          once: false,
          disable: "phone",
          duration: 500,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <div id='portofolio' className='px-4 w-[90%] mx-auto pb-16'>
      <div data-aos="fade-down" className="flex flex-row items-center justify-center">
        <HyperText
          className="text-xl font-bold text-black dark:text-white lg:mr-2 mr-0"
          text="portofolio"
        />
        <div className="h-[2px] lg:w-[85%] w-[78%] bg-black dark:bg-white ml-5"></div>
      </div>

      <div data-aos="fade-down" className="py-5">
        <h1 className="lg:text-3xl text-xl font-bold text-center font-sans">Navigating the paths of code,<br/> where <Highlight className='italic text-white'>every algorithm opens doors to colorful and imaginative realms.</Highlight></h1>
      </div>

      <div className="grid grid-cols-2 gap-10 px-3 pt-5">
        <div className="" data-aos="fade-up">
            <Dialog>
                <DialogTrigger asChild>
                    <motion.div whileHover={{ scale: 0.9 }}
                                whileTap={{ scale: 1.1 }}
                                className="porto__card">
                        <h2 className="text-white">Personal Portofolio</h2>
                    </motion.div>
                </DialogTrigger>
                <DialogContent className=''>
                    <DialogHeader>
                        <DialogTitle>Personal Portofolio</DialogTitle>
                        <DialogDescription>
                            Creating a Next.js portfolio to showcase personal projects dynamically.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-row gap-5 items-center text-base">
                        <div className="">
                            Dalam proses pengembangan proyek ini, saya telah memperluas keterampilan saya dengan memanfaatkan teknologi terkini, termasuk Next.js dengan TypeScript, Tailwind CSS, Magic UI, Acernity UI, dan Framer Motion. Penggunaan teknologi ini memungkinkan saya untuk menciptakan tampilan portofolio yang lebih modern dan interaktif.
                        </div>
                        <Image src={Porto} className="w-[40%] h-auto" alt="porto"/>
                    </div>
                    <DialogFooter>
                        <button className="flex items-center flex-row gap-2 dark:bg-white bg-black text-black dark:text-white w-fit px-4 py-1 rounded-lg">
                            <FaGithub className='text-white dark:text-black text-xl'/>
                            <a href="" className="text-white dark:text-black font-semibold font-sans">Github</a>
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>

        <div className="" data-aos="fade-up">
            <Dialog>
                <DialogTrigger asChild>
                    <motion.div whileHover={{ scale: 0.9 }}
                                whileTap={{ scale: 1.1 }}
                                className="porto__card">
                        <h2 className="text-white">CV Form</h2>
                    </motion.div>
                </DialogTrigger>
                <DialogContent className=''>
                    <DialogHeader>
                        <DialogTitle>Curiculum Vitae Form</DialogTitle>
                        <DialogDescription>
                            The Curriculum Vitae Form project simplifies the creation of professional CVs.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-row gap-5 items-center text-base">
                        <div className="">
                            Saya menggunakan Laravel untuk pengembangan situs web ini dan MySQL sebagai sistem manajemen basis datanya. Saat ini, basis data dioperasikan secara lokal. Tujuan utama dari pembuatan situs web ini adalah sebagai bagian dari bootcamp untuk mempersiapkan diri memasuki perusahaan tempat saya bekerja saat ini.
                        </div>
                        <Image src={CV} className="w-[40%] h-auto rounded-md" alt="porto"/>
                    </div>
                    <DialogFooter>
                        <button className="flex items-center flex-row gap-2 dark:bg-white bg-black text-black dark:text-white w-fit px-4 py-1 rounded-lg">
                            <FaGithub className='text-white dark:text-black text-xl'/>
                            <a href="" className="text-white dark:text-black font-semibold font-sans">Github</a>
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>

      </div>
    </div>
  )
}

export default Portofolio
