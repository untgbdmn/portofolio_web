import React from 'react'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portofolio from "@/components/Portofolio";
import Skills from "@/components/Skills";
import { CanvasRevealEffectDemo } from '@/components/Test';

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Portofolio />
        <CanvasRevealEffectDemo/>
        <Contact />
    </>
  )
}
