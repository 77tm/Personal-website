import React from "react";

export default function SmallTextCard(props) {
    const handleWorkBtnClick = () => {
        props.setActiveItem("projects"); // Set activeItem to "projects" to navigate to the "Projects" tab
    };

    return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>

            <div className="btn-container-small-card">
                <a onClick={handleWorkBtnClick} className="projects-btn" href="#">
                    <span>See my work</span>
                </a>
            </div>
        </div>
    )
}