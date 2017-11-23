import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../../Nav/NavStart';
import ReactQuill from 'react-quill';
import { withRouter, Link } from "react-router-dom";
import { AUTH_CONFIG } from '../../Helpers/Auth/auth0-variables';

export default class UpdateJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: '',
            degree: '',
            subject: [],
            graduation: '',
            eduId: ''
        }
        this.updateEdu = this.updateEdu.bind(this);
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

    schoolChange(evt) {
        this.setState({
            schoolName: evt.target.value
        })
    }

    degreeChange(evt) {
        this.setState({
            degree: evt.target.value
        })
    }

    subjectChange(evt) {
        let arr = evt.target.value.split(",");
        this.setState({
            subject: arr
        });
    }

    graduationChange(evt) {
        this.setState({
            graduation: evt.target.value
        })
    }

    updateEdu(event) {
        const eduDetails = {
            schoolName: this.state.schoolName,
            degree: this.state.degree,
            subject: this.state.subject,
            graduation: this.state.graduation,
            eduId: this.state.eduId
        }

        axios.post(`/api/${ AUTH_CONFIG.clientId }/updateschool/${this.state.eduId}`, {
            schoolName: eduDetails.schoolName,
            degree: eduDetails.degree,
            subject: eduDetails.subject,
            graduation: eduDetails.graduation,
            eduId: eduDetails.eduId
        })

        event.preventDefault();

        // Redirect to target page
        this.props.history.push('/controlpanel');
    }

    componentDidMount() {
        axios.get(`/api/edu/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    schoolName: response.data.edu.schoolName,
                    degree: response.data.edu.degree,
                    subject: response.data.edu.subject,
                    graduation: response.data.edu.graduation,
                    eduId: response.data.edu.eduId
                })
            })
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="container">
                <header className="header">
                    <NavStart />
                </header>
                <main className="main">
                    {/* {isAuthenticated() && (
                        <form
                            onSubmit={this.createEdu}
                            className={`post-form`}>
                            <div className="form">
                                <input
                                    type="text"
                                    label='School'
                                    className="form__input"
                                    placeholder="Add School"
                                    ref="school"
                                    value={this.state.schoolName}
                                    onChange={evt => this.schoolChange(evt)}
                                />

                                <input
                                    type="text"
                                    label='Degree'
                                    className="form__input"
                                    placeholder="Add Degree"
                                    ref="degree"
                                    value={this.state.degree}
                                    onChange={evt => this.degreeChange(evt)}
                                />

                                <input
                                    type="text"
                                    label='Courses'
                                    className="form__input"
                                    placeholder="Add Courses"
                                    ref="subject"
                                    value={this.state.subject}
                                    onChange={evt => this.subjectChange(evt)}
                                />

                                <input
                                    type="text"
                                    label='Graduation'
                                    className="form__input"
                                    placeholder="Graduation Date"
                                    ref="graduation"
                                    value={this.state.graduation}
                                    onChange={evt => this.graduationChange(evt)}
                                />


                                <button
                                    type='submit'
                                    className="form__btn btn--primary">
                                    Update Education
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
                            onSubmit={this.updateEdu}
                            className={`post-form`}>
                            <div className="form">
                                <input
                                    type="text"
                                    label='School'
                                    className="form__input"
                                    placeholder="Add School"
                                    ref="school"
                                    value={this.state.schoolName}
                                    onChange={evt => this.schoolChange(evt)}
                                />

                                <input
                                    type="text"
                                    label='Degree'
                                    className="form__input"
                                    placeholder="Add Degree"
                                    ref="degree"
                                    value={this.state.degree}
                                    onChange={evt => this.degreeChange(evt)}
                                />

                                <input
                                    type="text"
                                    label='Courses'
                                    className="form__input"
                                    placeholder="Add Courses"
                                    ref="subject"
                                    value={this.state.subject}
                                    onChange={evt => this.subjectChange(evt)}
                                />

                                <input
                                    type="text"
                                    label='Graduation'
                                    className="form__input"
                                    placeholder="Graduation Date"
                                    ref="graduation"
                                    value={this.state.graduation}
                                    onChange={evt => this.graduationChange(evt)}
                                />


                                <button
                                    type='submit'
                                    className="form__btn btn--primary">
                                    Update Education
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
