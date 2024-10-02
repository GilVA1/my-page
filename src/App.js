import './App.css';
import AboutMe from './pages/about_me.js';
import Skills from "./pages/skills.js"
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Highlights from './pages/highlights.js';
import WorkExperience from './pages/work_experience.js';
import { Route, Routes} from 'react-router-dom';


function App() {

  const myName="Gilberto"

  // Hacky way to change background color
  //document.body.style = 'background: black;'; 
  return (

    <>

      <NavBar/>

      <Routes> 
        <Route path="/my-page" element={<AboutMe name={myName} studyField="Computer Science"/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/highlights" element={<Highlights/>}/>
        <Route path="/work_experience" element={<WorkExperience/>}/>
      </Routes>

    </>
);
}

export default App;
