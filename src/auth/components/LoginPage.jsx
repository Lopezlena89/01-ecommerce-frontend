import React from 'react'

export const LoginPage = () => {
  return (
    <>
      <section className='registro-usuarios'>
        <div className='container login'>
          <div className='titulo col-3'>
           <div> Login</div>
          </div>
          <div className='registro col-9'>
            <div className="row-4">
              <input type="text" placeholder='Correo'/>
            </div>
            <div className="row-4">
              <input type="text" placeholder='Password'/>
            </div>
            <div className="row-4">
              <a href="">Registro</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
