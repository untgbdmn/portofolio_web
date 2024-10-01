import React from 'react'

export default function Experience() {
  return (
    <div className='w-full h-full'>
      <div className="flex flex-row-reverse items-center justify-center gap-3">
        <div className="flex flex-col h-full w-full text-center lg:text-start">
            <h1 data-aos="fade-right" className="text-dark text-xl font-bold dark:text-light">PT Belanja Pasti Indonesia</h1>
            <p data-aos="fade-right" className="text-sm font-normal italic">2024 - present</p>
            <p data-aos="fade-right" className="text-sm font-semibold dark:text-secondary">Web Developer</p>
        </div>
        <div data-aos="fade-right" className="h-full hidden lg:flex justify-center items-center">
            <div className="h-5 w-5 bg-black dark:bg-primary rounded-full flex items-center justify-center">
                <div className="bg-white dark:bg-black h-2 w-2 rounded-full"></div>
            </div>
        </div>
      </div>
      <div data-aos="fade-up" className="lg:pl-8 pl-0 mt-2 text-sm text-center lg:text-start">
      Saya telah berkontribusi secara aktif dalam pengembangan berbagai proyek web. Hingga saat ini, saya telah terlibat dalam <span className="font-bold">tiga proyek signifikan</span>, dengan peran termasuk <span className="font-bold">pengembangan front-end</span> di mana saya menerapkan antarmuka pengguna berdasarkan desain yang dibuat oleh tim kreatif. Selain itu, saya juga memiliki pengalaman dalam menangani <span className="font-bold">integrasi database dan API serta tugas-tugas front-end</span>, memastikan solusi web yang kohesif dan fungsional.
      </div>
    </div>
  )
}
