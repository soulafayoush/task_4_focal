import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card } from 'react-bootstrap';

const FAQAccordion = ({ items }) => {
  return (
    <div className="d-flex justify-content-start align-items-start min-vh-100 p-3">
      <div className="w-100 d-md-inline-block" style={{ maxWidth: '900px' }}>
        <Accordion>
          {items.map((item, index) => (
            <Card 
              key={index} 
              className="mb-3"
              style={{ overflow: 'hidden' }} 
            >
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body className="text-wrap">
                {item.answer}
              </Accordion.Body>
            </Card>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQAccordion;
