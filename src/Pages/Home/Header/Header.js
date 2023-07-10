import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import icon from '../../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="main-header">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img className="nav-img" src={icon} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="search d-flex">
              <i className="searchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
              <input
                className="searchBox"
                type="search"
                placeholder="Search your destination"
                style={{
                  backgroundColor: 'transparent',
                }}
              />
            </Form>
            <Nav
              className="me-auto"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">News</Nav.Link>
              <Nav.Link href="/destination">Destination</Nav.Link>
              <Nav.Link href="#action1">Blog</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Nav.Link href="/login" >
              <button className='login-btn' >Login</button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
