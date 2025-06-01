import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwind.svg'
import { motion } from 'framer-motion';
import ViewMyWorkButton from './ViewMyWorkButton'
import BackGround from './BackGround'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id = 'home' className='h-screen p-8'>
        <div className='flex justify-between items-center w-64 mx-auto mb-4' id='home'>
        <BackGround></BackGround>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target='_blank'>
          <img src = {tailwindLogo} className='logo tailwind' alt = "Tailwind logo"></img>
        </a>
      </div>
      <motion.h1 initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.6, ease: 'easeOut' }}>Hello, my name is <b className='text-red-600'>Andrew Chen</b>.</motion.h1>
      <motion.h1 initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.6, ease: 'easeOut' }}>I'm a software engineer.</motion.h1>
      <div className="card">
        <ViewMyWorkButton></ViewMyWorkButton>
      </div>
    </div>
    
    
      
    </>
  )
}
