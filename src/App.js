import "./App.css";

import React from "react";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Title from "./components/Title/Title";
import PreviousEvents from './components/PreviousEvents/PreviousEvents'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <Title title="Previous Events" />
      <PreviousEvents/>
      <Title title="Upcoming Events" />
      <UpcomingEvents/>
      <Footer/>
    </div>
  );
};

export default App;
