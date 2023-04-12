import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <p>India</p>
      <div className='footer-links'>
          <div>
            <a href='/'>About</a>
            <a href='/'>Advertising</a>
            <a href='/'>Business</a>
            <a href='/'>How Search Works</a>
          </div>
          <div>
            <a href='/'>Privacy</a>
            <a href='/'>Terms</a>
            <a href='/'>Settings</a>
          </div>
      </div>
    </div>
  );
};

export default Footer;
