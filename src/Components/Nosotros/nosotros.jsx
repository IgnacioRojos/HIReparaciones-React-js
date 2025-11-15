import Image from "react-bootstrap/Image";
import { FaTools, FaShieldAlt, FaClock } from "react-icons/fa";
import logo2 from "../../Assets/img/logo2.jpg";
import "./nosotros.css";

const Nosotros = () => {
    return (
        <>
            <section className="nosotros-section container">

                {/* TÍTULO */}
                <div className="row justify-content-center">
                    <div 
                        className="col-12 text-center"
                        data-aos="fade-down"
                        data-aos-duration="800"
                    >
                        <h2 className="nosotros-titulo">Sobre Nosotros</h2>
                        <p className="nosotros-subtitulo">
                            Servicio técnico confiable, transparente y rápido para tu equipo.
                        </p>
                    </div>
                </div>

                {/* TEXTO PRINCIPAL */}
                <div className="row justify-content-center mt-3">
                    <div 
                        className="col-lg-8 col-md-10 col-12 text-center"
                        data-aos="fade-up"
                        data-aos-duration="900"
                    >
                        <p className="nosotros-texto">
                            En H.I.R Reparaciones entendemos que tus dispositivos no son solo herramientas:
                            son parte esencial de tu día a día. Nuestro objetivo es brindarte soluciones rápidas, 
                            seguras y eficientes ante cualquier inconveniente técnico que se presente.
                            <br /><br />
                            Contamos con experiencia, herramientas de precisión y un compromiso total con cada diagnóstico,
                            reparación y mantenimiento, para garantizarte un servicio confiable.
                        </p>
                    </div>
                </div>

                {/* IMAGEN CENTRAL */}
                <div className="row justify-content-center mt-4">
                    <div
                        className="col-auto"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    >
                        <Image src={logo2} className="nosotros-imagen" alt="Logo HIR" />
                    </div>
                </div>

                {/* VALORES / DIFERENCIALES */}
                <div className="row justify-content-center mt-5 g-4">

                    <div 
                        className="col-lg-4 col-md-6 col-12"
                        data-aos="fade-up"
                    >
                        <div className="valor-card">
                            <FaTools className="valor-icon" />
                            <h4>Reparación Profesional</h4>
                            <p>Trabajamos con herramientas de precisión y procesos técnicos certificados.</p>
                        </div>
                    </div>

                    <div 
                        className="col-lg-4 col-md-6 col-12"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        <div className="valor-card">
                            <FaShieldAlt className="valor-icon" />
                            <h4>Garantía y Transparencia</h4>
                            <p>Diagnósticos claros, precios honestos y respaldo en cada reparación.</p>
                        </div>
                    </div>

                    <div 
                        className="col-lg-4 col-md-6 col-12"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="valor-card">
                            <FaClock className="valor-icon" />
                            <h4>Atención Rápida</h4>
                            <p>Entendemos tu urgencia, por eso priorizamos la velocidad sin perder calidad.</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Nosotros;
