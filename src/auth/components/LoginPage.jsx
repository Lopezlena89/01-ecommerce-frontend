import { Link  } from "react-router-dom";
import { loginRequest } from "../../../api/auth";
import { useForm } from "../../../hooks/useForm";

export const LoginPage = () => {

  const {correo,password,onInputChange} = useForm({
    correo:'',
    password:''
  });

  const loginSubmit = async(e) =>{
    e.preventDefault();
    const res = await loginRequest({correo,password})
    console.log(res);
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
              <button className="btn btn-primary">Sign-in</button>
              <Link  to="/register">Register</Link>
            </div>
          </div>
         </form>
        </div>
      </section>
    </>
  )
}
