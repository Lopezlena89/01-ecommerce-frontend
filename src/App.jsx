import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoginPage } from './auth/components/LoginPage'
import { RegisterPage } from './auth/components/registerPage'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
    </>
  )
}
