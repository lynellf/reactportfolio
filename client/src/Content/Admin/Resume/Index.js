import React, { Component } from 'react';
import NavStart from '../../Nav/NavStart';
// import NavEnd from '../../Nav/NavEnd';
import AddJob from './AddJob';
import AddSkill from './AddSkill';
import AddEdu from './AddEdu';
import { withRouter, Link } from "react-router-dom";

class EditResume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobToggle: 'hidden',
            skillToggle: 'hidden',
            eduToggle: 'hidden'
        }
        this.toggleJob = this.toggleJob.bind(this);
        this.toggleSkill = this.toggleSkill.bind(this);
        this.toggleEdu = this.toggleEdu.bind(this);
    }

    goTo(route) {
        this.props.history.replace(`/${route}`);
    }
    login() {
        this.props.auth.login();
    }
    logout() {
        this.props.auth.logout();
    }

    toggleJob() {
        if (this.state.jobToggle === '' || this.state.jobToggle === 'block') {
            this.setState({
                jobToggle: 'hidden'
            })
        } else {
            this.setState({
                jobToggle: 'block'
            })
        }
    }

    toggleSkill() {
        if (this.state.skillToggle === '' || this.state.skillToggle === 'block') {
            this.setState({
                skillToggle: 'hidden'
            })
        } else {
            this.setState({
                skillToggle: 'block'
            })
        }
    }

    toggleEdu() {
        if (this.state.eduToggle === '' || this.state.eduToggle === 'block') {
            this.setState({
                eduToggle: 'hidden'
            })
        } else {
            this.setState({
                eduToggle: 'block'
            })
        }
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (<div className="container">
            <header className="header">
                <NavStart />
            </header>
            <main className="main">
                /* {isAuthenticated() && (
                    <div className="res">
                        <span className="res__toggle" onClick={this.toggleJob}>
                            <h4 className={`title--medium`}>Add Job</h4>
                        </span>
                        <div className={`${this.state.jobToggle}`}>
                            <AddJob />
                        </div>
                        <span className="res__toggle" onClick={this.toggleSkill}>
                            <h4 className={`title--medium`}>Add Skill</h4>
                        </span>
                        <div className={`${this.state.skillToggle}`}>
                            <AddSkill />
                        </div>
                        <span className="res__toggle" onClick={this.toggleEdu}>
                            <h4 className={`title--medium`}>Add Education</h4>
                        </span>
                        <div className={`${this.state.eduToggle}`}>
                            <AddEdu />
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
                )} */
                <div className="res">
                        <span className="res__toggle" onClick={this.toggleJob}>
                            <h4 className={`title--medium`}>Add Job</h4>
                        </span>
                        <div className={`${this.state.jobToggle}`}>
                            <AddJob />
                        </div>
                        <span className="res__toggle" onClick={this.toggleSkill}>
                            <h4 className={`title--medium`}>Add Skill</h4>
                        </span>
                        <div className={`${this.state.skillToggle}`}>
                            <AddSkill />
                        </div>
                        <span className="res__toggle" onClick={this.toggleEdu}>
                            <h4 className={`title--medium`}>Add Education</h4>
                        </span>
                        <div className={`${this.state.eduToggle}`}>
                            <AddEdu />
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
        </div>);
    }
}

export default withRouter(EditResume);
