import '../css/Navbar.css';
import { Link } from 'react-router-dom';

const BotNavbar = () => {
    return (
        <nav className="botNav">
            <ul>
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default BotNavbar