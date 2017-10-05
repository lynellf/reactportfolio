import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="foot-nav">
        <ul className="foot-nav-links">
          <li><Link to="#">GitHub</Link></li>
          <li><Link to="#">LinkedIn</Link></li>
          <li><Link to="#">Twitter</Link></li>
        </ul>
        <span className="legal">Copyright (c) 2017 Ezell Frazier All Rights Reserved.</span>
        </div>
    </footer>
  );
}

export default Footer;
