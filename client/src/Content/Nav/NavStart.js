import React from 'react';
import { Link } from 'react-router-dom';

const NavStart = () => {
    return(
        <div className="nav--start grid__row">
            <h2 className="title--strong grid__col--3">
                <Link to="/">Ezell Frazier</Link>
            </h2>
            <ul className="nav__list grid__col--9">
                <li className="nav__item">
                    <Link to ="/resume">Resume</Link>
                </li>
                <li className="nav__item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav__item">
                    <a href="https://teamtreehouse.com/ezellfrazier">Team Treehouse</a>
                </li>
            </ul>
        </div>
    );
}

export default NavStart;
