
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {


  const showSidebar = () =>{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
   
  }
  const hideSidebar = () =>{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

  const {logout,user} = useContext(AuthContext);
 
  const logOut = () =>{
    logout();
    
  }

  return (
    <nav className="navegador-home" >
        <div className='sidebar'>
          <span onClick={hideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span>
          <NavLink to="../main/home" >Home</NavLink>
          <NavLink to="../main/entregas" >entregas</NavLink>
          <NavLink to="../main/envios">envios</NavLink>
          <NavLink to="../main/tienda">tienda</NavLink>
          <NavLink to="../main/tuzona">tuzona</NavLink>
          <NavLink to="../main/vende">vende</NavLink>
          <button className='btn btn-outline-secondary logout' onClick={logOut}>
            Logout
          </button>
        </div>
        <div className='inside-nav'>
          <NavLink className='hideOnMovile' to="../main/home" >home</NavLink>
          <NavLink className='hideOnMovile' to="../main/entregas" >entregas</NavLink>
          <NavLink className='hideOnMovile' to="../main/envios">envios</NavLink>
          <NavLink className='hideOnMovile' to="../main/tienda">tienda</NavLink>
          <NavLink className='hideOnMovile' to="../main/tuzona">tuzona</NavLink>
          <NavLink className='hideOnMovile' to="../main/vende">vende</NavLink>
          <strong>{user.nombre}</strong>
          <button className='btn btn-outline-secondary hideOnMovile' onClick={logOut}>
            Logout
          </button>
          <span className='menu-button' onClick={showSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></span>
        </div>
        
    </nav>  

  )
}
