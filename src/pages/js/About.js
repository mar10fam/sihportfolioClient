import React from "react";
import '../css/About.css';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    const toTwitter = "https://twitter.com/shiraishorizon?lang=en";
    const toInstagram = "https://www.instagram.com/shiraishorizon/";

    return (
        <div className="aboutme-container">
            <div className="aboutme">
                <p> About Me </p>
                <p className="aboutme-description">
                23 | he/him | Self-taught Illustrator | 8 years Photoshop experience
                </p>
            </div>
            <hr className="divider"/> 
            <div className="skills">
                <p>Skills</p>
                <ul>
                    <li>Graphic Design</li>
                    <li>Illustration</li>
                    <li>Concept Art</li>
                </ul>
            </div>
            <hr className="divider" />
            <div className="software">
                <p>Software Used</p>
                <ul>
                    <li>ClipStudioPaint</li>
                    <li>Photoshop</li>
                </ul>
            </div> 
            <div className="socials">
                <hr className="divider" />
                <p>Links to Socials</p>
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
                </ul>
            </div>
        </div>
    )
}

export default About