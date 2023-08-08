import React from "react";

export default function SocialCard(props) {
    return (
        
            <a className={props.className} target="_blank" href={props.link} aria-label={props.name} >
                <img src={props.icon} loading="lazy" alt={`icon of ${props.name}`} />
            </a>
    )
}