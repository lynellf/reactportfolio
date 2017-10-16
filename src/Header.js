import React from 'react';
import MainCarousel from './MainCarousel.js';
import NavBar from './NavBar.js';

const Header = () => {
    return(
        <header className="flex-container__head">
            <NavBar />
            <MainCarousel />
        </header>
    );
}

export default Header;
