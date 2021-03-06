import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../../Nav/NavStart';
import NavEnd from '../../Nav/NavEnd'; 
import { AUTH_CONFIG } from '../../Helpers/Auth/auth0-variables';

export default class UpdateSkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: '',
            years: '',
            skillId: `${Date.now()}`
        }
        this.updateSkill = this.updateSkill.bind(this);
        this.skillChange = this.skillChange.bind(this);
        this.yearsChange = this.yearsChange.bind(this);
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
                    skill: response.data.skill.skill,
                    years: response.data.skill.years,
                    skillId: response.data.skill.skillId
                })
            })
    }

    skillChange(evt) {
        this.setState({
            skill: evt.target.value
        })
    }

    yearsChange(evt) {
        this.setState({
            years: evt.target.value
        })
    }

    updateSkill(event) {
        const skillDetails = {
            skill: this.state.skill,
            years: this.state.years,
            skillId: this.state.skillId
        }
        axios.post(`/api/${ AUTH_CONFIG.clientId }/updateskill/${this.state.skillId}`, {
            skill: skillDetails.skill,
            years: skillDetails.years,
            skillId: skillDetails.skillId
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
                            <h1 className="centered__text">Update Skill</h1>
                            <div className="container__main">
                                <form
                                    onSubmit={this.updateSkill}
                                    className="container__flex-column">

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
                                        Update Skill
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
