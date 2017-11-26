import React, { Component } from 'react';
import NavStart from '../../Nav/NavStart';
import NavEnd from '../../Nav/NavEnd';
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
                    <div className="container__flex-column--white">
                        <h1 className="centered__text">Add Résumé Details</h1>
                        <div className="container__main">
                            <div className="card__main">
                                <h4 className={`title--medium`}>Work Experience</h4>
                                <button type="button" className="btn--primary" onClick={this.toggleJob}>Toggle Job</button>
                            </div>
                            <div className={`${this.state.jobToggle}`}>
                                <AddJob />
                            </div>
                            <div className="card__main">
                                <h4 className={`title--medium`}>Skill</h4>
                                <button type="button" className="btn--primary" onClick={this.toggleSkill}>Toggle Skill</button>
                            </div>
                            <div className={`${this.state.skillToggle}`}>
                                <AddSkill />
                            </div>
                            <div className="card__main">
                                <h4 className={`title--medium`}>Add Education</h4>
                                <button type="button" className="btn--primary" onClick={this.toggleEdu}>Toggle Education</button>
                            </div>
                            <div className={`${this.state.eduToggle}`}>
                                <AddEdu />
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
                <NavEnd />
            </footer>
        </div>);
    }
}

export default withRouter(EditResume);
