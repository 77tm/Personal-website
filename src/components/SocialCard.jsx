import React from "react";

export default function SocialCard(props) {
    return (
        
            <a className={props.className} target="_blank" href={props.link}>
                <img src={props.icon}></img>
            </a>
    )
}