import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../../Nav/NavStart';
import NavEnd from '../../Nav/NavEnd'; 
import ReactQuill from 'react-quill';
import { AUTH_CONFIG } from '../../Helpers/Auth/auth0-variables';

export default class UpdateJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            title: '',
            organization: '',
            location: '',
            description: '',
            startDate: '',
            endDate: '',
            tech: [],
            jobId: '',
            job: {}
        }
        this.updateJob = this.updateJob.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.orgChange = this.orgChange.bind(this);
        this.startDateChange = this.startDateChange.bind(this);
        this.endDateChange = this.endDateChange.bind(this);
        this.techChange = this.techChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
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
        axios.get(`/api/job/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    position: response.data.job.position,
                    title: response.data.job.title,
                    organization: response.data.job.organization,
                    location: response.data.job.location,
                    description: response.data.job.description,
                    startDate: response.data.job.startDate,
                    endDate: response.data.job.endDate,
                    tech: response.data.job.tech,
                    jobId: response.data.job.jobId,
                    job: response.data.job
                })
            })
    }

    positionChange(evt) {
        this.setState({
            position: evt.target.value
        })
    }

    titleChange(evt) {
        this.setState({
            title: evt.target.value
        })
    }

    orgChange(evt) {
        this.setState({
            organization: evt.target.value
        })
    }

    locationChange(evt) {
        this.setState({
            location: evt.target.value
        })
    }

    startDateChange(evt) {
        this.setState({
            startDate: evt.target.value
        })
    }

    endDateChange(evt) {
        this.setState({
            endDate: evt.target.value
        })
    }

    descriptionChange(value) {
        this.setState({
            description: value
        })
    }

    techChange(evt) {
        let arr = evt.target.value.split(",");
        this.setState({
            tech: arr
        });
    }

    updateJob(event) {
        const jobDetails = {
            position: this.state.position,
            title: this.state.title,
            organization: this.state.organization,
            location: this.state.location,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            tech: this.state.tech,
        }
        axios.post(`/api/${ AUTH_CONFIG.clientId }/updatejob/${this.state.jobId}`, {
            position: jobDetails.position,
            title: jobDetails.title,
            organization: jobDetails.organization,
            location: jobDetails.location,
            description: jobDetails.description,
            startDate: jobDetails.startDate,
            endDate: jobDetails.endDate,
            tech: jobDetails.tech,
        })
        
        event.preventDefault();
        // Redirect to target page
        this.props.history.push('/controlpanel');
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="container">
                <header className="header">
                    <NavStart/>
                </header>
                <main className="main">
                    {isAuthenticated() && (
                        <div className="container__flex-column--white">
                            <h1 className="centered__text">Update Experience</h1>
                            <div className="container__main">
                                <form
                                    onSubmit={this.updateJob}
                                    className="container__flex-column">
                                    <input
                                        type="text"
                                        label='Title'
                                        className="form__input"
                                        placeholder="Job Title"
                                        ref="title"
                                        value={this.state.title}
                                        onChange={evt => this.titleChange(evt)}
                                    />
                                    <input
                                        type="text"
                                        label='Company / Organization'
                                        className="form__input"
                                        placeholder="Company / Organization"
                                        ref="organization"
                                        value={this.state.organization}
                                        onChange={evt => this.orgChange(evt)}
                                    />
                                    <input
                                        type="text"
                                        label='Location'
                                        className="form__input"
                                        placeholder="Location"
                                        ref="location"
                                        value={this.state.location}
                                        onChange={evt => this.locationChange(evt)}
                                    />
                                    <input
                                        type="text"
                                        label='Start Date'
                                        className="form__input"
                                        placeholder="Start Date"
                                        ref="start"
                                        value={this.state.startDate}
                                        onChange={evt => this.startDateChange(evt)}
                                    />
                                    <input
                                        type="text"
                                        label='End Date'
                                        className="form__input"
                                        placeholder="End Date"
                                        ref="end"
                                        value={this.state.endDate}
                                        onChange={evt => this.endDateChange(evt)}
                                    />

                                    <input
                                        type="text"
                                        className="form__input"
                                        placeholder="Technologies Used"
                                        ref="tech"
                                        value={this.state.tech}
                                        onChange={evt => this.techChange(evt)}
                                    />

                                    <input
                                        type="text"
                                        className="form__input"
                                        placeholder="Position"
                                        ref="position"
                                        value={this.state.position}
                                        onChange={evt => this.positionChange(evt)}
                                    />

                                    <ReactQuill
                                        value={this.state.description}
                                        onChange={this.descriptionChange}
                                        modules={this.moudles}
                                        ref="description"
                                    />

                                    <button
                                        type='submit'
                                        className="form__btn btn--primary">
                                        Update Job
                                </button>
                                </form>
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
            </div>

            
        );
    }
}
