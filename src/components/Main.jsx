import React from "react";
import SmallTextCard from "./SmallTextCard";
import AboutMeCard from "./AboutMeCard";
import SocialCard from "./SocialCard";
import SkillsCard from "./SkillsCard";
import ProjectCard from "./ProjectCard";
import MusicCard from "./MusicCard";
import HardwareCard from "./HardwareCard"
import ImageCard from "./ImageCard";

import instagram from "/public/instagram-icon.svg"
import facebook from "/public/facebook-icon.svg"
import github from "/public/github-icon.svg"
import linkedin from "/public/linkedin-icon.svg"
import twitterx from "/public/twitterx-icon.svg"
import portfolioWebsite from "/public/portfolio-website.png"
import ferrariWebsite from "/public/ferrari-website.png"
import bookslv from "/public/bookslv.png"



export default function Main({activeItem, setActiveItem}) {
    const text= "Hey! I'm Toms, and my goal is to work at a company where I can deliver business value while levelling up my skills as a developer."
    const moreText2 = "Currently I am studying computer science at the University of Latvia, however it doesn't end there, I am actively working on side projects in my free time!"

    const moreText = "As a web developer, I embrace dynamic technology, constantly seeking new challenges to expand my skills. From HTML5, CSS, and JavaScript ES6 to React and backend tech like Laravel and PHP, I stay on top of web trends. Proficient in MySQL, I create impactful applications, driven by a passion for growth and problem-solving."

    const bookslvSkills = ["HTML5" , "CSS", "JavaScript ES6", "PHP", "Laravel", "MySQL"];
    const ferrariSKills = ["HTML5", "CSS", "JavaScript ES6"];
    const portfolioSkills = ["HTML5" , "CSS", "JavaScript ES6", "React", "Sass"];



    return (
        <div className="main-container">

            {activeItem === "all" && (
            <>
                <AboutMeCard className="about-me-card" setActiveItem={setActiveItem} title="Toms Madzuls" subTitle="Year 2 Computer science student in Riga" text={text} moreText={moreText} moreText2={moreText2}/>
                <ImageCard className="img-card" />
                <SkillsCard className="skills-card"/>
                <SmallTextCard setActiveItem={setActiveItem} className='small-text-card' title="Since 2021" text="Since embarking on my coding journey in 2021, I have found my true passion to be the captivating realm of web development." />
                <HardwareCard className="hardware-card"/>
                <ProjectCard className="project-card" projectName="TomsOS" projectImg={portfolioWebsite} skillsArray={portfolioSkills}/>
                <ProjectCard className="project-card" projectName="Books.lv" projectImg={bookslv} skillsArray={bookslvSkills}/>
                <ProjectCard className="project-card" projectName="Ferrari page" projectImg={ferrariWebsite} skillsArray={ferrariSKills}/>
                <SocialCard className='social-card instagram' icon={instagram} link="https://www.instagram.com/madzuls/"/>
                <SocialCard className='social-card facebook' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
                <SocialCard className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SocialCard className='social-card linkedin' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
                <SocialCard className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/>
            </>
            )}

            {activeItem === "about" && (
            <>
                <AboutMeCard className="about-me-card"  setActiveItem={setActiveItem} title="Toms Madzuls" subTitle="Year 2 Computer science student in Riga" text={text} moreText={moreText} moreText2={moreText2}/>
                <ImageCard className="img-card" />
                <SkillsCard className="skills-card"/>
                <SmallTextCard setActiveItem={setActiveItem} className='small-text-card' title="Since 2021" text="Since embarking on my coding journey in 2021, I have found my true passion to be the captivating realm of web development." />
                <SocialCard className='social-card instagram' icon={instagram} link="https://www.instagram.com/madzuls/"/>
                <SocialCard className='social-card facebook' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
                <SocialCard className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SocialCard className='social-card linkedin' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
                <SocialCard className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/>

                {/* reduced opacity */}
                <HardwareCard className="hardware-card reduced-opacity"/>
                <ProjectCard className="project-card reduced-opacity" projectName="TomsOS" projectImg={portfolioWebsite} skillsArray={portfolioSkills}/>
                <ProjectCard className="project-card reduced-opacity" projectName="Books.lv" projectImg={bookslv} skillsArray={bookslvSkills}/>
                <ProjectCard className="project-card reduced-opacity" projectName="Ferrari page" projectImg={ferrariWebsite} skillsArray={ferrariSKills}/>
            </>
            )}

            {activeItem === "projects" && (
            <>
                <AboutMeCard className="about-me-card"  setActiveItem={setActiveItem} title="Toms Madzuls" subTitle="Year 2 Computer science student in Riga" text={text} moreText={moreText} moreText2={moreText2}/>
                {/* <SmallTextCard setActiveItem={setActiveItem} className='small-text-card' title="Since 2021" text="Since embarking on my coding journey in 2021, I have found my true passion to be the captivating realm of web development." /> */}
                <SocialCard className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SkillsCard className="skills-card"/>
                <ProjectCard className="project-card" projectName="TomsOS" projectImg={portfolioWebsite} skillsArray={portfolioSkills}/>
                <ProjectCard className="project-card" projectName="Books.lv" projectImg={bookslv} skillsArray={bookslvSkills}/>
                <ProjectCard className="project-card" projectName="Ferrari page" projectImg={ferrariWebsite} skillsArray={ferrariSKills}/>
                {/* <SocialCard className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/> */}

                {/* reduced opacity */}
                <HardwareCard className="hardware-card reduced-opacity"/>
                <ImageCard className="img-card reduced-opacity" />
            </>
            )}

            {activeItem === "media" && (
            <>
                <AboutMeCard className="about-me-card"  setActiveItem={setActiveItem} title="Toms Madzuls" subTitle="Year 2 Computer science student in Riga" text={text} moreText={moreText} moreText2={moreText2}/>
                <SocialCard className='social-card instagram' icon={instagram} link="https://www.instagram.com/madzuls/"/>
                <SocialCard className='social-card facebook' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
                <SocialCard className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SocialCard className='social-card linkedin' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
                <SocialCard className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/>
                
                {/* reduced opacity */}
                <ImageCard className="img-card reduced-opacity" />
                <SkillsCard className="skills-card reduced-opacity"/>
                <HardwareCard className="hardware-card reduced-opacity"/>
                <ProjectCard className="project-card reduced-opacity" projectName="TomsOS" projectImg={portfolioWebsite} skillsArray={portfolioSkills}/>
                <ProjectCard className="project-card reduced-opacity" projectName="Books.lv" projectImg={bookslv} skillsArray={bookslvSkills}/>
                <ProjectCard className="project-card reduced-opacity" projectName="Ferrari page" projectImg={ferrariWebsite} skillsArray={ferrariSKills}/>
                <SmallTextCard setActiveItem={setActiveItem} className='small-text-card reduced-opacity' title="Since 2021" text="Since embarking on my coding journey in 2021, I have found my true passion to be the captivating realm of web development." />

            </>
            )}

            {activeItem === "setup" && (
            <>
                <SkillsCard className="skills-card"/>
                <HardwareCard className="hardware-card"/>
                <SmallTextCard setActiveItem={setActiveItem} className='small-text-card' title="Since 2021" text="Since embarking on my coding journey in 2021, I have found my true passion to be the captivating realm of web development." />
                <SocialCard className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SocialCard className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/>

                {/* reduced opacity */}
                <AboutMeCard className="about-me-card reduced-opacity"  setActiveItem={setActiveItem} title="Toms Madzuls" subTitle="Year 2 Computer science student in Riga" text={text} moreText={moreText} moreText2={moreText2}/>
                <ProjectCard className="project-card reduced-opacity" projectName="TomsOS" projectImg={portfolioWebsite} skillsArray={portfolioSkills}/>
                <ProjectCard className="project-card reduced-opacity" projectName="Books.lv" projectImg={bookslv} skillsArray={bookslvSkills}/>
                <ProjectCard className="project-card reduced-opacity" projectName="Ferrari page" projectImg={ferrariWebsite} skillsArray={ferrariSKills}/>
                <ImageCard className="img-card reduced-opacity" />
                <SocialCard className='social-card instagram reduced-opacity' icon={instagram} link="https://www.instagram.com/madzuls/"/>
                <SocialCard className='social-card facebook reduced-opacity' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
                <SocialCard className='social-card linkedin reduced-opacity' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
            </>
            )}
        </div>
    )
}