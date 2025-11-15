import Image from "react-bootstrap/Image";
import "./contacto.css";
import telefono from "../../Assets/img/telefono.jpg";
import ig from "../../Assets/img/instagram.jpg";
import whatsapp from "../../Assets/img/whatsapp.jpg";

const Contacto = () => {
  const instagramURL = "https://www.instagram.com/";

  return (
    <>
      {/* Texto inicial */}
      <section className="contacto-container container" data-aos="fade-up">
        <p className="contacto-intro">
          Estamos para ayudarte. Comunicate con nosotros por los siguientes
          medios y recibí atención rápida, clara y profesional.
        </p>
      </section>

      {/* Cards */}
      <section className="container mt-4">
        <div className="row g-4 justify-content-center">

          {/* WhatsApp */}
          <div className="col-lg-4 col-md-6 col-12" data-aos="zoom-in">
            <div className="contact-card">
              <Image src={whatsapp} className="contact-img" alt="WhatsApp" />
              <div className="contact-body">
                <h3>WhatsApp</h3>
                <p>Consultas rápidas y presupuestos inmediatos.</p>
                <a
                  href="https://wa.me/5493517653114/?text=Hola,%20quisiera%20hacer%20una%20consulta"
                  className="btn-contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar mensaje
                </a>
              </div>
            </div>
          </div>

          {/* Teléfono */}
          <div className="col-lg-4 col-md-6 col-12" data-aos="zoom-in">
            <div className="contact-card">
              <Image src={telefono} className="contact-img" alt="Teléfono" />
              <div className="contact-body">
                <h3>Teléfono</h3>
                <p>Comunicación directa y asesoramiento inmediato.</p>
                <a href="tel:+543517653114" className="btn-contact">
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>

          {/* Email (opcional) */}
          {/* 
          <div className="col-lg-4 col-md-6 col-12" data-aos="zoom-in">
            <div className="contact-card">
              <Image src={mail} className="contact-img" alt="Email" />
              <div className="contact-body">
                <h3>Email</h3>
                <p>Consultas más largas o envíos de información.</p>
                <a href="mailto:hirreparaciones@gmail.com" className="btn-contact">
                  Enviar correo
                </a>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Instagram */}
      <section className="container mt-5">
        <h2 className="contact-title" data-aos="fade-up">Seguinos en Instagram</h2>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-12" data-aos="zoom-in">
            <div className="contact-card">
              <Image src={ig} className="contact-img" alt="Instagram" />
              <div className="contact-body">
                <h3>Instagram</h3>
                <p>Mirá nuestros trabajos, actualizaciones y tips de cuidado.</p>
                <a href={instagramURL} className="btn-contact" target="_blank">
                  Ir al perfil
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="container mt-5">
        <h2 className="contact-title" data-aos="fade-up">Nuestra Ubicación</h2>

        <div className="mapa-container" data-aos="zoom-in-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.581266363358!2d-64.23112588429183!3d-31.425661003846383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a208ec64f9d3%3A0x9548d51a8e8b74db!2sMaestro%20Vidal%20%26%20Hector%20Paniza%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1649951771137!5m2!1ses-419!2sar"
            loading="lazy"
            className="mapa"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contacto;
