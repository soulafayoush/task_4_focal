import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DoctorCard from '../DoctorCard/DoctorCard';
import Header from '../Header/Header';
const doctorData = [
  {
    imgSrc: '../../../public/assets/img/doctors/doctors-1.jpg',
    name: 'Dr. John Doe',
    title: 'Cardiologist',
  },
  {
    imgSrc: '../../../public/assets/img/doctors/doctors-2.jpg',
    name: 'Dr. Jane Smith',
    title: 'Neurologist',
  },
  {
    imgSrc: '../../../public/assets/img/doctors/doctors-3.jpg',
    name: 'Dr. Alice Johnson',
    title: 'Dermatologist',
  },
  {
    imgSrc: '../../../public/assets/img/doctors/doctors-4.jpg',
    name: 'Dr. Bob Brown',
    title: 'Orthopedic Surgeon',
  },
];

const Doctor = () => {
  return (
    <div className='bg-light'>
          <Header text="Doctor" subText="Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions" />
      <Row className="g-4">
        {doctorData.map((doctor, index) => (
          <Col key={index} xs={12} sm={6} md={3}>
            <DoctorCard
              imgSrc={doctor.imgSrc}
              name={doctor.name}
              title={doctor.title}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Doctor;
