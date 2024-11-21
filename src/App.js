import "./App.css";
import React , { useRef }from "react";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Title from "./components/Title/Title";
import PreviousEvents from './components/PreviousEvents/PreviousEvents'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import Footer from "./components/Footer/Footer";

const App = () => {

  const heroRef = useRef(null)
  const eventRef = useRef(null)
  const contactusRef = useRef(null)

  const scrollToSection = (ref) => {
    const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY; 
    const offsetPosition = elementPosition - window.innerHeight * 0.2;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Header scrollToSection={scrollToSection}  heroRef={heroRef} eventRef={eventRef} contactusRef={contactusRef}/>
      <div ref={heroRef}></div>
      <Section1 />
      <div ref={eventRef}></div>
      <Title title="Previous Events" />
      <PreviousEvents/>
      <Title title="Upcoming Events" />
      <UpcomingEvents/>
      <Footer/>
      <div ref={contactusRef}></div>
    </div>
  );
};

export default App;
