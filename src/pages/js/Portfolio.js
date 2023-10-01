import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../css/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../Context/AuthContext';

const Portfolio = () => {
    const { loggedIn } = useContext(AuthContext);
    const [category, setCategory] = useState("all");
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        let select = "";
        if(category === "all") {
            select = "SELECT * FROM artworks";
        } else if(category === "illustration") {
            select = "SELECT * FROM artworks WHERE type = 'illustration'";
        } else {
            select = "SELECT * FROM artworks WHERE type = 'study'";
        }
        Axios.post("https://sihportfolio-1b62f97804c9.herokuapp.com/portfolio", {
            withCredentials: true,
            select
        }).then((res) => {
            setArtworks(res.data);
        }).catch((err) => {
            console.error(err);
        })
    }, [category]);

    const deleteArt = (id, art) => {
        Axios.delete(`https://sihportfolio-1b62f97804c9.herokuapp.com/portfolio/deleteArt/${id}/${art}`)
        .then((res) => {
            setArtworks(artworks.filter((val) => {
                return val.id !== id;
            }))
        })
    }

    return (
        <>
            <div className="filter">
                <ul className="filter-list">
                    <li onClick={() => setCategory("all")}>All</li>
                    <li onClick={() => setCategory("illustration")}>Illustrations</li>
                    <li onClick={() => setCategory("study")}>Studies</li>
                </ul>
            </div>
            <div className="portfolio">
                {Array.isArray(artworks) && artworks.map((artwork, index) => {
                    return (
                        <div className="portfolio-artworks" key={index}>
                            <Link to={`/viewArt/${artwork.id}`}>
                                <img src={`https://sihportfolio-1b62f97804c9.herokuapp.com/images/${artwork.art}`} alt={artwork.title} />
                            </Link>
                            <div className="art-title">{artwork.title}</div>
                            {loggedIn && 
                            <FontAwesomeIcon 
                                icon={faTrashCan} 
                                size="xl" 
                                className="art-delete" 
                                onClick={() => {
                                    deleteArt(artwork.id, artwork.art)
                                }}
                            />
                            }
                            
                        </div>  
                    )
                })}
            </div>
        </>
    )
}

export default Portfolio