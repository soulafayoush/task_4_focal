import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import CardComponent from '../Card/Card'; 
import { FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa'; 

const CustomForm = () => {
  return (
    <Container fluid className="mt-5">
      <Row className="g-4"> 
     
        <Col md={6} className="d-flex flex-column align-items-start">
          <div className="w-100 mb-3">
            <CardComponent 
              icon={<FaLocationArrow />}
              title="Our Locations"
              description="Find us at the corner of 5th Ave and Main St."
            />
          </div>

          <Row className="w-100">
            <Col xs={12} md={6} className="mb-3">
              <CardComponent 
                icon={<FaEnvelope />}
                title="Contact"
                description="Send us an email at contact@example.com."
              />
            </Col>
            <Col xs={12} md={6}>
              <CardComponent 
                icon={<FaPhone />}
                title="Call Us"
                description="Call us at (123) 456-7890."
              />
            </Col>
          </Row>
        </Col>

        <Col md={6} className="d-flex justify-content-end">
          <Form className="p-4 border rounded w-100" style={{ maxWidth: '600px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Row className="mb-3">
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formLabel1" className="w-100">
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    className="form-control" 
                    style={{ height: '60px' }} 
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formLabel2" className="w-100">
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    className="form-control" 
                    style={{ height: '60px' }} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Enter subject" 
                className="form-control" 
                style={{ height: '60px' }} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
                as="textarea" 
                rows={4} 
                placeholder="Enter your message" 
                className="form-control" 
                style={{ height: '150px' }} 
              />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomForm;
