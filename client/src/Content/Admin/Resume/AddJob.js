import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../../Nav/NavStart';
import ReactQuill from 'react-quill';
import { withRouter, Link } from "react-router-dom";

export default class AddJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: undefined,
            title: '',
            organization: '',
            location: '',
            description: '',
            startDate: '',
            endDate: '',
            tech: [],
            jobId: `${Date.now()}`,
            jobToggle: 'hidden',
        }
        this.createJob = this.createJob.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.orgChange = this.orgChange.bind(this);
        this.startDateChange = this.startDateChange.bind(this);
        this.endDateChange = this.endDateChange.bind(this);
        this.techChange = this.techChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
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

    createJob(event) {
        const jobDetails = {
            position: this.state.position,
            title: this.state.title,
            organization: this.state.organization,
            location: this.state.location,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            tech: this.state.tech,
            jobId: this.state.jobId
        }
        axios.post('/api/submitjob', {
            position: jobDetails.position,
            title: jobDetails.title,
            organization: jobDetails.organization,
            location: jobDetails.location,
            description: jobDetails.description,
            startDate: jobDetails.startDate,
            endDate: jobDetails.endDate,
            tech: jobDetails.tech,
            jobId: jobDetails.jobId
        })
        this.setState({
            position: undefined,
            title: '',
            organization: '',
            location: '',
            description: '',
            startDate: '',
            endDate: '',
            tech: []
        });
        event.preventDefault();
    }

    render() {
        return (
            <form 
            onSubmit={this.createJob} 
                className={`post-form`}>
                <div className="form">
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
                        Add Job
            </button>
                </div>
            </form>
        );
    }
}
