import Image from 'react-bootstrap/Image';
import logo2 from "../../Assets/img/logo2.jpg"
import "./nosotros.css"

const Nosotros = () =>{
    return(
        <>
            <div className="row justify-content-center roww">
                <div className="col-lg-6 col-md-8 col-12 text-center">
                    <p className="textoIntroduccion">Somos conscientes que en la actualidad, los equipos informáticos se han vuelto una parte muy importante de nuestra vida personal y laboral. Es por ello, que nuestro fin es poder darles soluciones a los problemas que se le presenten con sus equipos informáticos de una manera rápida y eficiente. Para ello contamos con conocimiento, herramientas, experiencia y disponibilidad que los ofrecemos a su servicio.</p>
                </div>
            </div>

            <div className="row justify-content-center mb-4">
                <div className="col-auto">
                    <Image src={logo2} className="fotoDecoracion"/>
                </div>
            </div>
        </>
    )
}

export default Nosotros;