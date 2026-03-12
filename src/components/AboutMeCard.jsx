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

  const topText = `Hey! I'm Toms, a Full-Stack Developer based in Riga. I focus on building scalable, production-grade systems that deliver real business value. My work spans backend infrastructure, distributed systems, and modern web applications.`;

  const midText = `I have extensive experience designing and maintaining backend services, working with microservice architectures, Kafka data pipelines, and containerized environments using Kubernetes. On the application side I build modern web interfaces with React while developing robust APIs and services using technologies such as PHP, Laravel, and Drupal. I am comfortable working across the entire stack, from database architecture and system design to frontend performance and UX.`;

  const bottomText = `Beyond traditional web development, I also work with machine learning. I have built CAPTCHA automation solvers using convolutional neural networks (CNNs) that I trained myself, combining deep learning with large-scale automation workflows. I enjoy tackling complex engineering problems, optimizing systems for performance, and continuously pushing my technical boundaries through side projects and experimentation.`;

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