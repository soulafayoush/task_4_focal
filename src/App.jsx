import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './component/NavBar/NavBar'
import DarkVariantExample from './component/Slider/Slider'
import Footer from './component/Footer/Footer'
import './App.css'
import CustomForm from './component/Form/Form'
import Contact from './component/Contact/Contact'
import Question from './component/Question/Question'
import Pricing from './component/Pricing/Pricing'
import Gallery from './component/Gallery/Gallery'
import Doctor from './component/Doctor/Doctor'
import TestMoinal from './component/TestMoinals/TestMoinals'
import AboutUs from './component/AboutUs/AboutUs'
import Services from './component/Services/Services'
function App() {
  const [count, setCount] = useState(0)

  const logo = {
    img: "/public/assets/img/logo.png",
  };


    const items = [
      { id: 'Home', name: 'Home' },
      { id: 'About', name: 'About' },
      { id: 'Service', name: 'Service' },
      {
        id: 'Department',
        name: 'Department',},
        { id: 'Doctor', name: 'Doctor' },
      {  id:"dropdown",
        name:"dropdown",
        dropdown: true, 
        subItems: [
          { id: 'dropdown', name: 'dropdown' },
          { id: 'dropdown', name: 'Ndropdown' },
          { id: 'dropdown', name: 'dropdown' },
        ],
      },
     
      { id: 'Contact', name: 'Contact' },
    ];
   
    const images = [
      '../public/assets/img/hero-carousel/hero-carousel-2.jpg',
      '../public/assets/img/hero-carousel/hero-carousel-3.jpg',
      '../public/assets/img/hero-carousel/hero-carousel-1.jpg'
    ];
  
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
    <>
      <div>
   <NavBar  logo={logo} items={items} />
   <DarkVariantExample images={images} />
   <AboutUs />
 <Services/>
    
      <TestMoinal/>
      <Doctor />
      <Gallery />
      <Pricing/>
      <Question />
      <Contact />
   <CustomForm/>
    <Footer 
        medicio={medicio}
        usefulLinks={usefulLinks}
        ourServices={ourServices}
        hicSolutasept={hicSolutasept}
        nobisIllum={nobisIllum}
      />
    
 </div>
    </>
  )
}

export default App
