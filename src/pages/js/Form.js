import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Form.css';

const Form = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [art, setArt] = useState();

  const dateFormat = (date) => {
    const dateObject = new Date(date);
      const timeZoneOffset = dateObject.getTimezoneOffset();
      const localDate = new Date(dateObject.getTime() + timeZoneOffset * 60000);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatted = localDate.toLocaleDateString(undefined, options);
  
    setDate(formatted);
  }

  Axios.defaults.withCredentials = true;
  const submit = async (event) => {
    event.preventDefault();
    
    navigate('/');
    try {
      const artData = new FormData();
      artData.append('art', art);
      
      const addArt = await Axios.post("https://sihportfolio-247b71a20dfc.herokuapp.com/art/addArt", artData);
      const artFileName = addArt.data.artFileName

      const formData = {
        title: title,
        type: type, 
        date: date,
        description: description,
        artFileName: artFileName
      }

      const submitForm = await Axios.post("https://sihportfolio-247b71a20dfc.herokuapp.com/form", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Server Response: ", submitForm);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div className="form-container">
      <h1>Artwork Submission Form</h1>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            placeholder="Enter the title" 
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">Artwork Type:</label>
          <select id="type" name="type" className="form-control" onChange={(e) => setType(e.target.value)}>
            <option value="">Select an artwork type:</option>
            <option value="illustration">Illustration</option>
            <option value="study">Study</option>
          </select>
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
            placeholder="Enter description (optional)"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="fileInput" className="form-label">Choose a file</label>
          <input 
            type="file" 
            className="form-control" 
            id="fileInput"
            onChange={(e) => {
              setArt(e.target.files[0]);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>    
  )
}

export default Form;