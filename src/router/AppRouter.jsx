import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/components/LoginPage'
import { RegisterPage } from '../auth/components/registerPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home Page</h1>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
  )
}
