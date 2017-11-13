import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../../Nav/NavStart';
import ReactQuill from 'react-quill';
import { withRouter, Link } from "react-router-dom";

export default class AddEdu extends Component {
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

    createEdu(event) {
        const eduDetails = {
            schoolName: this.state.schoolName,
            degree: this.state.degree,
            subject: this.state.subject,
            graduation: this.state.graduation,
            eduId: this.state.eduId
        }

        axios.post('/api/submitedu', {
            schoolName: eduDetails.schoolName,
            degree: eduDetails.degree,
            subject: eduDetails.subject,
            graduation: eduDetails.graduation,
            eduId: eduDetails.eduId
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

        this.setState({
            schoolName: '',
            degree: '',
            subject: [],
            graduation: ''
        });
        event.preventDefault();
    }

    render() {
        return (
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
                        Add Education
                    </button>
                </div>
            </form>
        );
    }
}
