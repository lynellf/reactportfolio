import React, { Component } from 'react';
// import Rolling from '../../Style/images/Rolling.svg';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import Welcome from './Welcome.js';


//Grab posts from Wordpress JSON API
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      latest:[]
    }
  }
  
  render() {
      return (
        <div className="container">
          <header className="header">
            <nav>
              <NavStart />
            </nav>
          </header>
          <main className="main">
            <Welcome/>
          </main>    
          <footer className="footer">
            <NavEnd />
          </footer>
        </div>
      );
    }
  }
