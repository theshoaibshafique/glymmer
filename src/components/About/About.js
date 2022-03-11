import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="aboutContainer">
        <div className="about" about-text="About">
          <p>An experiment of theCountess.eth</p>
          <div>
            <p className="about-text">
              I named my token “Glymmer” / $GLYMR since I constantly use an
              emoji that looks like one.
            </p>
          </div>
          <div>
            <p className="about-text">
              I later found out that the word [gly] means a unit of a billion
              lightyears. Or an abbreviation for a sweet crystalline solid in
              biochemistry. Both sound random and shimmery. I like. Anyway, this
              demo could be one of the world’s most simplistic smart contracts
              so it probably has issues that come with something not at all
              robust. But I wanted to do something with these tokens, so here is
              a $MATIC / $GLYMR faucet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
