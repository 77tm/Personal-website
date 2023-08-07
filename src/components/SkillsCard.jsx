import React from "react";
import skillsData from "../skillsData";

export default function SkillsCard(props) {
    const skills = skillsData.map(elem => {
        return (
            <div key={elem.name} className="skill-div">
                <img src={elem.icon} alt={`${elem.name} logo`} loading="lazy" />
                <h5>{elem.name}</h5>
            </div>
        )
    })

    return (
        <div className={props.className}>
            <h2>My Toolbox</h2>
            <div className="skill-container">
                {skills}
            </div>
        </div>
    )
}