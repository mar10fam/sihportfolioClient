import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import '../css/Login.css';

const Login = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  Axios.defaults.withCredentials = true;
  const login = (event) => {
    event.preventDefault();
    Axios.post("https://sihportfolio-1d10e3a48d8c.herokuapp.com/login", {
      username,
      password
    }).then((res) => {
      console.log("Server Response: ", res);
    }).then(() => {
      setLoggedIn(true);
      navigate('/');
    }).catch((err) => {
      console.error("Error: ", err);
    });
  };

  useEffect(() => {
    Axios.get("https://sihportfolio-1d10e3a48d8c.herokuapp.com/login").then((response) => {
      console.log(response);
      if(response.data.loggedIn === true) {
        setLoggedIn(true);
      }
    });
  }, [setLoggedIn]);

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
  )
}

export default Login