import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Schedule from './components/Schedule/Schedule'
import RegisterForm from './components/RegisterForm/RegisterForm'
import Speakers from './components/Speakers/Speakers'
import About from './components/About/About'
import Home from './components/Home/Home'
const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/speakers' element={<Speakers/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      
    </Routes>
  )
}

export default AllRoutes
