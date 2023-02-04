import React from 'react'


const NavBar = ({scroll,home,menu,testinomial,about}) => {
  return (
        <nav className='relative'>
            <div  className = 'flex space-x-4  ' >
              <p className='hover:text-yellow-400 cursor-pointer'  onClick={()=>scroll(home)}>Home</p>
              <p className='hover:text-yellow-400 cursor-pointer' onClick={()=>scroll(about)}>About us</p>
              <p className='hover:text-yellow-400 cursor-pointer'  onClick={()=>scroll(menu)}>Menu</p>
              <p className='hover:text-yellow-400 cursor-pointer' onClick={()=>scroll(testinomial)}>Testinomial</p>
            </div>
            
        </nav>
  )
}

export default NavBar