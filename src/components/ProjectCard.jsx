import React from "react";
import skillsData from "../skillsData";


export default function ProjectCard(props) {

    const filteredSkills = skillsData.filter(skill => props.skillsArray.includes(skill.name));

    return (
        <div className="project-card">
            <p>PROJECT</p>
            <h2>{props.projectName}</h2>
            <p>BUILT WITH</p>
            <div className="project-card-icons">
                {filteredSkills.map(elem => {
                   return <img key={elem.name} src={elem.icon} alt={`${elem.name} icon`}></img>
                })}
            </div>
            <div className="project-img-container">
                <img src={props.projectImg} alt="project-image"></img>
            </div>
            <div className="project-btn">
                <a className="projects-btn" href="#">
                    <span>View project</span>
                </a>
            </div>
        </div>
    )
}