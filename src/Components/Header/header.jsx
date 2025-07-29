import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import Logo from "../../Assets/img/logoPagina.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                <Nav className="d-flex align-items-center flex-wrap">
                    <Image src={Logo} className="logo img-fluid me-2" alt="Logo HIR Reparaciones" />
                    <Nav.Link as={NavLink} to="/" end>
                    Inicio
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/Servicios">
                    Servicios
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/Nosotros">
                    Nosotros
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/Contacto">
                    Contacto
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>

    );
};

export default Header;
