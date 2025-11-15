
import Header from "./Components/Header/header.jsx"
import Nosotros from './Components/Nosotros/nosotros.jsx';
import Footer from './Components/Footer/footer.jsx';
import Contacto from './Components/Contacto/contacto.jsx';
import Inicio from './Components/Inicio/inicio.jsx';
import Servicios from './Components/Servicios/servicios.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "./App.css";




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,     
    });
  }, []);

  return (
    <div className='app'>

      <BrowserRouter>

        <Header/>

        <Routes>

          <Route path="/" element={<Inicio/>} />

          <Route path="/Contacto" element={<Contacto/>} />

          <Route path="/Nosotros" element={<Nosotros/>} />

          <Route path="/Servicios" element={<Servicios/>} />

        </Routes>

        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
