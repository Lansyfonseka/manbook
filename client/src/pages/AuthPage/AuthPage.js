import React from "react";
import "./AuthPage.scss";

export const AuthPage = () => {
  console.log('Auth page')
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
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="login__form_row">
          <input
              placeholder="Enter password"
              id="password"
              type="password"
              name="password"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="login__button">Register</button>
      </div>
    </>
  )
}