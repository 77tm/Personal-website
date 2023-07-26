import React from "react";
import sun from '/public/sun-icon.svg'
import moon from '/public/moon-icon.svg'

export default function Header() {
    const [darkMode, setDarkMode] = React.useState(false);

    function switchMode() {
        setDarkMode(prevMode => !prevMode);
    }

    const [activeItem, setActiveItem] = React.useState('item1');

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
    };

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
                            <li className={`filter ${activeItem === 'item1' ? 'active' : ''}`} onClick={() => handleItemClick('item1')}>All</li>
                            <li className={`filter ${activeItem === 'item2' ? 'active' : ''}`} onClick={() => handleItemClick('item2')}>About</li>
                            <li className={`filter ${activeItem === 'item3' ? 'active' : ''}`} onClick={() => handleItemClick('item3')}>Projects</li>
                            <li className={`filter ${activeItem === 'item4' ? 'active' : ''}`} onClick={() => handleItemClick('item4')}>Media</li>
                            <li className={`filter ${activeItem === 'item5' ? 'active' : ''}`} onClick={() => handleItemClick('item5')}>Running</li>
                        </ul>
                </nav>
                <a className="nav-btn" href="mailto:tmadzuls@gmail.com">
                    <span>Contact</span>
                </a>


            </header>

        </>
    )
}