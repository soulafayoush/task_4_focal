import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample({ images }) {
  return (
    <Carousel indicators controls data-bs-theme="dark">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 custom-height"
            src={image}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption className="w-80 mx-auto bg-light p-3 rounded text-center">
            <h5>{`Slide ${index + 1} label`}</h5>
            <p>Some fixed text for this slide. It remains the same for all slides.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DarkVariantExample;
