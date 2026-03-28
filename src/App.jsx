import React from "react"
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/Main"

import ProjectHeader from "./components/ProjectHeader";
import ProjectPage from "./components/ProjectPage";
import { captchaCnnTech } from "./captchaCnnTech";

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

  const captchaCnnSubheading = "A custom CNN pipeline for solving real captchas inside a time-sensitive automation workflow.";
  const captchaCnnDescription = `This project started as a practical machine learning problem: I built a custom CAPTCHA-solving CNN and integrated it into a time-sensitive automation workflow. The runtime pipeline combines scripted data collection, image preprocessing, character segmentation, CNN inference, and final CAPTCHA reconstruction as part of a larger end-to-end system.

  To train the model, I first collected 600 real captchas using an automation script built with Playwright, then turned them into a labeled character dataset. I segmented each 7-character captcha using vertical projection analysis and width-aware splitting and merging logic, and used controlled neighbor leakage to make the crops more realistic and harder for the model. The resulting dataset contains roughly 3.6k labeled character images across 52 uppercase and lowercase classes.

  The model itself is a custom PyTorch CNN with three convolutional blocks, batch normalization, max pooling, and a dropout-regularized classifier head. During training, I used affine augmentation and weighted random sampling to improve robustness and reduce class imbalance. At inference time, I added test-time augmentation and beam search over character probabilities to improve full-word predictions on noisy captchas. The result is a compact end-to-end system that combines automation, data collection, computer vision, and applied deep learning in a way that is both highly practical and technically interesting.`

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
            <Header activeItem={activeItem} setActiveItem={setActiveItem} darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main activeItem={activeItem} setActiveItem={setActiveItem} />
          </>
        } />

        <Route path="/portfolio" element={
          <>
            <ProjectHeader projectName="Portfolio" darkMode={darkMode} setDarkMode={setDarkMode} />
            <ProjectPage projectName="Portfolio" projectSubheading={portfolioSubheading} image={portfolioWebsite} skillsArray={portfolioSkills} projectDescription={portfolioDescription} />
          </>
        }/>

        <Route path="/bookslv" element={
          <>
            <ProjectHeader projectName="Books.lv" darkMode={darkMode} setDarkMode={setDarkMode} />
            <ProjectPage projectName="Books.lv" projectSubheading={bookslvSubheading} image={bookslv} skillsArray={bookslvSkills} projectDescription={bookslvDescription} />
          </>
        }/>

        <Route path="/captcha-cnn" element={
          <>
            <ProjectHeader projectName="CAPTCHA CNN" darkMode={darkMode} setDarkMode={setDarkMode} />
            <ProjectPage projectName="CAPTCHA CNN" projectSubheading={captchaCnnSubheading} image={captchaCnnProject} skillItems={captchaCnnTech} projectDescription={captchaCnnDescription} />
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App
