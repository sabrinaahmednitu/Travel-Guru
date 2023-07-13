import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import icon from '../../../images/logo.png';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/destination">Destination</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            {user ? (
              <button className="btn btn-primary" onClick={handleSignOut}>
                Signout
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
