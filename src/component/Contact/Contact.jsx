import React from 'react';
import { Container } from 'react-bootstrap';
import Map from '../Map/Map';
import Header from '../Header/Header';

const Contact = () => {
  return (
   
    <Container fluid className="mt-5 p-0">
         <div className="App ">
      <Header text="Contact" subText="contact us this information about contact contact contact" />
    </div>
      <Map />
    </Container>
  );
};

export default Contact;
