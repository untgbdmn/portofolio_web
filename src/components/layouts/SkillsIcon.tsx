import React, {useRef} from 'react'
import {motion} from "framer-motion"
import { FaHtml5, FaCss3Alt, FaPhp, FaBootstrap, FaReact, FaLaravel } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
export default function SkillsIcon() {
    const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className='h-full w-full min-h-64'>
        <div className="lg:flex grid grid-cols-2 gap-6 flex-wrap items-center justify-center">
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #E44D26" }}
                whileTap={{ boxShadow: "0px 0px 15px #E44D26" }}
                className="bg-[#E44D26] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><FaHtml5 className='text-2xl'/>HTML5
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #1572B6" }}
                whileTap={{ boxShadow: "0px 0px 15px #1572B6" }}
                className="bg-[#1572B6] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><FaCss3Alt className='text-2xl'/>CSS3
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #F7DF1E" }}
                whileTap={{ boxShadow: "0px 0px 15px #F7DF1E" }}
                className="bg-[#F7DF1E] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><RiJavascriptFill className='text-2xl'/>JavaScript
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #007ACC" }}
                whileTap={{ boxShadow: "0px 0px 15px #007ACC" }}
                className="bg-[#007ACC] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><BiLogoTypescript className='text-2xl'/>TypeScript
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #8993BE" }}
                whileTap={{ boxShadow: "0px 0px 15px #8993BE" }}
                className="bg-[#8993BE] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><FaPhp className='text-2xl'/>PHP
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #38B2AC" }}
                whileTap={{ boxShadow: "0px 0px 15px #38B2AC" }}
                className="bg-[#38B2AC] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><RiTailwindCssFill className='text-2xl'/>Tailwind
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #563D7C" }}
                whileTap={{ boxShadow: "0px 0px 15px #563D7C" }}
                className="bg-[#563D7C] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><FaBootstrap className='text-2xl'/>Bootstrap
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #61DAFB" }}
                whileTap={{ boxShadow: "0px 0px 15px #61DAFB" }}
                className="bg-[#61DAFB] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><FaReact className='text-2xl'/>React
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #979797" }}
                whileTap={{ boxShadow: "0px 0px 15px #979797" }}
                className="bg-[#000000] dark:bg-white text-white dark:text-black inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><RiNextjsFill className='text-2xl'/>NextJs
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #FF2D55" }}
                whileTap={{ boxShadow: "0px 0px 15px #FF2D55" }}
                className="bg-[#FF2D55] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><FaLaravel className='text-2xl'/>Laravel
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #007EB9" }}
                whileTap={{ boxShadow: "0px 0px 15px #007EB9" }}
                className="bg-[#007EB9] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><TbBrandMysql className='text-2xl'/>MySQL
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #336791" }}
                whileTap={{ boxShadow: "0px 0px 15px #336791" }}
                className="bg-[#336791] text-white inline-flex items-center justify-center gap-3 py-1 px-3 rounded-lg w-fit h-fit font-bold"><BiLogoPostgresql className='text-2xl'/>PostgreSQL
            </motion.div>
        </div>
    </div>
  )
}
