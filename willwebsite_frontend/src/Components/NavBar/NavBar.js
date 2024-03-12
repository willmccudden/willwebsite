import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    return(
        <nav className="nav">
            <ul>
                <li>
                    <Link to= "/">Home</Link>
                </li>
                <li>
                    <Link to= "/projectlog">Project Log</Link>
                </li>
            </ul>
        </nav>

    )
}