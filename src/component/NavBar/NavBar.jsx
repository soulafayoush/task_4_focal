import React, { useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

const NavBar = ({ logo, items }) => {
  const nav = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav.current.style.background = "white";
      } else {
        nav.current.style.background = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar ref={nav} expand="lg" className="bg-body-tertiary px-5 w-100" fixed="top text-bg-light p-3">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center position-relative px-2">
          <img src={logo?.img} alt={logo?.text} className="navbar-logo" />
        </Navbar.Brand>
        <div className="order-md-3 d-flex gap-5">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Button variant="primary" className="bg-button rounded-2">
            Make an Appointment
          </Button>
        </div>
        <Navbar.Collapse id="navbarScroll" className="flex-grow-0 gap-3">
          <Nav className="me-auto my-2 my-lg-0 gap-3" navbarScroll>
            {items?.map((element, index) => (
              element.dropdown ? (
                <NavDropdown key={index} title={element.name} id={`navbarScrollingDropdown${index}`}>
                  {element.subItems?.map((subItem, subIndex) => (
                    <NavDropdown.Item key={subIndex} href={`#${subItem.id}`}>
                      {subItem.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link key={index} href={`#${element.id}`}>
                  {element.name}
                </Nav.Link>
              )
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
