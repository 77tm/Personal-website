import React, { useEffect, useState } from "react";

export default function AboutMeCard(props) {
  const [isBig, setIsBig] = useState(false);
  const [spanValue, setSpanValue] = useState(1);

  const handleClick = (event) => {
    event.preventDefault();
    setIsBig((prev) => !prev);
  };

  const handleWorkBtnClick = (event) => {
    event.preventDefault();
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

const topText = `Hi, I'm Toms, a Full-Stack Developer based in Riga, focused on building scalable, production-ready systems and modern web applications that create real business value.`;

const midText = `My experience includes backend systems and distributed architectures built with microservices, Kafka-based data pipelines, and containerized infrastructure on Kubernetes. I also create modern interfaces with React and robust services using PHP, Laravel, and Drupal.`;

const bottomText = `I also build automation tools and work with machine learning, developing CAPTCHA solvers powered by convolutional neural networks (CNNs). I enjoy tackling complex engineering problems and developing my skills through side projects.`;

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
