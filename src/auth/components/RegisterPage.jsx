import { Link  } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import {registerRequest} from '../../../api/auth';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const RegisterPage = () => {

  const {nombre,correo,password,onInputChange} = useForm({
    nombre:'',
    correo:'',
    password:''
  });

  const {register} = useContext(AuthContext);

  const registerSubmit = async(e) =>{
    e.preventDefault();
    const res = await registerRequest({nombre,correo,password})
    console.log(res.data.usuario);
    register(res.data.usuario)
  }


  return (
    <>
      <section className='usuarios'>
        <form onSubmit={registerSubmit}>
          <div className='container'>
            <div className='titulo col-3'>
            <div> Registro usuario</div>
            </div>
            <div className='usuario col-9'>
              <div className="row-3">
                <input 
                  type="text" 
                  placeholder='Nombre'
                  name='nombre'
                  value={nombre}
                  onChange={onInputChange}
                  />
              </div>
              <div className="row-3">
                <input 
                type="email" 
                placeholder='Correo'
                name='correo'
                value={correo}
                onChange={onInputChange}
                />
              </div>
              <div className="row-3">
                <input 
                type="password" 
                placeholder='Password'
                name='password'
                value={password}
                onChange={onInputChange}
                />
              </div>
              <div className="row-3">
                <button className="btn btn-primary">Enviar</button>
                <Link  to="/login">Login</Link>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}
