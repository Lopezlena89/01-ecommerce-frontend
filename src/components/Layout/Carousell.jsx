import { Carousel } from "react-bootstrap";

export const Carousell = () => {
  return (
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
  )
}
