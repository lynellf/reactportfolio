import React, { Component } from 'react';
import NavStart from '../Nav/NavStart';
import { withRouter, Link } from "react-router-dom";
import EditPosts from './Resume/EditPosts';
import EditJob from './Resume/EditJob';
import EditSkills from './Resume/EditSkills';
import EditEducation from './Resume/EditEducation';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
            <div className="container">
                <header className="header">
                    <nav>
                        <NavStart />
                    </nav>
                </header>
                <main className="main">
                    {/* {isAuthenticated() && (
                    <div className="control-panel">
                        <div className="quickbar">
                            <ul className="quickbar__list">
                                <li className="quickbar__item"><Link to="/new">New Post</Link></li>
                                <li className="quickbar__item"><Link to="/editresume">Edit Resume</Link></li>
                            </ul>
                        </div>
                        <div className="blog-config">
                            <h2>Blog Content</h2>
                            <EditPosts/>
                        </div>
                        <div className="resume-config">
                            <h2>Resume Details</h2>
                            <div className="resume-config__items">
                                <div className="">
                                    <EditJob/>
                                </div>
                                <div className="">
                                    <EditSkills/>
                                </div>
                            </div>
                            <EditEducation/>
                        </div>
                        
                    </div>
                    
                        )}
                    {!isAuthenticated() && (
                        <div className="auth-check">
                    <h4 className="title--medium">
                        You are not logged in! Please{' '}
                        <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                            Log In
                            </a>
                        {' '}to continue.
                            </h4>
                        </div>
                    )} */}
                    <div className="control-panel">
                        <div className="quickbar">
                            <ul className="quickbar__list">
                                <li className="quickbar__item"><Link to="/new">New Post</Link></li>
                                <li className="quickbar__item"><Link to="/editresume">Edit Resume</Link></li>
                            </ul>
                        </div>
                        <div className="blog-config">
                            <h2>Blog Content</h2>
                            <EditPosts/>
                        </div>
                        <div className="resume-config">
                            <h2>Resume Details</h2>
                            <div className="resume-config__items">
                                <div className="">
                                    <EditJob/>
                                </div>
                                <div className="">
                                    <EditSkills/>
                                </div>
                            </div>
                            <EditEducation/>
                        </div>
                        
                    </div>
                </main>
                <footer className="footer">
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
                </footer>
            </div>
        );
    }

}

export default withRouter(ControlPanel);