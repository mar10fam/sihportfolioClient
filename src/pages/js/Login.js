import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import '../css/Login.css';
import LoginModal from '../../components/js/LoginModal';
import FormModal from '../../components/js/AdminModal';

const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser, setRegisterUser] = useState('');
  const [registerPw, setRegisterPw] = useState('');

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [formShow, setFormShow] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleClose = () => setShow(false);

  const handleShow = (message) => {    
    const messageType = typeof message;
    if(messageType === "string") {
      if(username === "" || password === "") {
        setMessage("Please do not leave any blank fields");
        setShow(true);
      } else if(message === "User does not exist") {
        setMessage(message);
        setShow(true);
      } else if(message === "We could not find an admin with that username and password") {
        setMessage(message);
        setShow(true);
      }
    }
    
  }

  const formHandleClose = () => setFormShow(false);

  const formHandleShow = (message) => {
    if(message === "There was an error attempting to register the admin") {
      setFormMessage(message);
      setFormShow(true);
    } else {
      setFormMessage(`You've successfully added ${registerUser} as an admin`);
      setFormShow(true);
    }
  }

  Axios.defaults.withCredentials = true;
  const login = (event) => {
    event.preventDefault();
    Axios.post("https://54.177.109.165/3009/login", {
      username,
      password
    }).then((res) => {
      console.log("Server Response: ", res);
      handleShow(res.data);
      Axios.get("https://54.177.109.165/3009/login/getLogin").then((response) => {
      console.log(response);
      if(response.data.loggedIn === true) {
        setLoggedIn(true);
        navigate('/');
      }
    });
    }).catch((err) => {
      console.error("Error: ", err);
    });
  };

  const register = (event) => { 
    event.preventDefault();
    if(registerUser === "" || registerPw === "") { 
      setFormMessage("Please do not leave username or password blank"); 
      setFormShow(true);
    } else {
      Axios.post("https://54.177.109.165/3009/login/newadmin", { 
        registerUser, 
        registerPw 
      }).then((res) => { 
        console.log("Admin Post Response: ", res);
        formHandleShow(res.data);
        navigate('/login');
      }).catch((err) => {
        console.error(err);
      })
    }
  }

  return (
    <>
    
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
            autoComplete="username"
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
            autoComplete="current-password"
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
    
    <div className="register-container">
    <h2>Register a new Admin</h2>
      <form onSubmit={register}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            onChange={(e) => {
              setRegisterUser(e.target.value);
            }}
            autoComplete="username"
            className="form-control"
            id="registerUser"
            name="username"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            onChange={(e) => {
              setRegisterPw(e.target.value);
            }}
            autoComplete="current-password"
            className="form-control"
            id="registerPw"
            name="password"
            placeholder="Enter password"
          />
        </div>
        <button className="btn btn-primary">
          Register
        </button>
      </form>
    </div>

    
    <LoginModal show={show} handleClose={handleClose} message={message} /> 

    
    <FormModal show={formShow} handleClose={formHandleClose} message={formMessage} />
    </>
    
  )
}

export default Login