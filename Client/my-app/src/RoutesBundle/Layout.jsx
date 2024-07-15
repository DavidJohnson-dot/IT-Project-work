import React from 'react'
import LandingPage from "../Routes/LandingPage"
import { Route, Routes } from 'react-router-dom'
import SignUp from '../Routes/SignUp'
import Login from '../Routes/Login'
const Layout = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/SignUp' element={<SignUp/>}  />
          <Route path='/Login' element={<Login/>} />
      </Routes>
        
    </div>
  )
}

export default Layout