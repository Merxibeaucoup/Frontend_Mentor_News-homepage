import React, { useState } from "react";

const Steps = () => {
  const [state] = useState({
    img1: "assets/images/image-gaming-growth.jpg",
    img2: "assets/images/image-retro-pcs.jpg",
    img3: "assets/images/image-top-laptops.jpg",
  });
  return (
    <div className="steps">
      <div className="div">
        <div className="steps__image">
          <img src={state.img2} alt="im1" />
        </div>
        <div className="steps__words">
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="div">
        <div className="steps__image">
          <img src={state.img3} alt="im2" />
        </div>
        <div className="steps__words">
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets</p>
        </div>
      </div>
      <div className="div">
        <div className="steps__image">
          <img src={state.img1} alt="im3" />
        </div>
        <div className="steps__words">
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
