"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";


const Header = () => {
    const [active, setActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    const handleNav = () => {
        setActive(!active);
    }

    useEffect(() => {
        setMounted(true);
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);
        document.body.classList.toggle('dark', savedMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode.toString());
        document.body.classList.toggle('dark', newMode);
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className='bg-black/90 text-white dark:bg-white/15 flex flex-row justify-between items-center rounded-lg py-2 px-4 w-[90%] mx-auto mt-3 fixed ml-[5%] backdrop-blur-md z-[999]'>
            <div className="">
                <Link href={"#home"} className='font-bold text-2xl font-sans'>Untg<span className='text-primary'>Bdmn__</span></Link>
            </div>

            <div className="hidden lg:flex flex-row gap-6 items-center justify-center">
                <Link href='#home' className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>01.Home</Link>
                <Link href='#about' className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>02.About</Link>
                <Link href='#skills' className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>03.Skills</Link>
                <Link href='#portofolio' className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>04.Portofolio</Link>
                <Link href='#contact' className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>05.Contact</Link>
                <div className="flex items-center justify-center">
                    <label className="inline-flex items-center relative">
                        <input className="peer hidden" id="toggle" type="checkbox" checked={darkMode}
                                onChange={toggleDarkMode}/>
                        <div className="relative w-[72px] h-[30px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[26px] after:h-[26px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[2px] after:left-[2px] active:after:w-[50px] peer-checked:after:left-[70px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
                        <svg
                            height="0"
                            width="100"
                            viewBox="0 0 24 24"
                            data-name="Layer 1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-white peer-checked:opacity-60 absolute w-5 h-5 left-[5px]"
                        >
                            <path
                            d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                            ></path>
                        </svg>
                        <svg
                            height="512"
                            width="512"
                            viewBox="0 0 24 24"
                            data-name="Layer 1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-5 h-5 right-[5px]"
                        >
                            <path
                            d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                            ></path>
                        </svg>
                    </label>
                </div>
            </div>

            <div className="md:hidden block transition-all duration-500">
                {active ? <AiOutlineClose size={30} onClick={handleNav}/> : <RiMenu3Fill size={30} onClick={handleNav}/>}
            </div>

            <div className={`${active ? 'translate-x-0' : 'translate-x-[500px]'} fixed flex flex-col top-[60px] bg-black/50 dark:bg-white/40 right-5 z-[9999] justify-center items-center gap-2 py-3 px-4 bg-opacity-90 backdrop-blur-2xl rounded-lg transition-transform duration-500`}>
            <div className="flex items-center justify-center">
                    <label className="inline-flex items-center relative">
                        <input className="peer hidden" id="toggle" type="checkbox" checked={darkMode}
                                onChange={toggleDarkMode}/>
                        <div className="relative w-[72px] h-[30px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[26px] after:h-[26px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[2px] after:left-[2px] active:after:w-[50px] peer-checked:after:left-[70px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
                        <svg
                            height="0"
                            width="100"
                            viewBox="0 0 24 24"
                            data-name="Layer 1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-white peer-checked:opacity-60 absolute w-5 h-5 left-[5px]"
                        >
                            <path
                            d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                            ></path>
                        </svg>
                        <svg
                            height="512"
                            width="512"
                            viewBox="0 0 24 24"
                            data-name="Layer 1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-5 h-5 right-[5px]"
                        >
                            <path
                            d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                            ></path>
                        </svg>
                    </label>
                </div>
                <Link href={"#home"} className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>01.Home</Link>
                <Link href={"#about"} className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>02.About</Link>
                <Link href={"#skills"} className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>03.Skills</Link>
                <Link href={"#portofolio"} className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>04.Portofolio</Link>
                <Link href={"#contact"} className='font-bold text-lg hover:text-primary hover:translate-x-2 transition-transform duration-300'>05.Contact</Link>
            </div>
        </div>
    )
}

export default Header
