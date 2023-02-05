import React from 'react'
import dish1 from '../../asset/dish1.jpeg';
import {useNavigate} from 'react-router-dom'
const Banner = () => {
  const navigateTo=useNavigate();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  text-white h-full pt-10'>
      <div className='flex flex-col sm:mt-32 sm:ml-24'>
          <div className='w-screen h-[15rem]  sm:hidden'>
              <img src={dish1} className='w-full h-full object-fit'/>
              
          </div>
          
          <p className=' text-4xl sm:text-6xl pt-6 sm:pt-0 ml-6 sm:ml-0'>Little Lemon</p>
          <p className='text-lg sm:text-3xl mt-10 ml-6 sm:ml-0'>California</p>
          <p  className = 'mt-10 pr-10  md:truncate-none ml-6 sm:ml-0' > Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s,</p>
          <button onClick={()=>navigateTo('/booking')} className='bg-yellow-400 rounded-lg mt-10 w-1/2 text-gray-700 font-semibold cursor-pointer active:bg-yellow-500 hover:bg-yellow-500 hover:text-gray-200 ml-6 sm:ml-0' >Book A Table</button>
      </div>
      <div className='hidden sm:flex justify-center items-center'>
          <img src={dish1} className='rounded-lg  drop-shadow-2xl '/>
      </div>
    </div>
  )
}

export default Banner;