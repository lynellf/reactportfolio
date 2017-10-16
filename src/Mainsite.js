import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Aside from './Aside.js';

//Grab posts from Wordpress JSON API


const Mainsite = () => {
  return(
    <div className="flex-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );

}
 export default Mainsite;
