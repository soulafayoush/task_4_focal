import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../BuyCard/BuyCard';
import Header from '../Header/Header';

const cardData = [
  {
    title: "Free",
    bodyText: "Discover the basics with our free plan. It includes fundamental features and support.",
    buttonText: "Get Free",
    footerText: "Available now"
  },
  {
    title: "Business",
    bodyText: "Expand your capabilities with our Business plan. Includes additional features and priority support.",
    buttonText: "Upgrade",
    footerText: "2 days ago"
  },
  {
    title: "Ultimate",
    bodyText: "Unlock all features with our Ultimate plan. Includes all features, priority support, and more.",
    buttonText: "Get Ultimate",
    footerText: "1 week ago"
  },
  {
    title: "Developer",
    bodyText: "For developers who need advanced tools and customizations. Includes developer support and API access.",
    buttonText: "Start Now",
    footerText: "1 month ago"
  }
];

const Pricing = () => {
  return (
    <div className="container mt-5">
      <Header text="Our Pricing Plans" subText="Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions" />
    
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {cardData.map((card, index) => (
          <div className="col" key={index}>
            <ProductCard 
              title={card.title}
              bodyText={card.bodyText}
              footerText={card.footerText}
              buttonText={card.buttonText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
