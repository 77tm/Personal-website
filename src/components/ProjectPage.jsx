import React from "react";
import skillsData from "../skillsData";

export default function ProjectPage(props) {
    const filteredSkills = skillsData.filter(skill => props.skillsArray.includes(skill.name));

    return (
        <div className="project-page">
            <div className="heading">
                <h1>{props.projectName}</h1>
                <h2>{props.projectSubheading}</h2>
            </div>
            <img className="project-img" src={props.image} alt="project image" loading="lazy" />
            <div className="built-with">
                <h3>Built with</h3>
                <div className="project-card-icons">
                    {filteredSkills.map(elem => {
                    return <img className="skill-img" key={elem.name} src={elem.icon} alt={`${elem.name} icon`} loading="lazy" />
                    })}
                </div>
            </div>
            <p>{props.projectDescription}</p>
        </div>
    )
}