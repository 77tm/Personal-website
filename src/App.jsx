import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"

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

  return (
    <div className={`page ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header activeItem={activeItem} setActiveItem={setActiveItem} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main activeItem={activeItem} setActiveItem={setActiveItem} />
    </div>
  )
}

export default App
