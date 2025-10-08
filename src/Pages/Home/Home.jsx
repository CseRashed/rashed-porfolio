import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import img from "../../assets/img.png";
import { motion } from "framer-motion";

export default function Home() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <div className="min-h-screen px-4 lg:px-16 py-5 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
      
      {/* Text Section */}
      <motion.div 
        className="lg:w-2/3 space-y-6 text-center lg:text-left"
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={container}
      >
        <motion.h1 className="text-gray-900 text-2xl sm:text-3xl font-bold" variants={item}>Hello, I'm</motion.h1>
        <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#1fcaff] to-[#0ea5e9] text-transparent bg-clip-text" variants={item}>Rashedul Islam</motion.h2>
        <motion.h3 className="text-gray-700 text-xl sm:text-2xl lg:text-3xl font-semibold" variants={item}>Frontend Developer</motion.h3>
        <motion.p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg" variants={item}>
          I build intuitive, user-friendly websites that solve real problems. Skilled in HTML, CSS, Tailwind, JavaScript & React, delivering solutions that work. Continuously learning Next.js & TypeScript to create faster, scalable apps. Passionate about turning challenges into clear, impactful digital experiences.
        </motion.p>

        {/* Buttons & Socials */}
        <motion.div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 gap-6" variants={item}>
         <motion.a
  href="/Rashedul Islam Resume.pdf"
  download
  className="bg-gradient-to-r from-[#1fcaff] to-[#0ea5e9] text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-[#1fcaff]/50 transition-all duration-300 inline-block"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Download CV
</motion.a>

          <div className="flex gap-4">
            {[IoLogoGithub, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <motion.a key={i} href="#" className="border border-[#1fcaff] text-[#1fcaff] p-3 rounded-full text-xl hover:bg-[#1fcaff] hover:text-white transition duration-300" whileHover={{ scale: 1.2 }}>
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="lg:w-1/3 flex justify-center lg:justify-end mb-8 lg:mb-0"
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={container}
      >
        <motion.img
          src={img}
          alt="Rashedul Islam"
          className="w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 rounded-full border-4 border-[#1fcaff] shadow-xl object-cover"
          whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0px 0px 25px 5px rgba(31,202,255,0.5)" }}
          transition={{ type: "spring", stiffness: 120 }}
          variants={item}
        />
      </motion.div>

    </div>
  );
}
