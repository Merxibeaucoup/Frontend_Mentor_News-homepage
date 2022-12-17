import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__header">New</h2>

      <div className="sidebar__content">
        <h3 className="sidebar__content-heading">Hydrogen VS Electric Cars</h3>
        <p className="sidebar__content-paragraph">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
        <hr />
      </div>
      <div className="sidebar__content">
        <h3 className="sidebar__content-heading">
          The Downsides of AI Artistry
        </h3>
        <p className="sidebar__content-paragraph">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <hr />
      </div>
      <div className="sidebar__content">
        <h3 className="sidebar__content-heading">Is VC Funding Drying Up?</h3>
        <p className="sidebar__content-paragraph">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
