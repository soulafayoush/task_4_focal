import React from 'react';
import { Card } from 'react-bootstrap';

const TestMoinals = ({ imgSrc, name, title }) => {
  return (
    <Card>
        <div className='bg-light  w-100'>  <Card.Text>{title}</Card.Text></div>
       
     
      <Card.Body>
        <div  className="border  border-3 rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: '100px', height: '100px',}}>
      <Card.Img style={{
                width: '50%',
                height: '50%',
            
                borderRadius: '50%'}} variant="top" src={imgSrc} />
                </div>
        <Card.Title>{name}</Card.Title>
       
      </Card.Body>
    </Card>
  );
};

export default TestMoinals;
