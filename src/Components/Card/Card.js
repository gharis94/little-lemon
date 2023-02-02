import React from 'react'

const Card = ({img}) => {
  return (
    <div className = 'flex flex-col w-[250px] h-[400px] drop-shadow-2xl bg-white' >
        <img src={img} className='h-1/2'/>
        <div className='flex flex-col mx-2 '>
            <div className='flex justify-between tex-lg mt-1'>
                <p>Dish Name</p>
                <p>$12</p>

            </div>
            <p className='text-sm mt-8 mb-1'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        
    </div>
  )
}

export default Card