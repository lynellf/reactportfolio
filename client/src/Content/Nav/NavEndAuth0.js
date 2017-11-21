import React, { Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavEndAuth0 extends Component {
  constructor(props) {
    super(props);
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
}

login() {
    this.props.auth.login();
}

logout() {
    this.props.auth.logout();
}


  render() {
    const { isAuthenticated } = this.props.auth;
    
    return (
    <div className="nav--end grid__row">
      <span className="legal grid__col--6">
        Copyright (c) 2017 Ezell Frazier All Rights Reserved.
      </span>
      <div className="about grid__col--3">
        <span className="about__title">About</span>
        <ul className="about__list">
            <li className="about__item">
                <Link to="/">Home</Link>
            </li>
            <li className="about__item">
                <Link to ="/resume">Resume</Link>
            </li>
            <li className="about__item">
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="about__item">
                <Link to="/blog">Blog</Link>
            </li>
            <li className="about__item">
                <Link to="/about">More</Link>
            </li>
          </ul>
      </div>
      <div className="external grid__col--3">
        <span className="external__title">External</span>
        <ul className="external__list">
        <li className="external__item">
            <a href="#" className="social--github fui-github"></a>
          </li>
        <li className="external__item">
            <a href="#" className="social--linkedin fui-linkedin"></a>
          </li>
        <li className="external__item">
            <a href="#" className="social--facebook fui-facebook"></a>
          </li>
          <li className="external__item">
            <a href="#" className="social--twitter fui-twitter"></a>
          </li>
        </ul>

      </div>
    </div>
  );
}
}

export default withRouter(NavEndAuth0);