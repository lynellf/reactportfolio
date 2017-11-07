import React from 'react';
import { Link } from 'react-router-dom';

const NavEnd = () => {
  return (
    <div className="nav--end">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">Ezell Frazier</Link>
        </li>
        <li className="nav__item">
            Copyright (c) 2017 Ezell Frazier All Rights Reserved.
        </li>
      </ul>
    </div>
  );
}

export default NavEnd;