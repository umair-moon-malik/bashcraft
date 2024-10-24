import React from "react";
import Background from "../BackgroundImage/Background";
import LogoRound from '../../assets/bashcraft-round-logo.png';
import "./Section1.css";
import AnimatedText from "../AnimatedTect/AnimatedText";

const Section1 = () => {
  return (
    <>
      <Background />
      <div className="section1-content">
        <AnimatedText />
        <div className="container-wrapper">
          <div className="section1-content-left">
            <p className="bashcraft-description">
              <b style={{color: "rgb(97, 245, 102)"}}>Welcome to BashCraft,</b> a community of engineering students
              following the path of Asli Engineering. Our motto “no fluff, only
              asli engineering” resonates through the work of all our members,
              as we come up with a community of innovators ready to take on the
              world.
              <br />
              <br />
              With a focus on passion, productivity, and perseverance, we as a
              community introduce engineering enthusiasts to this domain and
              everything it has to offer. Bringing a realistic touch to our
              pedagogy makes us stand apart the cliché.
            </p>

          </div>
          <div className="section1-content-right">
            <img src={LogoRound} alt="" />
          </div>
        </div>
      </div>
      <div className="empty-div"></div>
    </>
  );
};

export default Section1;
