import Image from 'react-bootstrap/Image';
import "./inicio.css"
import carusell1 from "../../Assets/img/carusell1.jpg"
import carusel2 from "../../Assets/img/carusel2.jpg"
import carusel3 from "../../Assets/img/carusel3.jpg"
import test from "../../Assets/img/test.jpg"
import Carousel from 'react-bootstrap/Carousel';




const Inicio = () =>{
    return(
            
        
    <div className="row mt-5 roww">
      <div className="col-lg-6 col-12" data-aos="fade-right">
        <p className="textoPresentacion">
          Somos un grupo de personas que conformamos este emprendimiento, cuyo objetivo es ofrecer el servicio de reparación de notebooks o computadoras de escritorio. Contamos con una amplia variedad de herramientas y experiencia que nos permitirán solucionar tu problema. ¡No dudes en consultarnos!
        </p>
      </div>

      <div className="col-lg-6 col-12" >

        <Carousel>
          <Carousel.Item interval={1000}>
            <Image src={carusell1} className="d-block w-100" alt="Reparación de notebooks"/>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Image src={carusel2} className="d-block w-100" alt="Herramientas de reparación"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={carusel3} className="d-block w-100" alt="Diagnóstico técnico"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={test} className="d-block w-100" alt="Trabajo realizado"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

    
    )
}

export default Inicio;