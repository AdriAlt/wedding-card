import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='header-logo'>Adri y Cris</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#agendar">AGENDAR FECHA</Nav.Link>
              <NavDropdown title="INFORMACION" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                CEREMONIA & FIESTA
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              CONSIDERACIONES
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="#regalos">REGALOS</Nav.Link>
              <Nav.Link eventKey={2} href="#confirmar">
                CONFIRMAR ASISTENCIA
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
 
export default Header;