
import { useContext } from 'react';
import {Route, Routes } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';
import {PublicRouter,PrivateRouter,AuthRouter,MainRouter} from './';





export const AppRouter = () => {

  const {user} = useContext(AuthContext);

  return (
    <Routes>
        
          <Route path='auth/*' element={
            <PublicRouter>
                <AuthRouter/>
            </PublicRouter>
          
          }/>

          <Route path={`main/*`} element={
            <PrivateRouter>
              <MainRouter/> 
            </PrivateRouter>
          }/>
        

        
    </Routes>
  )
}
