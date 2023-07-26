import React from "react";

export default function SmallTextCard(props) {
    return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>

            <div className="btn-container-small-card">
                <a className="projects-btn" href="#">
                    <span>See my work</span>
                </a>
            </div>
        </div>
    )
}