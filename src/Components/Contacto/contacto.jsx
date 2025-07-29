import Image from 'react-bootstrap/Image';
import "./contacto.css"
import telefono from "../../Assets/img/telefono.jpg"
import ig from "../../Assets/img/instagram.jpg"
import whatsapp from "../../Assets/img/whatsapp.jpg"



const Contacto = () =>{
    return(
		<>
			<div className="row">

				<div className="col-lg-12 col-12">
					<p className="principio">Es primordial tener una vía de comunicación clara con el cliente para poder conocer y satisfacer sus necesidades. Es por ello que podrán comunicarse con nosotros a través de:</p>
				</div>
				
			</div>

			<div className="row">
				<div className="col-lg-6 col-12" data-aos="flip-right">
					<div className="card" >
						<Image src={whatsapp} className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Contacto Whatsapp</h5>
							<p className="card-text">Aquí dejamos nuestro whatsapp para consultarnos. Llamar en el horario de ateción</p>
							<a href="https://wa.me/+5493517653114/?text=me%20gustaria%20pedir%20presupuesto" target="_black" className="btn btn-primary">Contactenos por whatsapp</a>
						</div>
					</div>
				</div>

				<div className="col-lg-6 col-12" data-aos="flip-right">
					<div className="card" >
						<Image src={telefono} className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Contacto Por Teléfono</h5>
							<p className="card-text">Llame si solicita una atención mas personal. Llamar en el horario de ateción</p>
							<a href="tel:+543517653114" className="btn btn-primary" target="_black">Presione aquí para llamar</a>
						</div>
					</div>
					
				</div>
			</div>

			<div className="row">

				<div className="col-lg-12 col-12">
					<h2>Para conocer más de nosotros podés seguirnos por  Instagram </h2>
				</div>
			</div>
			
			<div className="row">
				<div className="col-lg-12 col-12 ig" data-aos="flip-right">
					<div className="card" >
						<Image src={ig} className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Nuestro Instagram</h5>
							<a href="" className="btn btn-primary" target="_black">Seguinos Por Instagram</a>
						</div>
					</div>
					
				</div>
			</div>

			<div className="row">
				<div className="col-lg-12 col-12">
					
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.581266363358!2d-64.23112588429183!3d-31.425661003846383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a208ec64f9d3%3A0x9548d51a8e8b74db!2sMaestro%20Vidal%20%26%20Hector%20Paniza%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1649951771137!5m2!1ses-419!2sar" width="750" height="500" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mapa"></iframe>
					
				</div>
			</div>
		</>

    )
}

export default Contacto;