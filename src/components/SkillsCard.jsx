import React from "react";
import html5 from "/public/skills/html5-icon.svg"
import css from "/public/skills/w3_css-icon.svg"
import sass from "/public/skills/sass-lang-icon.svg"
import javascript from "/public/skills/javascript.svg"
import react from "/public/skills/reactjs-icon.svg"
import php from "/public/skills/php-icon.svg"
import mysql from "/public/skills/mysql-icon.svg"
import python from "/public/skills/python-icon.svg"
import sql from "/public/skills/pngegg.png"
import c from "/public/skills/c.svg"



export default function SkillsCard(props) {
    return (
        <div className="skills-card">
            <h2>My Toolbox</h2>


            <div className="skill-div">
                <img src={html5} alt="html5 logo"></img>
                <h5>HTML5</h5>

            </div>
            <div className="skill-div">
                <img src={css} alt="css logo"></img>
                <h5>CSS</h5>

            </div>
            <div className="skill-div">
                <img src={sass} alt="sass logo"></img>
                <h5>Sass</h5>

            </div>
            <div className="skill-div">
                <img src={javascript} alt="javascript logo"></img>
                <h5>JavaScript ES6</h5>

            </div>
            <div className="skill-div">
                <img src={react} alt="react logo"></img>
                <h5>React</h5>

            </div>
            <div className="skill-div">
                <img src={php} alt="php logo"></img>
                <h5>PHP</h5>
            </div>
            <div className="skill-div">
                <img src={mysql} alt="mysql logo"></img>
                <h5>MySQL</h5>

            </div>
            <div className="skill-div">
                <img src={sql} alt="sql logo"></img>
                <h5>SQL</h5>

            </div>
            <div className="skill-div">
                <img src={c} alt="c++ logo"></img>
                <h5>C++</h5>

            </div>
            <div className="skill-div">
                <img src={python} alt="python logo"></img>
                <h5>Python</h5>
            </div>

            {/* <img src={c}></img> */}
        </div>
    )
}