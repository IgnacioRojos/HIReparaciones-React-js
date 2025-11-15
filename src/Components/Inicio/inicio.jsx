import Image from "react-bootstrap/Image";
import carusell1 from "../../Assets/img/carusell1.jpg";
import carusel2 from "../../Assets/img/carusel2.jpg";
import carusel3 from "../../Assets/img/carusel3.jpg";
import test from "../../Assets/img/test.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./inicio.css";

const Inicio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mt-5 inicioContainer">

      {/* TITULO */}
      <h1 className="tituloInicio" data-aos="fade-down">
        Servicio Técnico Profesional
      </h1>
      <p className="subtituloInicio" data-aos="fade-up">
        Reparación de notebooks y computadoras con garantía y diagnóstico preciso.
      </p>

      {/* SECCIÓN PRINCIPAL */}
      <div className="row mt-5 roww">
        <div className="col-lg-6 col-12" data-aos="fade-right">
          <p className="textoPresentacion">
            Somos un grupo de personas que conformamos este emprendimiento, cuyo
            objetivo es ofrecer el servicio de reparación de notebooks o computadoras
            de escritorio. Contamos con una amplia variedad de herramientas y
            experiencia que nos permitirán solucionar tu problema.
            <br />
            <strong>¡No dudes en consultarnos!</strong>
          </p>

          {/* BENEFICIOS */}
          <div className="beneficios" data-aos="fade-up">
            <div className="beneficio">
              <i className="bi bi-tools"></i>
              <p>Diagnóstico gratuito</p>
            </div>
            <div className="beneficio">
              <i className="bi bi-lightning-charge"></i>
              <p>Reparación rápida</p>
            </div>
            <div className="beneficio">
              <i className="bi bi-shield-check"></i>
              <p>Garantía por escrito</p>
            </div>
          </div>

          {/* CTA */}
          <div className="ctaInicio" data-aos="zoom-in">
            <a href="#contacto" className="btn-cta">
              Contactarme ahora
            </a>
          </div>
        </div>

        {/* CARRUSEL */}
        <div className="col-lg-6 col-12" data-aos="fade-left">
          <Carousel>
            <Carousel.Item interval={1000}>
              <Image src={carusell1} className="d-block w-100" alt="Reparación de notebooks" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <Image src={carusel2} className="d-block w-100" alt="Herramientas de reparación" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={carusel3} className="d-block w-100" alt="Diagnóstico técnico" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={test} className="d-block w-100" alt="Trabajo realizado" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* POR QUÉ ELEGIRNOS */}
      <div className="porqueElegirnos" data-aos="fade-up">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Técnicos certificados con años de experiencia.</li>
          <li>Atención personalizada en cada reparación.</li>
          <li>Repuestos originales para mayor durabilidad.</li>
          <li>Seguimiento y soporte post-servicio.</li>
        </ul>
      </div>

    </div>
  );
};

export default Inicio;
