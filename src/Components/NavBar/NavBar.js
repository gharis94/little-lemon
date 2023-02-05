import React,{useState} from 'react'
import logo from '../../asset/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'


const NavBar = ({scroll,home,menu,testinomial,about}) => {
  const [state,setState] =useState(false);
  return (
      <nav className=' relative' >
            <div  className = ' px-4 flex w-screen justify-between items-center relative  bg-white bg-opacity-50  bg-blur-sm drop-shadow-lg' >
            <img src={logo} className='h-10 '/>
            
            {!state && <div className='mr-5 sm:hidden'>
              <AiOutlineMenu className='h-6 w-6 text-gray-700 hover:text-yellow-400' onClick={()=>setState(true)}/>
            </div>}
            <div  className = 'hidden sm:flex space-x-6 mr-6 text-gray-700' >
                  <p className='hover:text-yellow-400 cursor-pointer'  onClick={()=>scroll(home)}>Home</p>
                  <p className='hover:text-yellow-400 cursor-pointer' onClick={()=>scroll(about)}>About us</p>
                  <p className='hover:text-yellow-400 cursor-pointer'  onClick={()=>scroll(menu)}>Menu</p>
                  <p className='hover:text-yellow-400 cursor-pointer' onClick={()=>scroll(testinomial)}>Testinomial</p>
            </div>
                  
              
        </div>
        {state && <div className='h-screen w-6/12 right-0 absolute bg-white  drop-shadow-xl bg-opacity-80 flex flex-col transition duration-500  ease-in-out'>
              <div className='py-2 pl-4  border-b-4 border-gray-300'>
                  <RxCross1 className='text-gray-500 h-6 w-6 hover:text-yellow-300 active:text-yellow-400' onClick={()=>setState(false)}/>                  
              </div>
              <div className='pl-4 space-y-4 mt-6 text-gray-600'>
                  <p className='hover:text-yellow-400 cursor-pointer'  onClick={()=>scroll(home)}>Home</p>
                  <p className='hover:text-yellow-400 cursor-pointer' onClick={()=>scroll(about)}>About us</p>
                  <p className='hover:text-yellow-400 cursor-pointer'  onClick={()=>scroll(menu)}>Menu</p>
                  <p className='hover:text-yellow-400 cursor-pointer' onClick={()=>scroll(testinomial)}>Testinomial</p>
              </div>
             </div>}
      </nav>
        
  )
}

export default NavBar