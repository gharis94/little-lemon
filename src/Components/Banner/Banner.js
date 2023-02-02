import React from 'react'
import dish1 from '../../asset/dish1.jpeg';
import {useNavigate} from 'react-router-dom'
const Banner = () => {
  const navigateTo=useNavigate();

  return (
    <div className='grid grid-cols-2  text-white h-full'>
      <div className='flex flex-col mt-40 ml-24'>
          <p className='text-6xl'>Little Lemon</p>
          <p className='text-3xl mt-10'>California</p>
          <p className='mt-10 pr-10'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</p>
          <button onClick={()=>navigateTo('/booking')} className='bg-yellow-400 rounded-lg mt-10 w-1/2 text-gray-100 font-semibold cursor-pointer active:bg-yellow-500 hover:bg-yellow-500' >Book A Table</button>
      </div>
      <div className='flex justify-center items-center'>
          <img src={dish1} className='rounded-lg  drop-shadow-2xl'/>
      </div>
    </div>
  )
}

export default Banner