import React, { useState } from "react";

const Hero = () => {
  const [state] = useState({
    img: "assets/images/image-web-3-mobile.jpg",
  });

  return (
    <main className="hero">
      <section className="hero__image">
        <img src={state.img} alt="img" />
      </section>

      <section className="hero__web">
        <h3>The Bright Future Of Web 3?</h3>
      </section>
      <section className="hero__words">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read More</button>
      </section>
    </main>
  );
};

export default Hero;
