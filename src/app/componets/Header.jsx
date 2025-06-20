"use client"
import React from 'react'
import { Spotlight } from '../componets/ui/Spotlight'
import { motion } from "motion/react"


function Header() {
  return (
   
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center
    gap-4'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'/>
      <motion.div
      initial = {{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration:0.8, type: 'spring', stiffness:100}} 
      >
        <img src="/myself.jpg" alt="myself" className='rounded-full w-32'/>
      </motion.div>

      <motion.h3 
      initial = {{y: -20, opacity:0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration:0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Divya Kumari</motion.h3>

      <motion.h1 
      initial = {{y: -30, opacity:0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration:0.8, delay: 0.5}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Frontend web developer</motion.h1>

        <motion.p 
        initial = {{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-Ovo'>
        I'm a AI and ML enthusiast and frontend developer
        constantly seeking to evolve through embracing new technologies and techniques.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial = {{y: 30, opacity:0}}
            whileInView={{y: 0, opacity:1}}
            transition={{duration:0.6, delay: 1}}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white
            flex items-center gap-2'>contact me <img src="/arrow-right.png" alt="" className='w-3'/></motion.a>

            <motion.a 
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 1 }}
  href="/Myresume.pdf"
  download
  className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
>
  my resume <img src="/downloads.png" alt="" className="w-4" />
</motion.a>


        </div>
    </div>
  )
}

export default Header
