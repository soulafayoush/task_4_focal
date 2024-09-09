import React from 'react';
import { Card } from 'react-bootstrap';
import { FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa';

const CardComponent = ({ icon, title, description }) => {
  return (
    <Card className="shadow  border-2 rounded p-3 mb-3" style={{ width: '100%', maxWidth: '600px', height: 'auto' }}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center mb-3">
          <div
            className="border border-primary border-3 rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: '80px', height: '80px', borderStyle: 'dotted' }} 
          >
            <div className="fs-3 text-primary"> 
              {icon}
            </div>
          </div>
        </div>
        <Card.Title className="mb-1 text-truncate w-100 text-center" style={{ fontSize: '1.25rem' }}>
          {title}
        </Card.Title>
        <Card.Text className="text-truncate w-100 text-center" style={{ fontSize: '1rem' }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
