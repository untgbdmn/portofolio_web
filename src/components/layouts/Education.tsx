import React from 'react'

export default function Education() {
  return (
    <div className='w-full h-full min-h-96'>
      <div className="flex flex-row-reverse items-center justify-center gap-3">
        <div className="flex flex-col h-full w-full text-center lg:text-start">
            <h1 className="text-dark text-xl font-bold dark:text-light">SMK Negeri 2 Pengasih</h1>
            <p className="text-sm font-normal italic">2021 - 2024</p>
            <p className="text-sm font-semibold dark:text-secondary">Teknik Jaringan Komputer dan Telekomunikasi</p>
        </div>
        <div className="h-full hidden lg:flex justify-center items-center">
            <div className="h-5 w-5 bg-black dark:bg-primary rounded-full flex items-center justify-center">
                <div className="bg-white dark:bg-black h-2 w-2 rounded-full"></div>
            </div>
        </div>
      </div>
      <div className="lg:pl-8 pl-0 mt-2 text-sm text-center lg:text-start">
      Saya fokus mempelajari <span className="font-bold ">Administrasi Sistem Jaringan</span> selama menempuh pendidikan, dengan penekanan pada konfigurasi perangkat jaringan, pemecahan masalah, dan manajemen sistem. Saya juga mendalami <span className="font-bold">Administrasi Infrastruktur Jaringan dan Teknologi Layanan Jaringan</span>. Selama pendidikan, saya memperoleh pengalaman berharga dengan berpartisipasi dalam Lomba <span className=" font-bold">Kompetensi Siswa (LKS) tingkat Provinsi Yogyakarta dalam bidang IT Network System Administration</span> pada tahun 2023, yang memperkuat pemahaman dan keterampilan saya di bidang ini.
      </div>
    </div>
  )
}
