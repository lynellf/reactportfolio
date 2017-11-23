import React from 'react';
import { Link } from 'react-router-dom';

const NavStart = () => {
    return(
        <div className="nav__start">
            <h2 className="logo">
                <Link to="/">Ezell Frazier</Link>
            </h2>
            <ul className="list__group--nav">
                <li className="list__item--nav">
                    <Link to="/">Home</Link>
                </li>
                <li className="list__item--nav">
                    <Link to ="/resume">Resume</Link>
                </li>
                <li className="list__item--nav">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="list__item--nav">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="list__item--nav">
                    <Link to="/about">More</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavStart;
