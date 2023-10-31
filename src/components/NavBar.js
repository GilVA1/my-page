import "../style.css" 
function NavBar(){
    return(
       <nav className="nav">
        <ul>
        <li>
        <a className={window.location.pathname === "/" ? "active":""}href="/">About me</a>
        </li>

        <li>
        <a className={window.location.pathname === "/skills" ? "active":""}    href="/skills">My skills</a>
        </li>

        <li>
        <a className={window.location.pathname === "/projects" ? "active":""}href="/projects">My projects</a>
        </li>
        
    
        </ul>
        <h3 id="my_name">My webpage-Gilberto Valdez Arreola</h3>
        </nav>
    )

}

export default NavBar