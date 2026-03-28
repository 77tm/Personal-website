import React from "react";
import SmallTextCard from "./SmallTextCard";
import AboutMeCard from "./AboutMeCard";
import SocialCard from "./SocialCard";
import SkillsCard from "./SkillsCard";
import ProjectCard from "./ProjectCard";
import HardwareCard from "./HardwareCard"
import ImageCard from "./ImageCard";
import { captchaCnnTech } from "../captchaCnnTech";
import { Link } from "react-router-dom";

import instagram from "/public/instagram-icon.svg"
import facebook from "/public/facebook-icon.svg"
import github from "/public/github-icon.svg"
import linkedin from "/public/linkedin-icon.svg"
import twitterx from "/public/twitterx-icon.svg"
import portfolioWebsite from "/public/portfolio-website.png"
import captchaCnnImage from "/public/captcha_cnn.png"
import bookslv from "/public/bookslv.png"



export default function Main({activeItem, setActiveItem}) {
    const bookslvSkills = ["HTML5" , "CSS", "JavaScript ES6", "PHP", "Laravel", "MySQL"];
    const portfolioSkills = ["HTML5" , "CSS", "JavaScript ES6", "React", "Sass"];
    const sinceText = "Backend systems, automation tools, and practical solutions for complex engineering challenges.";
    const portfolioThumbnail = (
        <div className="project-gradient-thumbnail portfolio-gradient">
            <Link className="project-thumbnail-link" to="/portfolio" aria-label="Open Portfolio project">
                <span className="project-thumbnail-emoji">👨‍💻</span>
            </Link>
        </div>
    );
    const booksThumbnail = (
        <div className="project-gradient-thumbnail books-gradient">
            <Link className="project-thumbnail-link" to="/bookslv" aria-label="Open Books.lv project">
                <span className="project-thumbnail-emoji">📚</span>
            </Link>
        </div>
    );
    const captchaThumbnail = (
        <div className="project-gradient-thumbnail captcha-gradient">
            <Link className="project-thumbnail-link" to="/captcha-cnn" aria-label="Open CAPTCHA CNN project">
                <span className="project-thumbnail-emoji">🧠</span>
            </Link>
        </div>
    );



    return (
        <div className="main-container">

            {activeItem === "all" && (
            <>
                <AboutMeCard className="about-me-card" setActiveItem={setActiveItem} />
                <ImageCard className="img-card" />
                <SkillsCard className="skills-card"/>
                <SmallTextCard setActiveItem={setActiveItem} className='small-text-card' title="Since 2020" text={sinceText} />
                <HardwareCard className="hardware-card"/>
                <ProjectCard className="project-card" projectName="Portfolio" projectImg={portfolioWebsite} projectThumbnail={portfolioThumbnail} skillsArray={portfolioSkills} projectLink="/portfolio" />
                <ProjectCard className="project-card" projectName="Books.lv" projectImg={bookslv} projectThumbnail={booksThumbnail} skillsArray={bookslvSkills} projectLink="/bookslv" />
                <ProjectCard className="project-card" projectName="CNN" projectImg={captchaCnnImage} projectThumbnail={captchaThumbnail} skillItems={captchaCnnTech} projectLink="/captcha-cnn" />
                <SocialCard name="instagram" className='social-card instagram' icon={instagram} link="https://www.instagram.com/madzuls/"/>
                <SocialCard name="facebook" className='social-card facebook' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
                <SocialCard name="github" className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SocialCard name="linkedin" className='social-card linkedin' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
                <SocialCard name="twitterx" className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/>
            </>
            )}

            {activeItem === "about" && (
            <>
                <AboutMeCard className="about-me-card" setActiveItem={setActiveItem} />
                <ImageCard className="img-card" />
                <SkillsCard className="skills-card"/>
                <SmallTextCard setActiveItem={setActiveItem} className='small-text-card' title="Since 2020" text={sinceText} />
                <SocialCard name="instagram" className='social-card instagram' icon={instagram} link="https://www.instagram.com/madzuls/"/>
                <SocialCard name="facebook" className='social-card facebook' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
                <SocialCard name="github" className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SocialCard name="linkedin" className='social-card linkedin' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
                <SocialCard name="twitterx" className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/>

                {/* reduced opacity */}
                <HardwareCard className="hardware-card reduced-opacity"/>
                <ProjectCard className="project-card reduced-opacity" projectName="Portfolio" projectImg={portfolioWebsite} projectThumbnail={portfolioThumbnail} skillsArray={portfolioSkills} projectLink="/portfolio" />
                <ProjectCard className="project-card reduced-opacity" projectName="Books.lv" projectImg={bookslv} projectThumbnail={booksThumbnail} skillsArray={bookslvSkills} projectLink="/bookslv" />
                <ProjectCard className="project-card reduced-opacity" projectName="CNN" projectImg={captchaCnnImage} projectThumbnail={captchaThumbnail} skillItems={captchaCnnTech} projectLink="/captcha-cnn" />
            </>
            )}

            {activeItem === "projects" && (
            <>
                <AboutMeCard className="about-me-card" setActiveItem={setActiveItem} />
                <SocialCard name="github" className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SkillsCard className="skills-card"/>
                <ProjectCard className="project-card" projectName="Portfolio" projectImg={portfolioWebsite} projectThumbnail={portfolioThumbnail} skillsArray={portfolioSkills} projectLink="/portfolio" />
                <ProjectCard className="project-card" projectName="Books.lv" projectImg={bookslv} projectThumbnail={booksThumbnail} skillsArray={bookslvSkills} projectLink="/bookslv" />
                <ProjectCard className="project-card" projectName="CNN" projectImg={captchaCnnImage} projectThumbnail={captchaThumbnail} skillItems={captchaCnnTech} projectLink="/captcha-cnn" />

                {/* reduced opacity */}
                <HardwareCard className="hardware-card reduced-opacity"/>
                <ImageCard className="img-card reduced-opacity" />
                <SmallTextCard setActiveItem={setActiveItem} className='small-text-card reduced-opacity' title="Since 2020" text={sinceText} />
                <SocialCard name="instagram" className='social-card instagram reduced-opacity' icon={instagram} link="https://www.instagram.com/madzuls/"/>
                <SocialCard name="facebook" className='social-card facebook reduced-opacity' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
                <SocialCard name="linkedin" className='social-card linkedin reduced-opacity' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
                <SocialCard name="twitterx" className='social-card twitterx reduced-opacity' icon={twitterx} link="https://twitter.com/tmadzuls"/>
            </>
            )}

            {activeItem === "media" && (
            <>
                <AboutMeCard className="about-me-card" setActiveItem={setActiveItem} />
                <SocialCard name="instagram" className='social-card instagram' icon={instagram} link="https://www.instagram.com/madzuls/"/>
                <SocialCard name="facebook" className='social-card facebook' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
                <SocialCard name="github" className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SocialCard name="linkedin" className='social-card linkedin' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
                <SocialCard name="twitterx" className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/>
                
                {/* reduced opacity */}
                <ImageCard className="img-card reduced-opacity" />
                <SkillsCard className="skills-card reduced-opacity"/>
                <HardwareCard className="hardware-card reduced-opacity"/>
                <ProjectCard className="project-card reduced-opacity" projectName="Portfolio" projectImg={portfolioWebsite} projectThumbnail={portfolioThumbnail} skillsArray={portfolioSkills} projectLink="/portfolio" />
                <ProjectCard className="project-card reduced-opacity" projectName="Books.lv" projectImg={bookslv} projectThumbnail={booksThumbnail} skillsArray={bookslvSkills} projectLink="/bookslv" />
                <ProjectCard className="project-card reduced-opacity" projectName="CNN" projectImg={captchaCnnImage} projectThumbnail={captchaThumbnail} skillItems={captchaCnnTech} projectLink="/captcha-cnn" />
                <SmallTextCard setActiveItem={setActiveItem} className='small-text-card reduced-opacity' title="Since 2020" text={sinceText} />

            </>
            )}

            {activeItem === "setup" && (
            <>
                <SkillsCard className="skills-card"/>
                <HardwareCard className="hardware-card"/>
                <SmallTextCard setActiveItem={setActiveItem} className='small-text-card' title="Since 2020" text={sinceText} />
                <SocialCard name="github" className='social-card github' icon={github} link="https://github.com/77tm"/>
                <SocialCard name="twitterx" className='social-card twitterx' icon={twitterx} link="https://twitter.com/tmadzuls"/>

                {/* reduced opacity */}
                <AboutMeCard className="about-me-card reduced-opacity" setActiveItem={setActiveItem} />
                <ProjectCard className="project-card reduced-opacity" projectName="Portfolio" projectImg={portfolioWebsite} projectThumbnail={portfolioThumbnail} skillsArray={portfolioSkills} projectLink="/portfolio" />
                <ProjectCard className="project-card reduced-opacity" projectName="Books.lv" projectImg={bookslv} projectThumbnail={booksThumbnail} skillsArray={bookslvSkills} projectLink="/bookslv" />
                <ProjectCard className="project-card reduced-opacity" projectName="CNN" projectImg={captchaCnnImage} projectThumbnail={captchaThumbnail} skillItems={captchaCnnTech} projectLink="/captcha-cnn" />
                <ImageCard className="img-card reduced-opacity" />
                <SocialCard name="instagram" className='social-card instagram reduced-opacity' icon={instagram} link="https://www.instagram.com/madzuls/"/>
                <SocialCard name="facebook" className='social-card facebook reduced-opacity' icon={facebook} link="https://www.facebook.com/toms.madzuls/"/>
                <SocialCard name="linkedin" className='social-card linkedin reduced-opacity' icon={linkedin} link="https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/"/>
            </>
            )}
        </div>
    )
}
