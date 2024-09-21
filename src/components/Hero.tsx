"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Hero() {
  return (
    <div className='py-2 px-4 w-[90%] mx-auto'>
      <div className="">
        <h1 className="font-semibold text-sm">Hi, I'm</h1>
        <h1 className="text-3xl font-sans font-bold">Untung Budiman</h1>
        <TypeAnimation sequence={[
          "Web Developer", 1000,
          "Graphic Designer", 1000,
        ]} wrapper='span' speed={30} repeat={Infinity} className='font-sans italic font-bold text-lg'/>
        <p className="dark:text-secondary text-dark">
            <span className='font-bold text-black dark:text-white'>Enthusiastic web developer, quick learner, easily adaptable, and enjoys new projects</span>. Strong team player with great communication. Confident in being a valuable asset to your team.
        </p>

        {/* Button */}
        
      </div>
    </div>
  )
}

export default Hero
