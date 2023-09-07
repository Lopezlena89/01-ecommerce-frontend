import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage,LoginPage,RegisterPage} from '../auth/components'
import {Entregas,Envios,Tienda,Tuzona,Vende} from '../auth/navegador'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/entregas' element={<Entregas/>}/>
        <Route path='/envios' element={<Envios/>}/>
        <Route path='/tienda' element={<Tienda/>}/>
        <Route path='/tuzona' element={<Tuzona/>}/>
        <Route path='/vende' element={<Vende/>}/>
        <Route path='/*' element={<Navigate to="/login"/>}/>
        
    </Routes>
  )
}
