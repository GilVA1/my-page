import "../style.css" 
function NavBar(){
    return(
       <nav className="nav">
        
        <ul>
        <li>
        <a href="/">About me</a>
        </li>

        <li>
        <a href="/skills">My skills</a>
        </li>

        <li>
        <a href="/projects">My projects</a>
        </li>
        </ul>
        </nav>
    )

}

export default NavBar