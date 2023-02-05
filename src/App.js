import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Main from './Routes/Main';
import Booking from './Routes/Booking';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='booking' element={<Booking/>}/>
    </Routes>

  )
  
}

export default App;
