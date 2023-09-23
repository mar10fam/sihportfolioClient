import "../css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const toTwitter = "https://twitter.com/shiraishorizon?lang=en";
    const toInstagram = "https://www.instagram.com/shiraishorizon/";
    const email = "shiraishorizon.art@gmail.com";

    return (
        <nav className="footer">
            <ul>
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
            </ul>
        </nav>
    )
}

export default Footer