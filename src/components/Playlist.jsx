import React from 'react'
import { artist } from '../assets/data'
import { FaYoutube } from 'react-icons/fa'
const Playlist = () => {
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <div className='w-10/12 mx-auto gap-6 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 grid grid-cols-1' >
      {artist.map((item) => {
        return (
          <div className='bg-white hover:bg-zinc-100 ease-in duration-200 shadow-md rounded-xl cursor-pointer'  onClick={() => newTab(`${item.link}`)}>
            <div className='py-5 m-auto'>
              <img src={item.image} alt="" className='w-11/12 m-auto rounded-xl'/>
              <div className='xl:text-3xl text-xl px-5 pt-2 font-poppins font-bold'>
                <h4 className=''>{item.name}</h4>
            <FaYoutube className='m-auto text-5xl text-red-600 hover:text-red-400 ease-in duration-200'/>
              </div>
            
            </div>
            
          </div>
        )
      })}
    </div>
  )
}

export default Playlist
