import React from "react";
import skillsData from "../skillsData";

export default function ProjectPage(props) {
    const filteredSkills = props.skillItems ?? skillsData.filter(skill => props.skillsArray.includes(skill.name));
    const sectionIdBase = props.projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    return (
        <main className="project-page">
            <article>
            <div className="heading">
                <h1>{props.projectName}</h1>
                <h2>{props.projectSubheading}</h2>
            </div>
            <img className="project-img" src={props.image} alt={props.imageAlt} loading="lazy" />
            <section className="built-with" aria-labelledby={`${sectionIdBase}-built-with`}>
                <h3 id={`${sectionIdBase}-built-with`}>Built with</h3>
                <div className="project-card-icons">
                    {filteredSkills.map(elem => {
                    return <img className="skill-img" key={elem.name} src={elem.icon} alt={`${elem.name} icon`} loading="lazy" />
                    })}
                </div>
            </section>
            <p>{props.projectDescription}</p>
            </article>
        </main>
    )
}
