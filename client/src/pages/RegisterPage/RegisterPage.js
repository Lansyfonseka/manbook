import React from "react";
import "./RegisterPage.scss";

export const RegisterPage = () => {
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
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="registration__form_row">
            <input
              placeholder="Enter email"
              id="email"
              type="text"
              name="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="registration__form_row">
          <input
              placeholder="Enter password"
              id="password"
              type="password"
              name="password"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="registration__button">Register</button>
      </div>
    </>
  )
}