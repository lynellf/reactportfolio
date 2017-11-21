import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../../Nav/NavStart';
import ReactQuill from 'react-quill';
import { withRouter, Link } from "react-router-dom";
import { AUTH_CONFIG } from '../../Helpers/Auth/auth0-variables';

export default class AddSkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillName: '',
            years: '',
            skillId: `${Date.now()}`
        }
        this.createSkill = this.createSkill.bind(this);
        this.skillChange = this.skillChange.bind(this);
        this.yearsChange = this.yearsChange.bind(this);
    }

    skillChange(evt) {
        this.setState({
            skillName: evt.target.value
        })
    }

    yearsChange(evt) {
        this.setState({
            years: evt.target.value
        })
    }


    createSkill(event) {
        const skillDetails = {
            skill: this.state.skillName,
            years: this.state.years,
            skillId: this.state.skillId
        }

        axios.post(`/api/${ AUTH_CONFIG.clientId }/submitskill`, {
            skill: skillDetails.skill,
            years: skillDetails.years,
            skillId: skillDetails.skillId
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            skillName: '',
            years: '',
            skillId: `${Date.now()}`
        });
        event.preventDefault();
    }

    render() {
        return (
            <form
                onSubmit={this.createSkill}
                className={`post-form`}>
                <div className="form">
                    <input
                        type="text"
                        label='Skill'
                        className="form__input"
                        placeholder="Add Skill"
                        ref="skill"
                        value={this.state.skillName}
                        onChange={evt => this.skillChange(evt)}
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
                        Add Skill
                    </button>
                </div>
            </form>
        );
    }
}
