import React from "react";
import myPhoto from "/public/me.jpg"

export default function ImageCard(props) {
    return (
        <div className={props.className}>
            <img src={myPhoto} alt="Portrait of Toms Madžuls, full-stack developer from Latvia" fetchPriority="high" />
        </div>
    )
}
