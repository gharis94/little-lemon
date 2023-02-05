import React from 'react'

const Card = ({img}) => {
  return (
    <div className = 'flex flex-col max-w-[200px] h-[20rem] drop-shadow-2xl bg-white overflow-hidden' >
        <img src={img} alt='dish' className='h-1/2'/>
        <div className='flex flex-col mx-2 '>
            <div className='flex justify-between tex-lg mt-1'>
                <p>Dish Name</p>
                <p>$12</p>

            </div>
            <p className='text-sm mt-8 mb-1'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem </p>
        </div>
        
    </div>
  )
}

export default Card