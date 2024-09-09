import React from 'react';
import FAQAccordion from '../Accordion/Accordion'; 
import { Container } from 'react-bootstrap'; 
import Header from '../Header/Header';

const Question = () => {
  const faqItems = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fuga, veniam expedita nemo ipsum, error esse dolores quo quisquam deserunt accusamus reiciendis omnis. Saepe quam facilis laborum officia repudiandae perferendis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fuga, veniam expedita nemo ipsum, error esse dolores quo quisquam deserunt accusamus reiciendis omnis. Saepe quam facilis laborum officia repudiandae perferendis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fuga, veniam expedita nemo ipsum, error esse dolores quo quisquam deserunt accusamus reiciendis omnis. Saepe quam facilis laborum officia repudiandae perferendis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit consectet urconsecteturco nsectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fuga, veniam expedita nemo ipsum, error esse dolores quo quisquam deserunt accusamus reiciendis omnis. Saepe quam facilis laborum officia repudiandae perferendis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing consectetur consectetur consectetur elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fuga, veniam expedita nemo ipsum, error esse dolores quo quisquam deserunt accusamus reiciendis omnis. Saepe quam facilis laborum officia repudiandae perferendis."
    }
  ];

  return (
    <Container fluid className="mt-5 p-0 bg-light">
      <div className="App">
        <Header text="Frequently Asked Questions" subText="Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions" />
        <FAQAccordion items={faqItems} />
      </div>
    </Container>
  );
}

export default Question;
