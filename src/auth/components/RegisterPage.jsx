

export const RegisterPage = () => {
  return (
    <>
      <section className='registro-usuarios'>
        <div className='container'>
          <div className='titulo col-3'>
           <div> Registro usuario</div>
          </div>
          <div className='registro col-9'>
            <div className="row-3">
              <input type="text" placeholder='Nombre'/>
            </div>
            <div className="row-3">
              <input type="text" placeholder='Correo'/>
            </div>
            <div className="row-3">
              <input type="text" placeholder='Password'/>
            </div>
            <div className="row-3">
              <a href="">Login</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
