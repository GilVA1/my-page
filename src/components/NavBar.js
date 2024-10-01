import "../style.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();
    const currentPath = location.pathname.replace(/^\/|\/$/g, '');  

    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link className={currentPath === "my-page" || currentPath === "" ? "active" : ""} to="/my-page">
                        About me
                    </Link>
                </li>

                <li>
                    <Link className={currentPath === "highlights" ? "active" : ""} to="/highlights">
                        Top highlights 
                    </Link>
                </li>

                <li>
                    <Link className={currentPath === "skills" ? "active" : ""} to="/skills">
                        My skills
                    </Link>
                </li>

                <li>
                    <Link className={currentPath === "work_experience" ? "active" : ""} to="/work_experience">
                        My work experience
                    </Link>
                </li>


                <li>
                    <Link className={currentPath === "projects" ? "active" : ""} to="/projects">
                        My projects
                    </Link>
                </li>

                




            </ul>
            <h3 id="my_name">My webpage - Gilberto Valdez Arreola</h3>
        </nav>
    );
}

export default NavBar;
