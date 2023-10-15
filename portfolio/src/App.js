
import NavBar from "./components/navBar";
import Main from "./components/main";
import Skills from "./components/skills";
import Works from "./components/works";
import Tools from "./components/tools"
import Contact from "./components/contact";
import "./App.css" 


function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Main/>
      <Skills/>
      <Works/>
      <Tools/>
      <Contact/>

    </div>
  )
}

export default App;
