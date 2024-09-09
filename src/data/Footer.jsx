// src/App.js
import React from 'react';
import Footer from './components/Footer';

const App = () => {
  const medicio = {
    address: 'A108 Adam Street',
    city: 'New York, NY 535242',
    phone: '+123 456 7890',
    email: 'info@medicio.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  };

  const usefulLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About Us' },
    { href: '#services', text: 'Services' },
    { href: '#terms', text: 'Terms of Service' },
    { href: '#privacy', text: 'Privacy Policy' }
  ];

  const ourServices = [
    { href: '#web-design', text: 'Web Design' },
    { href: '#web-development', text: 'Web Development' },
    { href: '#product-management', text: 'Product Management' },
    { href: '#marketing', text: 'Marketing' },
    { href: '#graphic-design', text: 'Graphic Design' }
  ];

  const hicSolutasept = [
    'lkjhghjklp;oiuy',
    'lkjhgfghjk',
    'lkjhgfghjk',
    'lkjhgfghjk',
    'lkjhgfghjk'
  ];

  const nobisIllum = [
    'A bbbb',
    'A bbbb',
    'A bbbb',
    'A bbbb',
    'A bbbb'
  ];

  return (
    <div>
   
      <Footer 
        medicio={medicio}
        usefulLinks={usefulLinks}
        ourServices={ourServices}
        hicSolutasept={hicSolutasept}
        nobisIllum={nobisIllum}
      />
    </div>
  );
};

export default App;
