import "./footer.css"

const Footer = () =>{
    return(
    
    <>
      <footer className="text-center mt-5" data-aos="fade-up-left">
        <p>
          📞 <a href="https://wa.me/5493517653114" target="_blank">3517653114</a> <br/>
          ✉️ <a href="mailto:h.i.r.reparaciones@gmail.com">h.i.r.reparaciones@gmail.com</a> <br/>
          🕒 Horario: Lun a Sáb de 9:00 a 18:00 <br/>
          📍 Héctor Paniza Esquina Maestro Vidal, Córdoba
        </p>
        <p className="small text-muted">&copy; 2025 H.I.R Reparaciones - Todos los derechos reservados.</p>
      </footer>
      

      <a href="https://wa.me/5493517653114" className="whatsapp-float" target="_blank" aria-label="Chatear por WhatsApp">
          💬
      </a>
    </>

    )
}

export default Footer;