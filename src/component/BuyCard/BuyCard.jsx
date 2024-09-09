import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ title, bodyText, footerText, buttonText }) => {
  const [isActive, setIsActive] = useState(false);

  const handleHeaderClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Card className="text-center mb-4" style={{ border: 'none', height: '100%' }}>
      <Card.Header 
        className={`border-0 ${isActive ? 'bg-primary text-white' : 'bg-light'}`}
        onClick={handleHeaderClick}
      >
        {title}
      </Card.Header>
      <Card.Body className="p-4 d-flex flex-column justify-content-center">
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          {bodyText}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted bg-light border-0">
        <Button variant="primary">{buttonText}</Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
