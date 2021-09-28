import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <ul className="list">
            <li className="list_item">
                <Link to="/overview">Overview</Link>
            </li>
            <li className="list_item">
                <Link to="/repositories">Repositories</Link>
            </li>
            <li className="list_item">
                <Link to="/packages">Packages</Link>
            </li>
            <li className="list_item">
                <Link to="/people">People</Link>
            </li>
            <li className="list_item">
                <Link to="/people">Teams</Link>
            </li>
            <li className="list_item">
                <Link to="/projects">Projects</Link>
            </li>
            <li className="list_item">
                <Link to="/settings">Settings</Link>
            </li>
            </ul>
        </nav>
    )
}
export default NavBar;