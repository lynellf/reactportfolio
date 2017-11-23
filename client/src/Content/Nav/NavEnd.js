import React from 'react';
import { Link } from 'react-router-dom';

const NavEnd = () => {
  return (
    <div className="nav__end grid__row">
      <span className="legal grid__col--6">
        Copyright (c) 2017 Ezell Frazier All Rights Reserved.
      </span>
      <div className="list__container--about grid__col--3">
        <span className="title--about">About</span>
        <ul className="list__group--about">
            <li className="list__item--about">
                <Link to="/">Home</Link>
            </li>
            <li className="list__item--about">
                <Link to ="/resume">Resume</Link>
            </li>
            <li className="list__item--about">
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="list__item--about">
                <Link to="/blog">Blog</Link>
            </li>
            <li className="list__item--about">
                <Link to="/about">More</Link>
            </li>
          </ul>
      </div>
      <div className="list__container--external grid__col--3">
        <span className="title--external">External</span>
        <ul className="list__group--external">
        <li className="list__item--external">
            <a href="#" className="social--github fui-github"></a>
          </li>
        <li className="list__item--external">
            <a href="#" className="social--linkedin fui-linkedin"></a>
          </li>
        <li className="list__item--external">
            <a href="#" className="social--facebook fui-facebook"></a>
          </li>
          <li className="list__item--external">
            <a href="#" className="social--twitter fui-twitter"></a>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default NavEnd;