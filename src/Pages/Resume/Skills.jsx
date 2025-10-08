import React from 'react'
import html from '../../assets/skills/html.png.png'
import css from '../../assets/skills/css.png.png'
import js from '../../assets/skills/javascript.png.png'
import react from '../../assets/skills/react.png.png'
import tailwind from '../../assets/skills/tailwind.png.png'
import github from '../../assets/skills/github.png.png'
import redux from '../../assets/skills/redux.png.png'
import ts from '../../assets/skills/typescript.png.png'
import firebase from '../../assets/skills/firebase.png.png'
import figma from '../../assets/skills/figma.png.png'
import express from '../../assets/skills/express.png.png'
import node from '../../assets/skills/nodejs.png.png'
import mongoDB from '../../assets/skills/mongodb,png.png'
import next from '../../assets/skills/nextjs.png.png'

const SkillCard = ({ img, title, level }) => (
  <div className='w-[120px] h-[180px] rounded-xl p-3 text-center shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300'>
    <div className='w-[100px] h-[100px] mb-4 rounded-full overflow-hidden mx-auto'>
      <img src={img} alt={title} className='w-full h-full object-contain' />
    </div>
    <h2 className='font-bold text-gray-800'>{title}</h2>
    <p className='text-gray-500 text-sm'>{level}</p>
  </div>
)

const SectionTitle = ({ children }) => (
  <h1 className='text-xl font-bold text-center my-12 bg-clip-text  text-blue-700'>
    {children}
  </h1>
)

export default function Skills() {
  return (
    <div className="max-h-screen p-4 overflow-y-auto">
      
      <SectionTitle>Frontend</SectionTitle>
      <div className='flex flex-wrap justify-evenly gap-6'>
        <SkillCard img={html} title="HTML 5" level="Advanced" />
        <SkillCard img={css} title="CSS 3" level="Advanced" />
        <SkillCard img={tailwind} title="TAILWIND" level="Advanced" />
        <SkillCard img={js} title="JS ES6" level="Intermediate" />
        <SkillCard img={react} title="REACT" level="Intermediate" />
        <SkillCard img={redux} title="REDUX" level="Learning..." />
        <SkillCard img={next} title="NEXT JS" level="Learning..." />
      </div>

      <SectionTitle>Backend</SectionTitle>
      <div className='flex flex-wrap justify-evenly gap-6'>
        <SkillCard img={node} title="NODE JS" level="Basic" />
        <SkillCard img={express} title="EXPRESS" level="Basic" />
        <SkillCard img={mongoDB} title="MONGODB" level="Basic" />
        <SkillCard img={firebase} title="FIREBASE" level="Intermediate" />
        <SkillCard img={ts} title="TYPESCRIPT" level="Learning..." />
      </div>

      <SectionTitle>Others</SectionTitle>
      <div className='flex flex-wrap justify-evenly gap-6'>
        <SkillCard img={github} title="GITHUB" level="Intermediate" />
        <SkillCard img={github} title="Netlify" level="Intermediate" />
        <SkillCard img={figma} title="FIGMA" level="Intermediate" />
      </div>

    </div>
  )
}
