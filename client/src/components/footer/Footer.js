import React from "react";
import './Footer.scss';
// import github from '../../icons/github-logo.svg';
import githubLight from '../../icons/github-logo-light.svg';
import telegram from '../../icons/telegram-logo.svg';
import linkedin from '../../icons/linkedin-logo.svg';

export const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="creator">Created by Lansyfonseka</div>
      <div className="copyright">&copy; 2022 ManBook</div>
      <div className="communicate">
        <a href='https://github.com/Lansyfonseka' className="link__github">
          <img src={githubLight} alt="github"></img>
        </a>
        <a href='https://telegram.me/lansyfonseka' className="link__telegram">
          <img src={telegram} alt="github"></img>
        </a>
        <a href='https://www.linkedin.com/in/lansyfonseka/' className="link__linkedin">
          <img src={linkedin} alt="github"></img>
        </a>
      </div>
    </footer>
    </>
  )
}