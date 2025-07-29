import Image from 'react-bootstrap/Image';
import cambioPantalla from "../../Assets/img/cambio.jpg";
import mother from "../../Assets/img/mother.jpg";
import laptopreparar from "../../Assets/img/laptopreparar.jpg";
import teclado from "../../Assets/img/teclado.jpg";
import logo4 from "../../Assets/img/logo4.jpg";
import "./servicios.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Servicios = () =>{
	useEffect(() => {
  		AOS.init({ duration: 1000, once: true });
	}, []);


    return(
		<>
			<div className="row">
				<div className="col-lg-12">
					<div className="jumbotron jumbotron-fluid fila">
						<div className="container">
							<h1 className="display-4 oracion">Cambio Pantalla</h1>
							<p className="lead">Realizamos el cambio o reparación de pantallas dependiendo el caso.</p>
							<Image src={cambioPantalla} className="cambioPantalla" data-aos="fade-left"/>
						</div>
					</div>
				</div>

			</div>

			<div className="row">

				<div className="col-lg-12">
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<h1 className="display-4 oracion">Reparación MotherBoard</h1>
							<p className="lead">Tras un analisis con nuestras herramientas, buscamos la mejor solución para tu notebook.</p>
							<Image src={mother} className="reparacionMother" data-aos="fade-right"/>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-12">
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<h1 className="display-4 oracion">Cambios De Piezas Rotas</h1>
							<p className="lead">Procedemos a cambiar cualquier parte de tu notebook rota por una nueva.</p>
							<Image src={laptopreparar} className="cambioPiezas" data-aos="fade-left"/>
						</div>
					</div>
				</div>
			</div>

			<div className="row">

				<div className="col-lg-12">
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<h1 className="display-4 oracion">Reemplazo De Teclados</h1>
							<p className="lead">Analizamos la falla del teclado y procedemos a repararlo o cambiarlo.</p>
							<Image src={teclado} className="teclado" data-aos="fade-right"/>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-12">
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<h1 className="display-4 oracion">Software</h1>
							<p className="lead">Nos encargamos de renovar tu sistema operativo para lograr que tu equipo funcione mejor y más rápido.</p>
							<Image src={logo4} className="Software" data-aos="fade-right" />
						</div>
					</div>
				</div>

			</div>

			<div className="row">
				<div className="col-lg-12">
					<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4 tituloBanner" data-aos="zoom-in-up">Ofrecemos otros servicios además de los nombrados anteriormente.</h1>
						<a href="https://wa.me/+5493516710707/?text=me%20gustaria%20pedir%20presupuesto" className='wpconsulta'><p className="lead consulta" data-aos="zoom-in-up">Consulte a nuestro whatsapp por más servicios o dudas.</p></a>
					</div>
					</div>
				</div>
				
			</div>
		</>
    )

}

export default Servicios