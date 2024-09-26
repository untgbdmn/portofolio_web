import React from 'react'
// import Image from 'next/image';
import HyperText from './magicui/hyper-text'
import { CardSpotlight } from './ui/card-spotlight'
import CV from "../public/cvform.png"
import Porto from "@/public/cv_2.png"
import { Highlight } from './ui/hero-highlight'

const Portofolio: React.FC = () => {
  return (
    <div className='px-4 w-[90%] mx-auto pb-16'>
      <div className="flex flex-row items-center justify-center">
        <HyperText
          className="text-xl font-bold text-black dark:text-white lg:mr-2 mr-0"
          text="portofolio"
        />
        <div className="h-[2px] lg:w-[85%] w-[78%] bg-black dark:bg-white ml-5"></div>
      </div>

      <div className="py-5">
        <h1 className="lg:text-3xl text-xl font-bold text-center font-sans">Navigating the paths of code,<br/> where <Highlight className='italic text-white'>every algorithm opens doors to colorful and imaginative realms.</Highlight></h1>
      </div>

      <div className="lg:grid grid-cols-2 gap-10 w-full h-full px-10 flex flex-col">
        <CardSpotlight
          title="CV Form"
          desc="Saya menggunakan Laravel untuk pengembangan situs web ini dan MySQL sebagai sistem manajemen basis datanya. Saat ini, basis data dioperasikan secara lokal. Tujuan utama dari pembuatan situs web ini adalah sebagai bagian dari bootcamp untuk mempersiapkan diri memasuki perusahaan tempat saya bekerja saat ini."
          src={CV.src}
          githubLink="https://github.com/untgbdmn/4.Laravel_CVForm">
          <h1 className="text-white text-2xl text-center font-bold font-sans">CV Form</h1>
        </CardSpotlight>

        <CardSpotlight
          title="Portofolio"
          desc="Dalam proses pengembangan proyek ini, saya telah memperluas keterampilan saya dengan memanfaatkan teknologi terkini, termasuk Next.js dengan TypeScript, Tailwind CSS, Magic UI, Acernity UI, dan Framer Motion. Penggunaan teknologi ini memungkinkan saya untuk menciptakan tampilan portofolio yang lebih modern dan interaktif."
          src={Porto.src}
          githubLink="https://github.com/untgbdmn/personal_">
          <h1 className="text-white text-2xl text-center font-bold font-sans">Portofolio</h1>
        </CardSpotlight>
      </div>
    </div>
  )
}

export default Portofolio
