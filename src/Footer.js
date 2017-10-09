import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return(
    <footer className="col-container foot-nav">
      <div className="mtl pbl">
        <div className="bottom-menu bottom-menu-inverse">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-2">
                <Link to="#fakelink" className="bottom-menu-brand">Ezell Frazier</Link>
              </div>
              <div className="col-md-8 col-sm-8">
                <span className="legal">Copyright (c) 2017 Ezell Frazier All Rights Reserved.</span>
              </div>
              <div className="col-md-2 col-sm-2">
                <ul className="bottom-menu-iconic-list">
                  <li><Link to="https://www.linkedin.com/in/ezell-frazier-830a50135" className="fui-linkedin"></Link></li>
                  <li><Link to="https://github.com/lynellf" className="fui-github"></Link></li>
                  <li><Link to="https://twitter.com/_Ezell_" className="fui-twitter"></Link></li>
                  <li><Link to="mailto:lynellf@gmail.com" className="fui-mail"></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    // <footer className="col-container">
    //   <div className="foot-nav">
    //     <ul className="foot-nav-links">
    //       <li><Link to="#">GitHub</Link></li>
    //       <li><Link to="#">LinkedIn</Link></li>
    //       <li><Link to="#">Twitter</Link></li>
    //     </ul>
    //     <span className="legal">Copyright (c) 2017 Ezell Frazier All Rights Reserved.</span>
    //     </div>
    // </footer>
  );
}

export default Footer;
