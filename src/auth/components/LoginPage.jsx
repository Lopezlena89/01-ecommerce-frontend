import { useContext } from "react";
import { Link } from "react-router-dom";
import { loginRequest } from "../../../api/auth";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {correo,password,onInputChange} = useForm({
    correo:'',
    password:''
  });
  console.log('render-login')
  const {login} = useContext(AuthContext);



  const loginSubmit = async(e) =>{
    e.preventDefault();
    const res = await loginRequest({correo,password})
    console.log(res.data.usuario);
    login(res.data.usuario)
  
  }


  return (
    <>
      <section className='usuarios'>
        <div className='container login'>
         <form onSubmit={loginSubmit}>
         <div className='titulo col-3'>
           <div> Login</div>
          </div>
          <div className='usuario col-9'>
            <div className="row-4">
              <input 
                type="email" 
                placeholder='Correo'
                name='correo'
                value={correo}
                onChange={onInputChange}
                />
            </div>
            <div className="row-4">
              <input 
              type="password" 
              placeholder='Password'
              name='password'
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className="row-4">
              <button className="btn btn-primary">Login</button>
              <Link  to="/register">Register</Link>
            </div>
          </div>
         </form>
        </div>
      </section>
    </>
  )
}
