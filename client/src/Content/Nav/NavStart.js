import React from 'react';
import { Link } from 'react-router-dom';

const NavStart = () => {
    return(
        <div className="nav--start">
            <h2 className="logo">
                <Link to="/">Ezell Frazier</Link>
            </h2>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav__item">
                    <Link to ="/resume">Resume</Link>
                </li>
                <li className="nav__item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav__item">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="nav__item">
                    <Link to="/about">More</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavStart;
