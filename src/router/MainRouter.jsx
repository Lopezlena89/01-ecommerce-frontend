
import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage,Entregas,Envios,Tienda,Tuzona,Vende  } from "../components"
import { Navbar } from "../components/Layout/Navbar"

export const MainRouter = () => {


  return (
       <>
          <Navbar/>
          <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/entregas' element={<Entregas/>}/>
            <Route path='/envios' element={<Envios/>}/>
            <Route path='/tienda' element={<Tienda/>}/>
            <Route path='/tuzona' element={<Tuzona/>}/>
            <Route path='/vende' element={<Vende/>}/>
            <Route path="/*" element={<Navigate to="/home" />} />
            
          </Routes>
       </>
    
  )
}
