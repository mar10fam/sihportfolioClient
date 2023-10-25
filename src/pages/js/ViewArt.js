import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import '../css/ViewArt.css';
import { AuthContext } from '../../Context/AuthContext';

const ViewArt = () => {
    const { id } = useParams();
    const [artwork, setArtwork] = useState([]);
    const { loggedIn } = useContext(AuthContext);

    const [newTitle, setNewTitle] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const dateFormat = (date) => {
      const dateObject = new Date(date);
      const timeZoneOffset = dateObject.getTimezoneOffset();
      const localDate = new Date(dateObject.getTime() + timeZoneOffset * 60000);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatted = localDate.toLocaleDateString(undefined, options);
        setNewDate(formatted);
      }

    const update = (event) => {
        event.preventDefault();
        Axios.put("https://54.177.109.165:3009/update", {
            id: id,
            title: newTitle,
            date: newDate,
            description: newDescription
        }).then((res) => {
            Axios.get(`https://54.177.109.165:3009/update/viewArt/${id}`)
            .then((res) => {
                setArtwork(res.data[0]);
            }).catch((err) => {
                console.error(err);
            });
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        Axios.get(`https://54.177.109.165:3009/update/viewArt/${id}`)
        .then((res) => {
            console.log("viewart response: ", res);
            console.log(res.data[0]);
            setArtwork(res.data[0]);
        }).catch((err) => {
            console.error(err);
        });
    }, [id]);

    return (
        <>
        <div className="viewArt">
            <p className="title">{artwork.title}</p>
            <p className="date">{artwork.date}</p>
            <img src={`https://54.177.109.165:3009/images/${artwork.art}`} alt={artwork.title} />
            <p className="description">{artwork.description}</p>
        </div>
        
        {loggedIn &&
        <form onSubmit={update} className="updateForm">
        <h1>Update Artwork Information</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            placeholder="Enter new title" 
            onChange={(e) => {
                setNewTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input 
            type="date"
            className="form-control" 
            id="date"
            onChange={(e) => {
              dateFormat(e.target.value);
            }} 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea 
            className="form-control" 
            id="description" 
            rows="4" 
            placeholder="Enter new description"
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
        }

        </>
        
    )
}

export default ViewArt;