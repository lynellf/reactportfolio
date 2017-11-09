import React from 'react';
import { Link } from 'react-router-dom';

const NavStart = () => {
    return(
        <div className="nav--start grid__col--12">
            <h2 className="title--strong">
                <Link to="/">Ezell Frazier</Link>
            </h2>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="https://github.com/lynellf">GitHub</a>
                </li>
                <li className="nav__item">
                    <a href="https://www.linkedin.com/in/ezell-frazier-830a50135">LinkedIn</a>
                </li>
                <li className="nav__item">
                    <a href="https://teamtreehouse.com/ezellfrazier">Team Treehouse</a>
                </li>
            </ul>
        </div>
    );
}

export default NavStart;
