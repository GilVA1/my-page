import './App.css';
import AboutMe from './pages/about_me.js';
import Skills from "./pages/skills.js"
import NavBar from './components/NavBar';
function App() {

  const myName="Gil"

  let Page

  switch(window.location.pathname){
    case "/":
      Page=<AboutMe name={myName} studyField="Computer Science"/>
      break
    case "/skills":
      Page=<Skills/>
      break
    /*case "/projects":
      Page=Projects*/
    
      
  }
  return (

    <div>
    <NavBar/>
    {Page}
    <h2>hello</h2>
    </div>
);
}

export default App;
