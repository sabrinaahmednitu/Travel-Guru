import React from 'react';
import {
  Container,
  Form,
  Nav,
  Navbar,
} from 'react-bootstrap';
import icon from '../../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='container' >
      <Navbar expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="nav-img" src={icon} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="search">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form >
            <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1">News</Nav.Link>
              <Nav.Link href="#action2">Destination</Nav.Link>
              <Nav.Link href="#action1">Blog</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <button>Login</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
