import React from 'react'
import HyperText from './magicui/hyper-text'

export default function Portofolio() {
  return (
    <div className='px-4 w-[90%] mx-auto'>
        <div className="flex flex-row items-center justify-center">
            <HyperText
                className="text-xl font-bold text-black dark:text-white lg:mr-2 mr-0 "
                text="portofolio"/>
            <div className="h-[2px] lg:w-[85%] w-[78%] bg-black dark:bg-white ml-5"></div>
        </div>
        
    </div>
  )
}
