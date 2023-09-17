import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/components/LoginPage"
import { RegisterPage } from "../auth/components/RegisterPage"


export const AuthRouter = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
  )
}