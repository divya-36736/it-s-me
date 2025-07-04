'use client'; // ✅ Only if using Next.js 13+ and this is a client component

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "motion/react"

import { FaLaptopCode } from 'react-icons/fa';

const Services = () => {
  return (
    <div id = "services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className="text-center mb-2 text-lg font-Ovo">
        WHAT I HAVE DONE SO FAR
      </motion.h4>

      <motion.h2 
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}
      className="text-center text-5xl font-Ovo mb-10">Work Experience</motion.h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="August 2024 – Present"
          iconStyle={{ background: '#1e293b', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Executive Member|(January 2025- Present)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">TEAM VIBHAV</h4>
          <ul className="mt-2 list-disc ml-5 text-sm text-gray-300">
            <li>
              Coordinated and executed technical workshops and innovation challenges, providing hands-on learning experiences for over 500 participants.
            </li>
            <li>
              Fostered a collaborative environment to enhance participant engagement and knowledge retention.
            </li>
            <li>
              Developed and submitted cutting-edge projects for the college tech fest, integrating AI, IoT, and web technologies.
            </li>
            <li>
                Achieved a 35% increase in project engagement through the implementation of innovative solutions and seamless functionality.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="Nov 2023 – Aug 2024"
          iconStyle={{ background: '#1e293b', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Volunteer|(January 2024-April 2024)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">TEAM VIBHAV</h4>
          <ul className="mt-2 list-disc ml-5 text-sm text-gray-300">
            <li>
              Drove cross-functional collaboration to create an engaging and immersive learning atmosphere, boosting active participation and technical curiosity among students.
            </li>
            <li>
              Actively contributed to building a culture of innovation and peer-led growth, helping first-year students get hands-on exposure to real-world tech applications.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Services;
