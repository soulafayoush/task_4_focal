import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; 

const Footer = ({ medicio, usefulLinks, ourServices, hicSolutasept, nobisIllum }) => {
  return (
    <footer className=" text-dark py-4 text-start w-100">
      <Container fluid>
        <Row>
          <Col md={3}>
            <h5 className="fs-5 mb-3">Medicio</h5>
            <p className="mb-2">{medicio.address}</p>
            <p className="mb-2">{medicio.city}</p>
            <p className="mb-2"><strong>Phone:</strong> {medicio.phone}</p>
            <p className="mb-4"><strong>Email:</strong> {medicio.email}</p>
            <div className="d-flex mb-4">
              <a href={medicio.facebook} className="social-icon" aria-label="Facebook">
                <FaFacebook className="fs-7" />
              </a>
              <a href={medicio.twitter} className="social-icon" aria-label="Twitter">
                <FaTwitter className="fs-7" />
              </a>
              <a href={medicio.instagram} className="social-icon" aria-label="Instagram">
                <FaInstagram className="fs-7" />
              </a>
              <a href={medicio.linkedin} className="social-icon" aria-label="LinkedIn">
                <FaLinkedin className="fs-7" />
              </a>
            </div>
          </Col>

          <Col md={2}>
            <h5 className="fs-5 mb-3">Useful Links</h5>
            <ul className="list-unstyled">
              {usefulLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-dark text-decoration-none">{link.text}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="fs-5 mb-3">Our Services</h5>
            <ul className="list-unstyled">
              {ourServices.map((service, index) => (
                <li key={index} className="mb-2">
                  <a href={service.href} className="text-dark text-decoration-none">{service.text}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="fs-5 mb-3">Hic solutasept</h5>
            {hicSolutasept.map((text, index) => (
              <p key={index} className="mb-2 fs-7">{text}</p>
            ))}
          </Col>

          <Col md={2}>
            <h5 className="fs-5 mb-3">Nobis illum</h5>
            {nobisIllum.map((text, index) => (
              <p key={index} className="mb-2 fs-7">{text}</p>
            ))}
          </Col>
        </Row>

        <hr className="border-dark" />
        <Row>
          <Col className="text-center">
            <p className="fs-7 mb-0">&copy; {new Date().getFullYear()} Medicio. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
