import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return(
    <footer className="flex-container__foot oot-nav">
      <div className="mtl pbl">
        <div className="bottom-menu bottom-menu-inverse">
          <div className="container foot-nav">
            <div className="row foot-nav__row">
              <div className="col-md-2 col-sm-2 foot-nav__row__name">
                <Link to="/" className="bottom-menu-brand">Ezell Frazier</Link>
              </div>
              <div className="col-md-8 col-sm-8">
                <span className="legal">Copyright (c) 2017 Ezell Frazier All Rights Reserved.</span>
              </div>
              <div className="col-md-2 col-sm-2 foot-nav__row__nav-list">
                <ul className="bottom-menu-iconic-list">
                  <li><a href="https://www.linkedin.com/in/ezell-frazier-830a50135" className="fui-linkedin"></a></li>
                  <li><a href="https://github.com/lynellf" className="fui-github"></a></li>
                  <li><a href="https://twitter.com/_Ezell_" className="fui-twitter"></a></li>
                  <li><a href="mailto:lynellf@gmail.com" className="fui-mail"></a></li>
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
