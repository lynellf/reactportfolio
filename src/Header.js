import React from 'react';
import MainCarousel from './MainCarousel.js';
import NavBar from './NavBar.js';

const Header = () => {
    return(
        <header>
            <NavBar />
            <MainCarousel />
        </header>
    );
}

export default Header;
