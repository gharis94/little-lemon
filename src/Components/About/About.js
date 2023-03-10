import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-full'>
      <div className='mt-20 ml-8'>
        <p className='text-6xl'>Little Lemon</p>
          <p className='text-3xl mt-10'>California</p>
          <p className='my-10 pr-10'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</p>
      </div>
      <div className=' sm:relative flex space-x-1 justify-center'>
        
            <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8' alt='p1' className='h-[20rem] w-[15rem] object-fill  sm:absolute sm:right-[4rem] sm:top-20 rounded-lg'/>
            <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80' alt='p2' className='h-[20rem] w-[15rem] object-fill  sm:absolute sm:right-[15rem] sm:top-60 rounded-lg' />
            
        
      </div>
    </div>
  )
}

export default About