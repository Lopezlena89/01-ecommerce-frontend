
import { Carousell } from "./Layout/Carousell";
import {Footer} from "./Layout/Footer";
import { Section } from "./Layout/Section";
import { SectionTienda } from "./Layout/SectionTienda";
import { Ventas } from "./Layout/Ventas";


export const HomePage = () => {
    console.log('home page')
    
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
            <Section/>
            <Carousell/>
            <SectionTienda/>
            <Ventas/>
            <Footer/>
        </main>
    </div>
   </>
  )
}
