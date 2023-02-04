import React from 'react';
import {useNavigate} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Booking = () => {
    const navigateTo=useNavigate();
    const formik=useFormik({
      initialValues:{
        date:'',
        time:'',
        displayName:'',
        email:'',
        location:'',
        persons:''
      },
      onSubmit:values=>{
        alert(JSON.stringify(values,null,2))
      },
      validationSchema:Yup.object({
        date: Yup.date().required('Required'),
        time: Yup.string().required('Required')
        
      })
    })
    
  return (
    <div className='h-screen flex justify-center items-center relative' style = {{backgroundColor: '#495E57'}} >
        <div className='absolute top-10 left-10 p-3 rounded-full bg-yellow-300 drop-shadow-lg cursor-pointer' onClick={()=>navigateTo('/')}>
            <BiArrowBack className='h-6 w-6'/>
        </div>
        <div className=' bg-white rounded-lg px-10 py-10'>
            <p className='text-center mb-10 font-semibold text-2xl'>Reservation</p>
            <form onSubmit={formik.handleSubmit}  className = 'flex flex-col space-y-2' >
                
                    <label htmlFor='date'>Date:</label>
                    <input 
                      id='date' 
                      type='date'
                      name='date' 
                      onChange={formik.handleChange} 
                      value={formik.values.date}/>

                    <label htmlFor='time'>Time:</label>
                    <select 
                      id='time' 
                      name='time'
                       
                      onChange={formik.handleChange} 
                      value={formik.values.time}>
                        
                        <option value='10'>10:00</option>
                        <option value='9'>9:00</option>
                        <option value='8'>8:00</option>
                        <option value='7'>7:00</option>
                        <option value='6'>6:00</option>
                        <option value='5'>5:00</option>
                      
                    </select>

                    <label htmlFor='name'>Name:</label>
                    <input
                      placeholder='Enter Name' 
                      id='name' 
                      type='text'
                      name='displayName' 
                      onChange={formik.handleChange} 
                      value={formik.values.displayName}/>

                    <label htmlFor='email'>Email:</label>
                    <input 
                    placeholder='Enter Email'
                      id='email' 
                      type='email'
                      name='email' 
                      onChange={formik.handleChange} 
                      value={formik.values.email}/>
                    <div className='space-x-1'>
                      <label htmlFor='uptown'>Uptown</label>
                    <input 
                      id='uptown' 
                      type='radio'
                      name='location'
                      checked
                      onChange={formik.handleChange} 
                      value={'Uptown'}/>

                      <label htmlFor='downtown'>Downtown</label>
                    <input 
                      id='downtown' 
                      type='radio'
                      name='location'
                      checked
                      onChange={formik.handleChange} 
                      value={'Downtown'}/>
                    </div>
                    

                    <label htmlFor='person'>Persons</label>
                    <input 
                      placeholder='Enter No. of person'
                      id='person' 
                      type='number'
                      name='persons'
                      onChange={formik.handleChange} 
                      value={formik.values.persons}/>
                    <button type='submit' className='bg-yellow-400 mt-4 rounded-lg py-1 text-gray-500 hover:bg-yellow-500 active:bg-yellow-500'>Reserved</button>
            </form>
        </div>
    </div>
  )
}

export default Booking