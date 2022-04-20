import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

export const Header = () => {
  return (
    <>
    <header className='header'>
      <Link to="/" className="logo" />
      <div className="search">
        <input placeholder="Search"/>
      </div> 
      {/* <Link to="users">Users</Link> */}
      <div className="authorization">
        <Link to="/login" className="authorization__login">Sign in</Link>
        <Link to="/register" className="authorization__register">Sign up</Link>
      </div>
      {/* <div className="profile">
        <div className="profile__name">Ryabtsev Egor</div>
        <img src="https://avatars.githubusercontent.com/u/45271624?v=4" alt="profile" className="profile__photo"/>
      </div> */}
    </header>
    </>
  )
}