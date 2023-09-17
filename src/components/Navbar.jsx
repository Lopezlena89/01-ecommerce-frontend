
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext';

export const Navbar = () => {

  const {logout} = useContext(AuthContext);

  const logOut = () =>{
    logout();
  }

  return (
    <nav className="navegador-home" >
        <img className="imagen-nav" src="" alt="" />
        <NavLink to="../main/home" >home</NavLink>
        <NavLink to="../main/entregas" >entregas</NavLink>
        <NavLink to="../main/envios">envios</NavLink>
        <NavLink to="../main/tienda">tienda</NavLink>
        <NavLink to="../main/tuzona">tuzona</NavLink>
        <NavLink to="../main/vende">vende</NavLink>
        <img className="imagen-nav" src="" alt="" />
        <button className='btn btn-primary' onClick={logOut}>
          LogOut
        </button>
    </nav>  

  )
}
