import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../../Nav/NavStart';
import ReactQuill from 'react-quill';
import { withRouter, Link } from "react-router-dom";
import { AUTH_CONFIG } from '../../Helpers/Auth/auth0-variables';

export default class UpdateSkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: '',
            degree: '',
            subject: [],
            graduation: '',
            eduId: `${Date.now()}`
        }
        this.createEdu = this.createEdu.bind(this);
        this.schoolChange = this.schoolChange.bind(this);
        this.degreeChange = this.degreeChange.bind(this);
        this.subjectChange = this.subjectChange.bind(this);
        this.graduationChange = this.graduationChange.bind(this);
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

    componentDidMount() {
        axios.get(`/api/skills/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    skillName: response.data.skill.skill,
                    years: response.data.skill.years,
                    skillId: response.data.skill.skillId
                })
            })
    }

    schoolChange(evt) {
        this.setState({
            skillName: evt.target.value
        })
    }

    yearsChange(evt) {
        this.setState({
            years: evt.target.value
        })
    }

    updateSkill(event) {
        const skillDetails = {
            skillName: this.state.skillName,
            years: this.state.years,
            skillId: this.state.skillId
        }
        axios.post(`/api/${ AUTH_CONFIG.clientId }/updateskill/${this.state.skillId}`, {
            skill: skillDetails.skillName,
            years: skillDetails.years,
            skillId: skillDetails.skillId
        })
        
        event.preventDefault();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="container">
                <header className="header">
                    <NavStart/>
                </header>
                <main className="main">
                    {/* {isAuthenticated() && (
                        <form
                onSubmit={this.updateSkill}
                className={`post-form`}>
                <div className="form">
                    <input
                        type="text"
                        label='Skill'
                        className="form__input"
                        placeholder="Add Skill"
                        ref="skill"
                        value={this.state.skillName}
                        onChange={evt => this.schoolChange(evt)}
                    />

                    <input
                        type="text"
                        label='Years'
                        className="form__input"
                        placeholder="Years of Experience"
                        ref="years"
                        value={this.state.years}
                        onChange={evt => this.yearsChange(evt)}
                    />


                    <button
                        type='submit'
                        className="form__btn btn--primary">
                        Update Skill
                    </button>
                </div>
            </form>
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
                    
                    <form
                onSubmit={this.updateSkill}
                className={`post-form`}>
                <div className="form">
                    <input
                        type="text"
                        label='Skill'
                        className="form__input"
                        placeholder="Add Skill"
                        ref="skill"
                        value={this.state.skillName}
                        onChange={evt => this.schoolChange(evt)}
                    />

                    <input
                        type="text"
                        label='Years'
                        className="form__input"
                        placeholder="Years of Experience"
                        ref="years"
                        value={this.state.years}
                        onChange={evt => this.yearsChange(evt)}
                    />


                    <button
                        type='submit'
                        className="form__btn btn--primary">
                        Update Skill
                    </button>
                </div>
            </form>
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
