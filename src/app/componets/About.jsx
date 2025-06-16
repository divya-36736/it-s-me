"use client"
import React from 'react'
import { CardBody, CardContainer, CardItem } from "../componets/ui/3d-Card";
import { BackgroundGradient } from "../componets/ui/background-gradient";
import { motion } from "motion/react"

function About() {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}>
      <motion.h4 
      initial={{opacity:0, y: -20}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </motion.h4>

      <motion.h2
       initial={{opacity:0, y: -20}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 0.5, delay: 0.5}} 
      className='text-center text-5xl font-Ovo'>About me</motion.h2>

      <motion.div 
       initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center
      gap-20 my-20'>
        <CardContainer className="inter-var">
  <CardBody
    className="relative group/card w-full sm:w-[22rem] h-auto p-4 sm:p-6 border rounded-xl 
    bg-white dark:bg-black border-gray-200 dark:border-white/[0.2] 
    shadow-md hover:shadow-lg transition-all duration-300"
  >
    <motion.div 
     initial={{opacity:0, scale:0.9}}
    whileInView={{opacity: 1, scale: 1}}
    transition={{duration: 0.6}}
    className="overflow-hidden rounded-2xl">
      <img
        src="/myself.jpg"
        alt="Divya Kumari"
        className="w-full h-auto object-cover rounded-2xl 
        transform group-hover/card:scale-105 transition duration-500 ease-in-out"
      />
    </motion.div>
  </CardBody>
</CardContainer>


        <motion.div 
         initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.8}}
        className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>I'm a tech enthusiast with a diverse skill
set spanning machine learning, 
backend development, data structures and algorithms, and a touch of frontend work. I thrive on solving complex
problems, building efficient systems,
and delivering scalable solutions.
My work bridges functionality and
design, allowing me to create seamless
user experiences while maintaining
robust, optimized backends. Whether it's
crafting ML models, writing clean
backend logic, or diving into frontend
frameworks, I'm always up for a
challenge.
Beyond coding, I enjoy exploring
     innovative technologies and finding
    ways to blend creativity with technical precision. Let's collaborate and bring great ideas to life</p>

            <motion.ul 
             initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.8, delay: 1}}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
  <motion.li 
  whileHover={{scale: 1.05}}
  className="border-2 border-gray-400 rounded-xl p-6 cursor-pointer transition-all duration-500 hover:bg-[#fcf4ff] hover:-translate-y-1 hover:shadow-md hover:shadow-black">
    <img src="coding.png" alt="" className="w-7 mt-3" />
    <h3 className="my-4 font-semibold">Languages</h3>
    <p className="text-gray-600 text-sm">HTML, CSS, JS, CPP, Python. Framework: React.js, Next.js</p>
  </motion.li>

  <motion.li 
  whileHover={{scale: 1.05}}
  className="border-2 border-gray-400 rounded-xl p-6 cursor-pointer transition-all duration-500 hover:bg-[#fcf4ff] hover:-translate-y-1 hover:shadow-md hover:shadow-black">
    <img src="graduation-cap.png" alt="" className="w-7 mt-3" />
    <h3 className="my-4 font-semibold">Education</h3>
    <p className="text-gray-600 text-sm">B.Tech in Electronics and Communication; student of NIT, Hamirpur</p>
  </motion.li>

  <motion.li 
  whileHover={{scale: 1.05}}
  className="border-2 border-gray-400 rounded-xl p-6 cursor-pointer transition-all duration-500 hover:bg-[#fcf4ff] hover:-translate-y-1 hover:shadow-md hover:shadow-black">
    <img src="project-management.png" alt="" className="w-7 mt-3" />
    <h3 className="my-4 font-semibold">Projects</h3>
    <p className="text-gray-600 text-sm">Built projects</p>
  </motion.li>
</motion.ul>

        </motion.div>
      </motion.div>

      <motion.h4 
      initial={{y: 20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 1.3, duration: 0.8, delay: 1}}
      className="text-center text-3xl font-Ovo mb-6">Tools I use</motion.h4>

<motion.ul 
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5, delay: 0.6}}
className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-2xl mx-auto px-4 place-items-center">
  <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">

  <motion.li 
  whileHover={{scale: 1.05}}
  className='w-24 h-24 sm:w-28 sm:h-28 border-[2px] border-gray-500 rounded-lg cursor-pointer flex items-center justify-center hover:-translate-y-1 duration-500 bg-white dark:bg-slate-900'>
    <img src="vs.png" alt="VS Code" className="w-16 sm:w-20 object-contain"/>
  </motion.li></BackgroundGradient>

  <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
  <motion.li 
  whileHover={{scale: 1.05}}
  className="w-24 h-24 sm:w-28 sm:h-28 border-[2px] border-gray-500 rounded-lg cursor-pointer flex items-center justify-center hover:-translate-y-1 duration-500 bg-white dark:bg-slate-900">
    <img src="figma.png" alt="Figma" className="w-16 sm:w-20 object-contain" />
  </motion.li></BackgroundGradient>

  <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
  <motion.li 
  whileHover={{scale: 1.05}}
  className="w-24 h-24 sm:w-28 sm:h-28 border-[2px] border-gray-500 rounded-lg cursor-pointer flex items-center justify-center hover:-translate-y-1 duration-500 bg-white dark:bg-slate-900">
    <img src="github.png" alt="GitHub" className="w-16 sm:w-20 object-contain" />
  </motion.li></BackgroundGradient>
</motion.ul>
      
    </motion.div>
  )
}

export default About
