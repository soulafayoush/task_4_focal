import React from 'react';
import { Card } from 'react-bootstrap';

const DoctorCard = ({ imgSrc, name, title }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;
