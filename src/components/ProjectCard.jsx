import React from "react";
import { Link } from "react-router-dom";


export default function ProjectCard(props) {
    return (
        <article className={props.className}>
            <p>PROJECT</p>
            <h2>{props.projectName}</h2>
            {/* <p>BUILT WITH</p>
            <div className="project-card-icons">
                {filteredSkills.map(elem => {
                   return <img key={elem.name} src={elem.icon} alt={`${elem.name} icon`} loading="lazy" />
                })}
            </div> */}
            <div className="project-img-container">
                {props.projectThumbnail ?? <img src={props.projectImg} alt={props.projectImageAlt} loading="lazy" />}
            </div>
            <div className="project-btn">
                <Link className="projects-btn" to={props.projectLink} aria-label={`View the ${props.projectName} project by Toms Madžuls`}>
                    <span>View project</span>
                </Link>
            </div>
        </article>
    )
}
