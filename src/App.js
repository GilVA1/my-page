import './App.css';
import AboutMe from './pages/about_me.js';
import Skills from "./pages/skills.js"
function App() {

  const myName="Gil"

  return (
    <div>
    <AboutMe name={myName} studyField="Computer Science"/>
    <Skills/>
    <h2>hello</h2>
    </div>
);
}

export default App;
