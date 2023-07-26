import React from "react";
import SmallTextCard from "./SmallTextCard";
import AboutMeCard from "./AboutMeCard";
import SocialCard from "./SocialCard";
import SkillsCard from "./SkillsCard";
import ProjectCard from "./ProjectCard";

import instagram from "/public/instagram-icon.svg"
import facebook from "/public/facebook-icon.svg"
import github from "/public/github-icon.svg"
import linkedin from "/public/linkedin-icon.svg"
import twitterx from "/public/twitterx-icon.svg"
import portfolioWebsite from "/public/portfolio-website.png"
import ferrariWebsite from "/public/ferrari-website.png"
import bookslv from "/public/bookslv.png"



export default function Main() {
    const text= "Hey! I'm Toms, and my goal is to work at a company where I can deliver business value while levelling up my skills as a developer."
    const moreText = `I believe that web development is an ever-evolving field, and I am constantly seeking new challenges and opportunities to expand 
    my knowledge and expertise. Whether it's learning the latest frontend frameworks like React, Vue, or Angular, or diving deep into backend technologies 
    like Node.js or Django, I'm always eager to stay on top of the latest trends and best practices in web development.`
    const moreText2 = "Currently I am studying computer science at the University of Latvia, however it doesn't end there, I am actively working on side projects in my free time!"

    const bookslvSkills = ["HTML5" , "CSS", "JavaScript ES6", "PHP", "Laravel", "MySQL"];
    const ferrariSKills = ["HTML5", "CSS", "JavaScript ES6"];
    const portfolioSkills = ["HTML5" , "CSS", "JavaScript ES6", "React", "Sass"];

    return (
        <div className="main-container">

            <AboutMeCard title="Toms Madzuls" subTitle="Year 2 Computer science student in Riga" text={text} moreText={moreText} moreText2={moreText2}/>
            <SmallTextCard className='card' title="Since 2021" text="Since embarking on my coding journey in 2021, I have found my true passion to be the captivating realm of web development." />
            <SkillsCard />
            <SocialCard className='social-card instagram' icon={instagram} link="https://www.instagram.com/madzuls/"/>
            <SocialCard className='social-card facebook' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
            <SocialCard className='social-card github' icon={github} link="https://github.com/77tm"/>
            <SocialCard className='social-card linkedin' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
            <SocialCard className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/>
            <ProjectCard projectName="TomsOS" projectImg={portfolioWebsite} skillsArray={portfolioSkills}/>
            <ProjectCard projectName="Books.lv" projectImg={bookslv} skillsArray={bookslvSkills}/>
            <ProjectCard projectName="Ferrari page" projectImg={ferrariWebsite} skillsArray={ferrariSKills}/>
        </div>
    )
}