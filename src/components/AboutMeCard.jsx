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
        setSpanValue(2);
      } else {
        setSpanValue(1);
      }
    };

    updateSpanValue();
    window.addEventListener("resize", updateSpanValue);

    return () => window.removeEventListener("resize", updateSpanValue);
  }, []);

const topText = `Hey! I'm Toms, a Full-Stack Developer based in Riga focused on building scalable, production-grade systems and modern web applications that deliver real business value.`;

const midText = `I have extensive experience developing backend systems and distributed architectures using microservices, Kafka data pipelines, and containerized infrastructure with Kubernetes. I build modern interfaces with React and develop robust services using PHP, Laravel, and Drupal.`;

const bottomText = `I also work with machine learning, building CAPTCHA automation solvers using convolutional neural networks (CNNs) that I trained myself. I enjoy solving complex engineering problems and constantly pushing my skills through side projects.`;

  return (
    <div className={props.className} style={{ gridRow: isBig ? `span ${spanValue + 1}` : `span ${spanValue}` }}>
      <h1>Toms Madzuls</h1>
      <h3>Full-Stack Developer based in Riga</h3>
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