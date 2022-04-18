import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

export const Header = () => {
  return (
    <>
    <header className='header'>
      <Link to="/" className="logo" />
      <Link to="users">Users</Link>
      <div>
        <Link to="login" className="header__login">Sign in</Link>
        <Link to="register" className="header__register">Sign up</Link>
      </div>
    </header>
    </>
  )
}