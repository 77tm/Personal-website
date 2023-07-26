import React from "react";

export default function AboutMeCard(props) {
    const [isBig, setIsBig] = React.useState(false);

    const handleClick = () => {
        setIsBig(prev => !prev);
    };

    return (
        <div className='about-me-card' style={{gridRow: isBig ? 'span 2' : 'span 1'}}>
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
            <p>{props.text}</p>
            <p style={{display: isBig ? 'block' : 'none' }}>{props.moreText}</p>
            <p style={{display: isBig ? 'block' : 'none' }}>{props.moreText2}</p>
            <div className="btn-container">
                <a className="work-btn" href="#">
                    <span>See my work</span>
                </a>
                <a onClick={handleClick} className="see-more-btn" href="#">
                    <span>{isBig ? "Show less" : "Learn more"}</span>
                </a>
            </div>
        </div>
    )
}