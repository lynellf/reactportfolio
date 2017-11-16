import React from 'react';
import { Link } from 'react-router-dom';

const NavEnd = () => {
  return (
    <div className="nav--end">
      <span className="legal">
        Copyright (c) 2017 Ezell Frazier All Rights Reserved.
      </span>
      <div className="about">
        <span className="about__title">About</span>
        <ul className="about__list">
                <li className="about__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="about__item">
                    <Link to ="/resume">Resume</Link>
                </li>
                <li className="about__item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="about__item">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="about__item">
                    <Link to="/about">More</Link>
                </li>
            </ul>
      </div>
      <div className="external">
        <span className="external__title">External</span>
        <ul className="external__list">
        <li className="external__item">
            <a href="#" className="social--github fui-github"></a>
          </li>
        <li className="external__item">
            <a href="#" className="social--linkedin fui-linkedin"></a>
          </li>
        <li className="external__item">
            <a href="#" className="social--facebook fui-facebook"></a>
          </li>
          <li className="external__item">
            <a href="#" className="social--twitter fui-twitter"></a>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default NavEnd;