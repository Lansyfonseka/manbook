import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import Axios from "axios";
import "./RegisterPage.scss";

export const RegisterPage = () => {
  const [name,setName] = useState('');
  const [mail,setMail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const registerUser = async () => {
    Axios.post('https://manbook-server.vercel.app/api/register',{
      userName:name,
      userMail: mail,
      userPassword: password
    });
    navigate('/users');
  }
  return (
    <>
      <div className="registration">
        <h1>Registration</h1>
        <div className="registration__form">
          <div className="registration__form_row">
            <input
              placeholder="Enter name"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={e=>setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="registration__form_row">
            <input
              placeholder="Enter email"
              id="email"
              type="text"
              name="email"
              value={mail}
              onChange={e=>setMail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="registration__form_row">
          <input
              placeholder="Enter password"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button 
          className="registration__button"
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </>
  )
}