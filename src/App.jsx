import React from "react"
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/Main"
import Seo from "./components/Seo";

import ProjectHeader from "./components/ProjectHeader";
import ProjectPage from "./components/ProjectPage";
import { captchaCnnTech } from "./captchaCnnTech";
import { bookslvSeo, captchaCnnSeo, homeSeo, portfolioSeo } from "./seo";

// import portfolioWebsite from "/public/portfolio-website.png"
import portfolioWebsite from "/public/portfolio.gif"

// import bookslv from "/public/bookslv.png"
import bookslv from "/public/bookslv.gif"

// import ferrariWebsite from "/public/ferrari-website.jpg"
import captchaCnnProject from "/public/captcha_cnn.gif"

function App() {

  const [darkMode, setDarkMode] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState("all");

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const portfolioSubheading = "My personal site for showcasing my work.";
  const portfolioSkills = ["HTML5" , "CSS", "JavaScript ES6", "React", "Sass"];
  const portfolioDescription = `I built my personal website to showcase my work. With a foundation in HTML5, CSS, and JavaScript ES6, I crafted an engaging user interface. The integration of React adds interactivity and dynamism, enhancing the overall browsing experience.
  Leveraging Sass, I efficiently managed styles, ensuring a seamless and visually appealing design. The website's responsiveness guarantees compatibility across devices, underlining my commitment to user-centricity.
  Through React's routing capabilities, each project gets its dedicated page, allowing visitors to explore them in detail. Intuitive navigation elevates the website's aesthetics and usability.`;

  const bookslvSubheading = "Book club website with user authentication.";
  const bookslvSkills = ["HTML5" , "CSS", "JavaScript ES6", "PHP", "Laravel", "MySQL"];
  const bookslvDescription = `Books.lv is a dynamic web application showcasing my proficiency in HTML5, CSS, and JavaScript ES6 to craft an engaging user interface. 
    Leveraging PHP and Laravel, I implemented robust user authentication with multiple roles, granting users and admins distinct privileges. The site features a powerful MySQL database, 
    allowing seamless CRUD operations for adding books, writing reviews, and organizing reading lists. Books.lv is a website, delivering a delightful experience for book enthusiasts 
    and admins alike.`

  const captchaCnnSubheading = "CNN pipeline for solving captchas in an automated workflow.";
  const captchaCnnDescription = `This project focused on building a custom CAPTCHA-solving CNN and integrating it into a time-sensitive automation workflow. I collected real captchas with Playwright, prepared a labeled character dataset, and built a pipeline for preprocessing, segmentation, model inference, and final CAPTCHA reconstruction.

  The model was developed in PyTorch with data augmentation and prediction improvements to make it more reliable on noisy real-world inputs. The result is a practical end-to-end system that combines automation, computer vision, and machine learning in one workflow.`

    function ScrollToTop() {
      const { pathname } = useLocation();
    
      React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      return null;
    }



  return (
    <div className={`page ${darkMode ? "dark-mode" : "light-mode"}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Seo {...homeSeo} />
            <Header activeItem={activeItem} setActiveItem={setActiveItem} darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main activeItem={activeItem} setActiveItem={setActiveItem} />
          </>
        } />

        <Route path="/portfolio" element={
          <>
            <Seo {...portfolioSeo} />
            <ProjectHeader projectName="Portfolio" darkMode={darkMode} setDarkMode={setDarkMode} />
            <ProjectPage
              projectName="Portfolio"
              projectSubheading={portfolioSubheading}
              image={portfolioWebsite}
              imageAlt="Preview of the personal portfolio website built by Toms Madžuls"
              skillsArray={portfolioSkills}
              projectDescription={portfolioDescription}
            />
          </>
        }/>

        <Route path="/bookslv" element={
          <>
            <Seo {...bookslvSeo} />
            <ProjectHeader projectName="Books.lv" darkMode={darkMode} setDarkMode={setDarkMode} />
            <ProjectPage
              projectName="Books.lv"
              projectSubheading={bookslvSubheading}
              image={bookslv}
              imageAlt="Preview of the Books.lv web application created by Toms Madžuls"
              skillsArray={bookslvSkills}
              projectDescription={bookslvDescription}
            />
          </>
        }/>

        <Route path="/captcha-cnn" element={
          <>
            <Seo {...captchaCnnSeo} />
            <ProjectHeader projectName="CAPTCHA CNN" darkMode={darkMode} setDarkMode={setDarkMode} />
            <ProjectPage
              projectName="CAPTCHA CNN"
              projectSubheading={captchaCnnSubheading}
              image={captchaCnnProject}
              imageAlt="Demonstration of the CAPTCHA CNN automation pipeline built by Toms Madžuls"
              skillItems={captchaCnnTech}
              projectDescription={captchaCnnDescription}
            />
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App
