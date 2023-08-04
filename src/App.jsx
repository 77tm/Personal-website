import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  const [activeItem, setActiveItem] = React.useState("all");

  return (
    <>
    
    <div className="app">
      <Header activeItem={activeItem} setActiveItem={setActiveItem} />
    </div>

    <div className="banner">
      Currently In Development Stage
    </div>

    <div className="app">
      <Main activeItem={activeItem} />
    </div>

    </>
  )
}

export default App
