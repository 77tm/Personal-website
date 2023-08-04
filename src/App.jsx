import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  const [activeItem, setActiveItem] = React.useState("all");

  React.useEffect(() => {
    // This function will be called whenever the darkMode state changes
    // It will add or remove the 'dark-mode' class to the body element
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`page ${darkMode ? "dark-mode" : "light-mode"}`}>

        <Header activeItem={activeItem} setActiveItem={setActiveItem} darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* <div className="banner">
        Currently In Development Stage
      </div> */}

        <Main activeItem={activeItem} setActiveItem={setActiveItem} />
    </div>
  )
}

export default App
