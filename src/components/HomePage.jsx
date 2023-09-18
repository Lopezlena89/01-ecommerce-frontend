import { Carousel } from "react-bootstrap";
import { Link, NavLink  } from "react-router-dom";


export const HomePage = () => {
  return (
   <>
    <div className="home-page"  >
        <main className="contenedor-home">
            <section className="inicio-home">
                <img className="imagen-inicio" src="../../imagenes/balance-110850_1280.jpg" alt="" />
                <div className='inicio-buscador'>
                    <form className='search-bar'>
                        <input type="text" placeholder="buscar"></input>
                        <button className='boton' type='submit'><span>Buscar</span></button>
                    </form>
                </div>
            </section>
            <section className='ventas'>
                <div className='ventas-1'>
                    <h2>Entregas</h2>
                    <p>¿Qué es Lorem Ipsum?
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos 
                    y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, 
                    sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual 
                    al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian 
                    pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                    el cual incluye versiones de Lorem Ipsum.¿Qué es Lorem Ipsum?
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
                    </p>
                </div>
                <div className='ventas-2'>
                    <h2>Envios</h2>
                    <p>¿Qué es Lorem Ipsum?
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos 
                    y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, 
                    sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual 
                    al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian 
                    pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                    el cual incluye versiones de Lorem Ipsum.¿Qué es Lorem Ipsum?
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
                    </p>
                </div>
            </section>
            <section className="carousel-1">
                <Carousel>
                    <Carousel.Item>
                        <div className="w-100 d-flex flex-column justify-content-center aling-item-center"
                        style={{background:'url(../../imagenes/lake-5933622_1280.jpg)', 
                        backgroundPosition:'center center',backgroundSize:'cover',
                        backgroundRepeat:'no-repeat',height:'500px'}}>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="w-100 d-flex flex-column justify-content-center aling-item-center"
                        style={{background:'url(../../imagenes/lake-2608425_1280.jpg)', 
                        backgroundPosition:'center center',backgroundSize:'cover',
                        backgroundRepeat:'no-repeat',height:'500px'}}>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="w-100 d-flex flex-column justify-content-center aling-item-center"
                        style={{background:'url(../../imagenes/mountains-1624284_1280.jpg)', 
                        backgroundPosition:'center center',backgroundSize:'cover',
                        backgroundRepeat:'no-repeat',height:'500px'}}>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
        </main>
    </div>
   </>
  )
}
