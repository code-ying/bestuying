import React from 'react'
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className='w-10/12 m-auto py-28 flex justify-between'>
      <div>
        <h1 className='text-3xl font-poppins font-bold'>Artis atau grup band favorit</h1>
        <div className='text-xl pt-5 w-48 text-center'>
            <p className='bg-blue-500  px-1 py-2 rounded-xl text-white font-poppins font-bold'>Adakah favoritmu?</p>
        </div>
      </div>
      <div>
        <FaGithub className='text-5xl'/>
      </div>
    </div>
  )
}

export default HeroSection
