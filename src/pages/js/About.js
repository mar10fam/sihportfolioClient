import React from "react";
import '../css/About.css';

const Contact = () => {
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
        </div>
    )
}

export default Contact