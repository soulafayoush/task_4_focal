import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

  
  const images = [
    '../../../public/assets/img/gallery/gallery-1.jpg',
    '../../../public/assets/img/gallery/gallery-2.jpg',
    '../../../public/assets/img/gallery/gallery-7.jpg',
    '../../../public/assets/img/gallery/gallery-3.jpg',
    '../../../public/assets/img/gallery/gallery-4.jpg',
    '../../../public/assets/img/gallery/gallery-5.jpg',
    '../../../public/assets/img/gallery/gallery-6.jpg',
    '../../../public/assets/img/gallery/gallery-8.jpg',
  ];
  const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
 
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000); 

  
      return () => clearInterval(interval);
    }, []);


    return (
      <div style={{     width: '100%', overflow: 'hidden', position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.7s ease-in-out',
            transform: `translateX(-${currentIndex * 155}px)` 
          }}
        >
            
          {images.concat(images).map((src, index) => (
            <div
              key={index}
              style={{
                minWidth: '150px',
                height: '150px',
                marginRight: '5px',
                position: 'relative',
                border: index % images.length === currentIndex ? '3px solid blue' : 'none' 
              }}
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: index === currentIndex ? 'blue' : 'gray',
                borderRadius: '50%',
                margin: '0 5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                boxShadow: index === currentIndex ? '0 0 10px rgba(0, 0, 255, 0.5)' : 'none', 
              }}
            />
          ))}
        </div>
      </div>
    );
  };


  
  export default CarouselComponent;







