import './App.css';
import AboutMe from './pages/about_me.js';
import Skills from "./pages/skills.js"
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import { Route,Routes } from 'react-router-dom';


function App() {

  const myName="Gilberto"
/*
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
      break
    case "/my-page":
      Page=<AboutMe name={myName} studyField="Computer Science"/>
      break
      
  }
  
  {Page}
  */

  return (

    <>

    <NavBar/>
    <Routes>
    <Route path="/my-page" element={<AboutMe name={myName} studyField="Computer Science"/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/projects" element={<Projects/>}/>
    </Routes>

    </>
);
}

export default App;
