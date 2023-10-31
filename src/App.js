import './App.css';
import AboutMe from './pages/about_me.js';
import Skills from "./pages/skills.js"
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
function App() {

  const myName="Gilberto"

  let Page

  switch(window.location.pathname){
    case "/":
      Page=<AboutMe name={myName} studyField="Computer Science"/>
      break
    case "/skills":
      Page=<Skills/>
      break
    case "/projects":
      Page=<Projects/>
    
      
  }
  return (

    <div>
    <NavBar/>
    {Page}
    </div>
);
}

export default App;
