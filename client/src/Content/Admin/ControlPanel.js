import React, { Component } from 'react';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
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
                        <div className="container__flex-column--white">
                            <h1 className="centered__text">Control Panel</h1>
                            <div className="container__main">
                                <div className="card">
                                    <Link to="/new" className="btn--primary">New Post</Link>
                                    <Link to="/editresume" className="btn--primary">Add Résumé Details</Link>
                                </div>
                                <div className="card__column">
                                    <h2>Blog Posts</h2>
                                    <EditPosts />
                                </div>
                                <div className="card__column">
                                    <h2>Résumé Details</h2>
                                    <div className="container__flex-row--white">
                                        <div className="">
                                            <EditJob />
                                        </div>
                                        <div className="">
                                            <EditSkills />
                                        </div>
                                        <div className="">
                                            <EditEducation />
                                        </div>
                                    </div>
                                </div>

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
                    )}
                </main>
                <footer className="footer">
                    <NavEnd/>
                </footer>
            </div>
        );
    }

}

export default withRouter(ControlPanel);