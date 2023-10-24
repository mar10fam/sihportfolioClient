import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import Axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faRightFromBracket, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../css/Navbar.css";

const Navbar = () => {
    const { loggedIn, setLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const toTwitter = "https://twitter.com/shiraishorizon?lang=en";
    const toInstagram = "https://www.instagram.com/shiraishorizon/";
    const email = "shiraishorizon.art@gmail.com";

    const logout = async () => {
        try {
            const response = await Axios.get('https://54.177.109.165/3009/logout');
            if(response.status === 200) {
                console.log("Logout Successful");
                setLoggedIn(false);
                navigate('/login');
            }
        } catch(err) {
            console.error("Logout error: ", err);
        }
    }

    return (
        <nav className="navigation">
            <ul>
                <li><Link className="nav-page" to="/">Portfolio</Link></li>
                <li><Link className="nav-page" to="/about">About</Link></li>
                <li>
                    <a
                    href={toTwitter}
                    target="_blank"
                    rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2xl" className="twitter-icon" />
                    </a>
                </li>
                <li>
                    <a
                    href={toInstagram}
                    target="_blank"
                    rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2xl" className="instagram-icon"/>
                    </a>
                </li>
                <li>
                    <a href={`mailto:${email}`}>
                        <FontAwesomeIcon icon={faEnvelope} size="2xl" className="email-icon"/>
                    </a>
                </li>
                <li><Link to="/login"><FontAwesomeIcon icon={faUser} size="2xl" className="login-icon" /></Link></li>
                {loggedIn && <>
                <li><Link to='/form'><FontAwesomeIcon icon={faClipboard} size="2xl" className="form-icon" /></Link></li>
                <FontAwesomeIcon icon={faRightFromBracket} size="2xl" className="logout-icon" onClick={logout}/>
                </>}
            </ul>
        </nav>
    )
}

export default Navbar