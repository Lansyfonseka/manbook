import  Axios from "axios";
import React, {useState/*,useContext*/} from "react";
import {useNavigate} from 'react-router-dom';
// import { AuthContext } from "../../context/AuthContext";
import "./AuthPage.scss";

export const AuthPage = () => {
  const [mail,setMail] = useState('');
  const [password,setPassword] = useState('');
  // let {userName,userMail,userId,userIsAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

  const checkUser = async () => {
    Axios.post('https://manbook-server.vercel.app/api/login',{userMail:mail,userPassword:password}).then(data=> {
        // userName = data.data.user_name;
        // userMail = data.data.user_mail;
        // userId = data.data.user_id;
        // userIsAuthenticated = true;
        navigate('/users');
    });
  }

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <div className="login__form">          
          <div className="login__form_row">
            <input
              placeholder="Enter email"
              id="email"
              type="text"
              name="email"
              onChange={e=>setMail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="login__form_row">
          <input
              placeholder="Enter password"
              id="password"
              type="password"
              name="password"
              onChange={e=>setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="login__button" onClick={checkUser}>Login</button>
      </div>
    </>
  )
}