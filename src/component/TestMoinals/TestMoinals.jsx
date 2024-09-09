import React from 'react'

import { Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import TestMoinals from '../CardTestMoinals/CardTestMoinals';
const TestMoinal = () => {
    const Data = [
        { title: '2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip',
          imgSrc: '../../../public/assets/img/testimonials/testimonials-1.jpg',
          name: 'Dr. John Doe',
              },
        {   title: '2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip',
  
          imgSrc: '../../../public/assets/img/testimonials/testimonials-1.jpg',
          name: 'Dr. Jane Smith',
             },
        {  title: '2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip',
     
          imgSrc: '../../../public/assets/img/testimonials/testimonials-1.jpg',
          name: 'Dr. Alice Johnson',
           }]
  return (
    <div className='bg-light'>
    <Header text="TestMoinals" subText="Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions" />
<Row className="g-4">
  {Data.map((doctor, index) => (
    <Col key={index} xs={12} sm={8} md={4}>
      <TestMoinals
        imgSrc={doctor.imgSrc}
        name={doctor.name}
        title={doctor.title}
      />
    </Col>
  ))}
</Row>
</div>
  )
}

export default TestMoinal


