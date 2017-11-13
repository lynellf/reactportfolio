import React, { Component } from 'react';
import NavStart from '../../Nav/NavStart';
// import NavEnd from '../../Nav/NavEnd';
import AddJob from './AddJob';
import AddSkill from './AddSkill';
import AddEdu from './AddEdu';
import { withRouter } from "react-router-dom";

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
                {isAuthenticated() && (
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
        </div>);
    }
}

export default withRouter(EditResume);
