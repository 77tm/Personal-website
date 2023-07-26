import React from "react";
import skillsData from "../skillsData";



export default function SkillsCard(props) {
    const skills = skillsData.map(elem => {
        return (
            <div key={elem.name} className="skill-div">
                <img src={elem.icon} alt={`${elem.name} logo`}></img>
                <h5>{elem.name}</h5>
            </div>
        )
    })

    return (
        <div className="skills-card">
            <h2>My Toolbox</h2>
            {skills}
        </div>
    )
}