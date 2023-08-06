import React, { useEffect, useState } from "react";

export default function AboutMeCard(props) {
  const [isBig, setIsBig] = useState(false);
  const [spanValue, setSpanValue] = useState(1);

  const handleClick = () => {
    setIsBig((prev) => !prev);
  };

  const handleWorkBtnClick = () => {
    props.setActiveItem("projects");
  };

  useEffect(() => {
    const updateSpanValue = () => {
      if (window.innerWidth <= 545) {
        setSpanValue(2); // Set spanValue to 2 on mobile
      } else {
        setSpanValue(1); // Set spanValue to 1 on desktop
      }
    };

    // Call the update function initially
    updateSpanValue();

    // Attach a listener to window resize event
    window.addEventListener("resize", updateSpanValue);

    // Clean up the listener on unmount
    return () => window.removeEventListener("resize", updateSpanValue);
  }, []);

  const topText= "Hey! I'm Toms, and my goal is to work at a company where I can deliver business value while levelling up my skills as a developer."

  const midText = `As a web developer, I embrace dynamic technology, constantly seeking new challenges to expand my skills. From HTML5, CSS, and JavaScript ES6 
  to React and backend tech like Laravel and PHP, I stay on top of web trends. Proficient in MySQL, I create impactful applications, driven by a passion for growth 
  and problem-solving.`
  
  const bottomText = `Currently I am studying computer science at the University of Latvia, however it doesn't end there, 
    I am actively working on side projects in my free time!`

  return (
    <div className={props.className} style={{ gridRow: isBig ? `span ${spanValue + 1}` : `span ${spanValue}` }}>
      <h1>Toms Madzuls</h1>
      <h3>Year 2 Computer science student in Riga</h3>
      <p>{topText}</p>
      <p style={{ display: isBig ? "block" : "none" }}>{midText}</p>
      {window.innerWidth > 545 && <p style={{ display: isBig ? "block" : "none" }}>{bottomText}</p>}
      <div className="btn-container">
        <a onClick={handleWorkBtnClick} className="work-btn" href="#">
          <span>See my work</span>
        </a>
        <a onClick={handleClick} className="see-more-btn" href="#">
          <span>{isBig ? "Show less" : "Learn more"}</span>
        </a>
      </div>
    </div>
  );
}
