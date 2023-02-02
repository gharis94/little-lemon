import React from 'react'
import dish from '../../asset/dish.jpeg'
import didh from '../../asset/didh.jpeg'
import salad from '../../asset/salad.jpeg'
import Card from '../Card/Card'

const Menu = () => {
  return (
    <div className='flex flex-col mx-10 mt-10'>
      <div className='flex justify-between mt-10'>
          <p className='text-3xl font-semibold '>Specials</p>
          <button className='bg-yellow-300 px-10 rounded-lg'>Order</button>
      </div>
      <div className='flex justify-center items-center space-x-5 mt-24'>
        <Card img={dish}/>
        <Card img={didh}/>
        <Card img={salad}/>
      </div>
    </div>
  )
}

export default Menu