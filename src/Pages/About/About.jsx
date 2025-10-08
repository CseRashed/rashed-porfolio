import React from 'react';
import img from '../../assets/img.png';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineMobile } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { motion } from "framer-motion";

export default function About() {

  const skills = [
    { name: "HTML", value: 100, from: "#f06529", to: "#ff9b6a" },
    { name: "CSS", value: 90, from: "#2965f1", to: "#6ea0ff" },
    { name: "JavaScript", value: 75, from: "#f7df1e", to: "#fff68f" },
    { name: "React", value: 85, from: "#61dafb", to: "#a0f0ff" },
  ];

  const features = [
    { title: "Responsive Design", desc: "Websites that look perfect on any device.", icon: <AiOutlineMobile size={30} className="text-[#1fcaff]" /> },
    { title: "Modern UI/UX", desc: "Clean, interactive, and user-friendly interfaces.", icon: <AiOutlineAntDesign size={30} className="text-[#1fcaff]" /> },
    { title: "Fast & Optimized", desc: "Optimized for fast loading and smooth experience.", icon: <BiRocket size={30} className="text-[#1fcaff]" /> },
    { title: "Version Control", desc: "Efficient Git workflow for projects and collaboration.", icon: <IoLogoGithub size={30} className="text-[#1fcaff]" /> }
  ];

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <div className='min-h-screen p-4 lg:p-16  space-y-16'>

      {/* Intro */}
      <motion.div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-8' initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.div className='lg:w-2/3 text-center lg:text-left space-y-4' variants={item}>
          <h1 className='text-gray-900 text-2xl sm:text-3xl font-bold'>Hello I'm</h1>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1fcaff] to-[#0ea5e9] text-transparent bg-clip-text'>Rashedul Islam</h2>
          <h3 className='text-gray-700 text-xl sm:text-2xl lg:text-3xl font-semibold'>Frontend Developer</h3>
          <p className='text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg'>
            I build intuitive, user-friendly websites that help people solve real problems. Skilled in HTML, CSS, Tailwind, JavaScript & React, creating solutions that just work. Continuously learning Next.js & TypeScript to deliver faster, smarter, scalable apps. Passionate about turning challenges into clear, impactful digital experiences.
          </p>

          <div className='flex flex-col sm:flex-row items-center sm:items-start mt-4 gap-6'>
            <motion.button className='bg-gradient-to-r from-[#1fcaff] to-[#0ea5e9] text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-[#1fcaff]/50 transition-all duration-300' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Download CV</motion.button>
            <div className='flex gap-4'>
              {[IoLogoGithub, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <motion.a key={i} href="#" className='border border-[#1fcaff] text-[#1fcaff] p-3 rounded-full text-xl hover:bg-[#1fcaff] hover:text-white transition duration-300' whileHover={{ scale: 1.2 }}>
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="flex justify-center lg:justify-end" variants={item}>
          <motion.img className="w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 border-4 border-[#1fcaff] rounded-full shadow-xl object-cover" src={img} alt="Rashedul Islam" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}/>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.h3 className='text-gray-900 text-2xl font-semibold mb-8' variants={item}>My Skills</motion.h3>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
          {skills.map((skill, idx) => (
            <motion.div key={idx} className='flex flex-col items-center gap-4 p-4 rounded-2xl bg-white shadow-lg' variants={item}>
              <div className='w-24 h-24 relative'>
                {/* Gradient Circular */}
                <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                  <defs>
                    <linearGradient id={`grad${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={skill.from} />
                      <stop offset="100%" stopColor={skill.to} />
                    </linearGradient>
                  </defs>
                  <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                  <motion.circle cx="18" cy="18" r="15.9155" fill="none" stroke={`url(#grad${idx})`} strokeWidth="4" strokeDasharray="100" strokeDashoffset="100" animate={{ strokeDashoffset: 100 - skill.value }} transition={{ duration: 1.5, delay: idx * 0.3 }} strokeLinecap="round"/>
                </svg>
                <div className='absolute inset-0 flex items-center justify-center text-gray-900 font-bold text-lg'>{skill.value}%</div>
              </div>
              <p className='text-gray-800 font-semibold'>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.h3 className='text-gray-900 text-2xl font-semibold mb-6' variants={item}>Highlights</motion.h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((f, idx) => (
            <motion.div key={idx} className='bg-white p-6 rounded-xl shadow-lg flex flex-col items-start gap-3' whileHover={{ scale: 1.05, y: -5 }} variants={item}>
              <div>{f.icon}</div>
              <h4 className='text-[#1fcaff] font-bold text-lg'>{f.title}</h4>
              <p className='text-gray-700 text-sm'>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}
