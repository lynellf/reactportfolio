import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return(
    <footer className="app-container__foot foot-nav">
      <div className="app-container__foot__elm1 mtl pbl">
        <div className="app-container__foot__elm2 bottom-menu bottom-menu-inverse">
          <div className="app-container__foot__elm3 container foot-nav">
            <div className="app-container__foot__elm4 row foot-nav__row">
              <div className="app-container__foot__elm5 col-md-2 col-sm-2 foot-nav__row__name">
                <Link to="/" className="app-container__foot__elm6 bottom-menu-brand">Ezell Frazier</Link>
              </div>
              <div className="app-container__foot__elm8 col-md-8 col-sm-8">
                <span className="app-container__foot__elm8 legal">Copyright (c) 2017 Ezell Frazier All Rights Reserved.</span>
              </div>
              <div className="app-container__foot__elm9 col-md-2 col-sm-2 foot-nav__row__nav-list">
                <ul className="app-container__foot__elm10 bottom-menu-iconic-list">
                  <li><a href="https://www.linkedin.com/in/ezell-frazier-830a50135" className="app-container__foot__elm11 fui-linkedin"></a></li>
                  <li><a href="https://github.com/lynellf" className="app-container__foot__elm12 fui-github"></a></li>
                  <li><a href="https://twitter.com/_Ezell_" className="app-container__foot__elm13 fui-twitter"></a></li>
                  <li><a href="mailto:lynellf@gmail.com" className="app-container__foot__elm14 fui-mail"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
