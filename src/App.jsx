import React from "react"
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/Main"

import ProjectHeader from "./components/ProjectHeader";
import ProjectPage from "./components/ProjectPage";

// import portfolioWebsite from "/public/portfolio-website.png"
import portfolioWebsite from "/public/portfolio.gif"

// import bookslv from "/public/bookslv.png"
import bookslv from "/public/bookslv.gif"

// import ferrariWebsite from "/public/ferrari-website.jpg"
import ferrariWebsite from "/public/ferrari-website.gif"

function App() {

  const [darkMode, setDarkMode] = React.useState(false);
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

  const ferrariSubheading = "A simple Ferrari themed page"
  const ferrariSKills = ["HTML5", "CSS", "JavaScript ES6"];
  const ferrariDescription = `Ferrari Themed Page is a captivating project that served as my entry point into web development, showcasing my foundational skills in HTML5, CSS, and 
    JavaScript ES6. This beginner-level project allowed me to explore and experiment with various CSS techniques to create an appealing and immersive Ferrari-themed experience. 
    While it may be simple, it provided a solid foundation for understanding CSS capabilities and layout design. Ferrari Themed Page reflects my early journey as a web developer, and I 
    look forward to applying these skills to more complex and exciting projects in the future.`

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

        <Route path="/ferrari" element={
          <>
            <ProjectHeader projectName="Ferrari page" darkMode={darkMode} setDarkMode={setDarkMode} />
            <ProjectPage projectName="Ferrari page" projectSubheading={ferrariSubheading} image={ferrariWebsite} skillsArray={ferrariSKills} projectDescription={ferrariDescription} />
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App
