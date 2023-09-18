import { Navigate, Route, Routes } from 'react-router-dom';
import {PublicRouter,PrivateRouter,AuthRouter,MainRouter} from './';


export const AppRouter = () => {

  return (
    <Routes>
        
          <Route path='/auth/*' element={
            <PublicRouter>
                <AuthRouter/>
            </PublicRouter>
          
          }/>

          <Route path={`/main/*`} element={
            <PrivateRouter>
              <MainRouter/> 
            </PrivateRouter>
          }/>
          <Route path='/*' element={<Navigate to="/main/home"/>} />
        

        
    </Routes>
  )
}
