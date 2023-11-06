import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartButton from './CartButton'; // Importa el componente CartButton

const NavBar = () => {
  const openCart = () => {
    // Agrega la lógica para abrir el carrito aquí
    alert('Carrito de compras abierto');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartButton /> {/* Agrega el componente CartButton aquí */}
      </Container>
    </Navbar>
  );
};

export default NavBar;
