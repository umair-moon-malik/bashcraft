import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./AnimatedText.css";


// const terminatString = "->$  "

const AnimatedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Spark your Engineering, be an <span class="animated-inner-highlited-text">Asli Engineer</span>',
        'No <span style="font-style: italic; font-weight:bold; font-family:  sans-serif; colo">fluff</span>, only <span class="animated-inner-highlited-text">Asli Engineering!!!</span>',
      ],
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typed-animation-container">
      {/* <span>{terminatString}</span> */}
      <span ref={el}></span>
    </div>
  );
};

export default AnimatedText;
