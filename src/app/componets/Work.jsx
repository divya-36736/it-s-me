import React from 'react';
import { HoverEffect } from "../componets/ui/card-hover-effect";
import { CardBody, CardContainer, CardItem } from "../componets/ui/3d-Card";
import { motion } from "motion/react"

const projects = [
  {
    title: "Worker Booth",
    description: "Jobs Made Simple for Every Worker.",
    image: "/workerbooth.jpg",
    tags: ["#react-native", "#firebase", "#Hardware"],
    github: "https://github.com/divya-36736/Workers-Booth"
  },
  {
    title: "Team Vibhav Website",
    description: "Tech Fest of NIT, Hamirpur.",
    image: "/vibhav.png",
    tags: ["#Next.js", "#Tailwind CSS"],
    github: "https://github.com/divya-36736/VibhavWeb"
  },
  {
    title: "Juris AI website",
    description: "Simplifying Law with Intelligence.",
    image: "/juris.jpg",
    tags: ["#python", "#LLM", "#react-js"],
    github: "https://github.com/divya-36736/juris"
  }
];

function Work() {
  return (
    <motion.div 
    initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className="text-center mb-2 text-lg font-Ovo">My latest work</motion.h4>
      <motion.h2 
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}
      className="text-center text-5xl font-Ovo mb-10">PROJECTS</motion.h2>

      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Following projects showcase my skills and experience through real-world examples of my work.
        Each project is briefly described with links to code repositories and live demos.
        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>

      
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
      className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
  {projects.map((project, index) => (
    <CardContainer key={index} className="inter-var">
      <CardBody className="bg-[#0f172a] p-6 rounded-xl shadow-md transition hover:-translate-y-2 hover:shadow-lg dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-full sm:w-[22rem] h-auto">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-white text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-sm mb-3">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-cyan-400">{tag}</span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-sm font-medium"
        >
          View on GitHub →
        </a>
      </CardBody>
    </CardContainer>
  ))}
</motion.div>

    </motion.div>
  );
}

export default Work;
