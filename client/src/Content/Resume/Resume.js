import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';

export default class Resume extends Component {
    constructor() {
        super();
        this.state = {
            jobs: [],
            skills: [],
            education: []
        }
    }

    componentDidMount() {
        axios.get('/api/jobs')
            .then(response => {
                console.log(response.data.jobs);
                this.setState({
                    jobs: response.data.jobs,
                })
            })
        
        axios.get('/api/skills')
            .then(response => {
                console.log(response.data.skills);
                this.setState({
                    skills: response.data.skills,
                })
            })

        axios.get('/api/edu')
            .then(response => {
                console.log(response.data.edus);
                this.setState({
                    education: response.data.edus,
                })
            })
    }

    render() {
        const skills = this.state.skills;
        const techResults = skills.map(tech =>
            <li className="list__item--resume" key={tech.skillId}>{tech.skill}</li>
        );
        const experience = this.state.jobs;
        const expResults = experience.map(job =>
            <div className="resume__details" key={ job.jobId }>
                <h3> {job.organization}</h3>
                <h4>{ job.title }, { job.location }, { job.startDate } - { job.endDate }</h4>
                <div className="resume__description" dangerouslySetInnerHTML={{__html: job.description}} />
            </div>
        );
        const education = this.state.education;
        const eduResults = education.map(edu =>
            <div className="resume__details" key={ edu.eduId }>
                <h3>{ edu.schoolName }</h3>
                <h4>{edu.degree}, {edu.graduation}</h4>
                <blockquote className="resume__description">Coursework includes { `${ edu.subject }` }</blockquote>
            </div>
        );

        return(
            <div className="container">
                <header className="header">
                    <NavStart />
                </header>
                <main className="main">
                    <div className="container__main">
                        <div className="resume__tech grid__row">
                            <div className="grid__col--3">
                                <h2>Skills and Technologies</h2>
                            </div>
                            <div className="grid__col--9">
                                <ul className="list__group--resume">
                                    { techResults }
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <div className="resume__exp grid__row">
                            <div className="grid__col--3">
                                <h2>Work Exprience</h2>
                            </div>
                            <div className="grid__col--9">
                                { expResults }
                            </div>
                        </div>
                        <br />
                        <div className="resume__edu grid__row">
                            <div className="grid__col--3">
                                <h2>Education</h2>
                            </div>
                            <div className="grid__col--9">
                                { eduResults }
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="footer">
                    <NavEnd />
                </footer>
            </div>
        );
    }


}