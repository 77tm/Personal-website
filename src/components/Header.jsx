import React from "react";
import sun from '/public/sun-icon.svg'
import moon from '/public/moon-icon.svg'

export default function Header({activeItem, setActiveItem, darkMode, setDarkMode}) {

    function switchMode() {
        setDarkMode(prevMode => !prevMode);
    }

    // const [activeItem, setActiveItem] = React.useState('item1');

    // const handleItemClick = (itemId) => {
    //     setActiveItem(itemId);
    // };

    return (
        <>
            <header className="header">
                <div className="toggle-container" onClick={switchMode}>
                    <div className={darkMode ? "switch dark" : "switch light"}>
                        <div className="toggle">    
                            <img src={darkMode ? moon : sun}></img>
                        </div>
                    </div>
                </div>
                <nav>
                        <ul>
                            <li className={`filter ${activeItem === 'all' ? 'active' : ''}`} onClick={() => setActiveItem('all')}>All</li>
                            <li className={`filter ${activeItem === 'about' ? 'active' : ''}`} onClick={() => setActiveItem('about')}>About</li>
                            <li className={`filter ${activeItem === 'projects' ? 'active' : ''}`} onClick={() => setActiveItem('projects')}>Projects</li>
                            <li className={`filter ${activeItem === 'media' ? 'active' : ''}`} onClick={() => setActiveItem('media')}>Media</li>
                            <li className={`filter ${activeItem === 'setup' ? 'active' : ''}`} onClick={() => setActiveItem('setup')}>Setup</li>
                        </ul>
                </nav>
                <a className="nav-btn" href="mailto:tmadzuls@gmail.com">
                    <span>Contact</span>
                </a>


            </header>

        </>
    )
}