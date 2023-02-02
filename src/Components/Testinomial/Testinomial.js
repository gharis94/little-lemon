import React from 'react'
import FeedComponent from '../FeedComponent/FeedComponent'

const Testinomial = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full relative '>
       <p className='text-white absolute top-32 text-2xl '>Testinomial</p>
      
      <div className='flex  space-x-4  '>
        <FeedComponent/>
        <FeedComponent/>

      </div>
    </div>
  )
}

export default Testinomial