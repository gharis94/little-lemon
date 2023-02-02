import React from 'react'

const Booking = () => {
  return (
    <div className='h-screen flex justify-center items-center' style = {{backgroundColor: '#495E57'}} >
        <div className=' bg-white rounded-lg px-10 py-20'>
            <form form className = 'flex flex-col' >
                
                    <label htmlFor='date'>Date:</label>
                    <input id='date' type='date'/>
                    <label htmlFor='date'>Date:</label>
                    <input id='date' type='date'/>
                
                
            </form>
        </div>
    </div>
  )
}

export default Booking