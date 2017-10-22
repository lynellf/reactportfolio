import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Aside1 from './Aside1.js';
import Aside2 from './Aside2.js';

//Grab posts from Wordpress JSON API


const Mainsite = () => {
  return(
    <div className="app-container">
      <Header />
      <Main />
      <Aside1 />
      <Aside2 />
      <Footer />
    </div>
  );

}
 export default Mainsite;
