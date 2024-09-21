"use client"
import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <div className='w-full h-full flex lg:flex-row-reverse flex-col-reverse gap-4 lg:gap-0'>
      <div className="w-full lg:w-[5%] flex flex-row lg:flex-col items-center gap-4 justify-center">
        <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}
            className='bg-black text-white p-2 rounded-full dark:bg-white dark:text-black'>
            <FaGithub className='text-lg'/>
        </motion.button>

        <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}
            className='bg-black text-white p-2 rounded-full dark:bg-white dark:text-black'>
            <FaLinkedinIn className='text-lg'/>
        </motion.button>

        <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}
            className='bg-black text-white p-2 rounded-full dark:bg-white dark:text-black'>
            <FaInstagram className='text-lg'/>
        </motion.button>
      </div>
      <div className="w-full lg:w-[95%] h-full text-center lg:text-start">
        <p className="">
            Saya adalah lulusan Sekolah Menengah Kejuruan dengan fokus pada <span className="font-bold">Teknik Jaringan dan Telekomunikasi</span>, di mana saya meraih hasil yang sangat baik serta memperoleh beberapa sertifikasi pelatihan yang meningkatkan keterampilan saya.
        </p>
        <p className="">
            Pengalaman magang saya di bidang Telekomunikasi telah memperkaya pengetahuan dan keterampilan saya dalam <span className="font-bold">konfigurasi, instalasi, dan pemecahan masalah jaringan</span>. Pengalaman ini tidak hanya meningkatkan keahlian teknis saya, tetapi juga mengajarkan saya pentingnya komunikasi dan kerja sama tim.

        </p>
        <br/>
        <p className="">
            Saat ini, saya bekerja sebagai <span className="font-bold">Web Developer</span> dan <span className="font-semibold">telah berkontribusi dalam menyelesaikan beberapa proyek besar yang melibatkan pengembangan situs web</span>. Dalam peran ini, saya memanfaatkan keterampilan pemrograman saya untuk menciptakan solusi yang inovatif dan responsif. Selain keterampilan teknis, saya juga memiliki dasar yang kuat dalam <span className="font-bold">Desain Grafis</span>. Kemampuan ini memungkinkan saya untuk menciptakan desain yang <span className="font-bold">menarik secara visual dan fungsional</span>.
        </p>
        <p className="">
            Saya selalu antusias untuk <span className="font-bold">mempelajari hal-hal baru dan menghadapi tantangan baru</span>. Dengan hasrat untuk inovasi dan komitmen terhadap kualitas, saya siap untuk berkontribusi pada proyek-proyek yang menantang dan memberikan hasil yang memuaskan.
        </p>
      </div>
    </div>
  )
}
