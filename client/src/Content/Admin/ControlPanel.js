import React, { Component } from 'react';
import NavStart from '../Nav/NavStart';
import axios from 'axios';
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
                    {isAuthenticated() && (
                    <div>
                        <EditPosts/>
                        <EditJob/>
                        <EditSkills/>
                        <EditEducation/>
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
                    )}
                </main>
                <footer className="footer">
                <div className="nav--end">
                    <span className="legal">
                        Copyright (c) 2017 Ezell Frazier All Rights Reserved.
                        </span>
                    <ul className="nav__list">
                    {!isAuthenticated() && (<li onClick={this.login.bind(this)}>
                            Log In
                        </li>)}
                    {isAuthenticated() && (<li onClick={this.logout.bind(this)}>
                            Log Out
                        </li>)}
                    </ul>
                </div>
            </footer>
            </div>
        );
    }

}

export default withRouter(ControlPanel);