import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import AsideLoad from './AsideLoad.js';

//Grab posts from Wordpress JSON API


const Mainsite = () => {
  return(
    <div className="flex-container">
      <Header />
      <Main />
      <AsideLoad/>
      <Footer />
    </div>
  );

}
 export default Mainsite;
