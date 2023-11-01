import "../style.css" 
import { Link,useLocation } from "react-router-dom"
function NavBar(){

    const relativePath=useLocation();
    const path = relativePath.pathname.split("/").pop(); 
    
    return(
       <nav className="nav">
        <ul>
        <li>
        <Link className={path === "" ? "active":""}to="/my-page/">About me</Link>
        </li>

        <li>
        <Link className={path === "skills" ? "active":""}   to="/skills">My skills</Link>
        </li>

        <li>
        <Link className={path=== "projects" ? "active":""}to="/projects">My projects</Link>
        </li>
        
    
        </ul>
        <h3 id="my_name">My webpage-Gilberto Valdez Arreola</h3>
        </nav>
    )

}

export default NavBar