import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import pfp from "../../images/pfp.png"
import "../css/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="pfp">
                <img src={pfp} alt="Profile" className="pfp-image" />
            </div>
            <p className="username">SHIRAIsHORIZON</p>
            <p className="header-meta"><span><FontAwesomeIcon icon={faLocationDot} /></span> Westminster, CA</p>
            <p className="header-meta">shiraishorizon.art@gmail.com</p>
        </div>
    )
}

export default Header