import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'
import { RegisterPage } from '../pages/RegisterPage'
import { LoginPage } from '../pages/LoginPage'
import NoteContainer from '../pages/NoteContainer'

const AllRoutes = ({ setLogin }) => {
  
  return (
    
    <Routes>
    <Route path='/' element={<Homepage></Homepage>}></Route>
    <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
    <Route path='/login' element={<LoginPage setLogin={setLogin}></LoginPage>}></Route>
    <Route path='/notes' element={<NoteContainer></NoteContainer>}></Route>
    </Routes>
    
  )
}

export default AllRoutes