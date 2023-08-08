import React from "react";
import sun from '/public/sun-icon.svg'
import moon from '/public/moon-icon.svg'
import { Link } from "react-router-dom";

export default function ProjectHeader({projectName, darkMode, setDarkMode}) {

    const [activeItem, setActiveItem] = React.useState("project");

    function switchMode() {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <>
            <header className="header">
                <div className="toggle-container" onClick={switchMode}>
                    <div className={darkMode ? "switch dark" : "switch light"}>
                        <div className="toggle">    
                            <img src={darkMode ? moon : sun} loading="lazy" />
                        </div>
                    </div>
                </div>
                <nav>
                        <ul>
                            <Link to="/">
                                <li className={`filter ${activeItem === 'home' ? 'active' : ''}`} onClick={() => setActiveItem('all')}>Home</li>
                            </Link>
                            <li className={`filter ${activeItem === 'project' ? 'active' : ''}`} onClick={() => setActiveItem('project')}>{projectName}</li>
                        </ul>
                </nav>
                <a className="nav-btn" href="mailto:tmadzuls@gmail.com">
                    <span>Contact</span>
                </a>


            </header>

        </>
    )
}