import React from "react";

export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <p>PROJECT</p>
            <h2>{props.projectName}</h2>
            <p>BUILT WITH</p>
            <div className="project-card-icons">

            </div>
            <div>
                <img src={props.projectImg} alt="project-image"></img>
            </div>
            <div className="project-btn">
                
            </div>
        </div>
    )
}