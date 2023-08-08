import React from "react";
import skillsData from "../skillsData";
import { Link } from "react-router-dom";


export default function ProjectCard(props) {

    const filteredSkills = skillsData.filter(skill => props.skillsArray.includes(skill.name));

    return (
        <div className={props.className}>
            <p>PROJECT</p>
            <h2>{props.projectName}</h2>
            <p>BUILT WITH</p>
            <div className="project-card-icons">
                {filteredSkills.map(elem => {
                   return <img key={elem.name} src={elem.icon} alt={`${elem.name} icon`} loading="lazy" />
                })}
            </div>
            <div className="project-img-container">
                <img src={props.projectImg} alt="project-image" />
            </div>
            <div className="project-btn">
                <Link className="projects-btn" to={props.projectLink}>
                    <span>View project</span>
                </Link>
            </div>
        </div>
    )
}