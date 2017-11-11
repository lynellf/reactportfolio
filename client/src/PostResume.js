import React, { Component } from 'react';
import axios from 'axios';
import NavStart from './NavStart';
import NavEnd from './NavEnd';
import ReactQuill from 'react-quill';

class PostResume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            experience: [],
            title: '',
            organization: '',
            description: '',
            startDate: '',
            endDate: '',
            tech: [],
            job: {
                title: '',
                organization: '',
                description: '',
                startDate: '',
                endDate: '',
                tech: []
            }
        }
        this.createJob = this.bind(this);
        this.titleChange = this.bind(this);
        this.orgChange = this.bind(this);
        this.startDateChange = this.bind(this);
        this.endDateChange = this.bind(this);
        this.techChange = this.bind(this);
    }

    titleChange(evt) {
        this.setState({
            title: evt.target.value
        })
    }

    orgChange(evt) {
        this.setState({
            title: evt.target.value
        })
    }

    startDateChange(evt) {
        this.setState({
            title: evt.target.value
        })
    }

    endDateChange(evt) {
        this.setState({
            title: evt.target.value
        })
    }

    techChange(evt) {
        this.setState({
            title: evt.target.value
        })
    }

    createJob() {
        const jobDetails = {
            title: this.state.title,
            organization: this.state.organization,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            tech: this.state.tech
        }
        this.setState({
            job: jobDetails
        });
        
    }



    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container--site">
                <header className="header">
                    <nav>
                        <NavStart />
                    </nav>
                </header>
                <main className="main">
                {isAuthenticated() && (
                <form onSubmit={this.createJob} name='photo' encType="multipart/form-data" className="post-form">
                        <div className="form">
                            <h4 className="title--medium">
                                Resume
                            </h4>
                            <input 
                                type="text" 
                                label='Title' 
                                className="form__input" 
                                placeholder="Job Title" 
                                value={this.state.title} 
                                onChange={evt => this.titleChange(evt)}
                            />
                            <input 
                                type="text" 
                                label='Company / Organization' 
                                className="form__input" 
                                placeholder="Company / Organization" 
                                value={this.state.title} 
                                onChange={evt => this.orgChange(evt)}
                            />
                            <input 
                                type="text" 
                                label='Start Date' 
                                className="form__input" 
                                placeholder="Start Date" 
                                value={this.state.title} 
                                onChange={evt => this.startDateChange(evt)}
                            />
                            <input 
                                type="text" 
                                label='End Date' 
                                className="form__input" 
                                placeholder="End Date" 
                                value={this.state.title} 
                                onChange={evt => this.endDateChange(evt)}
                            />

                            <input 
                                type="text" 
                                className="form__input" 
                                placeholder="Technologies Used"
                                value={this.state.tags} 
                                onChange={evt => this.techChange(evt)}
                            />

                            <ReactQuill 
                                value={this.state.description} 
                                onChange={this.postChange} 
                                modules={this.moudles}
                            />

                            <button 
                                type='submit' 
                                className="form__btn btn--primary">
                                Add Job
                            </button>
                        </div>
                    </form>)}

                {!isAuthenticated() && (<h4 className="title--medium">
                        You are not logged in! Please{' '}
                        <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                            Log In
                            </a>
                        {' '}to continue.
                            </h4>)}
                </main>
                <footer className="footer">
                    <div className="nav--end">
                        <span className="legal">
                            Copyright (c) 2017 Ezell Frazier All Rights Reserved.
                            </span>
                        <ul className="nav__list">
                            {!isAuthenticated() && (
                                <li 
                                    className="nav__item"
                                    onClick={this.login.bind(this)}>
                                    Log In
                            </li>
                            )}
                            {isAuthenticated() && (
                                <li 
                                    className="nav__item"
                                    onClick={this.logout.bind(this)}>
                                    Log Out
                            </li>
                            )}
                        </ul>
                    </div>
                </footer>
            </div>

        )
    }
}

export default PostResume;