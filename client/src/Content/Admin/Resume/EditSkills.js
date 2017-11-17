import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

export default class EditSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.updateSkill = this.updateSkill.bind(this);
    }

    componentDidMount() {
        axios.get('/api/skills')
            .then(response => {
                // console.log(response.data.skills);
                this.setState({
                    skills: response.data.skills
                })
            })
    }

    handleDelete(id) {
        const skills = this.state.skills;

        axios.post(`/api/deleteskill`, {
            skillId: id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({
            skills: skills
        })

    }

    updateSkill(id) {
        // window.location.replace(`/editskill/${id}`);
        this.props.history.push(`/editskill/${id}`);
    }

    render() {
        const skillList = this.state.skills.map(skill =>
            <tr key={skill.skillId}>
                <td>
                    <span key={skill.skillId}>{skill.skill}</span>
                </td>
                <td>
                    <span key={skill.skillId}>{skill.years}</span>
                </td>
                <td className="skill-list__options">
                    <button type="button" className="btn--primary" onClick={() => this.handleDelete(skill.skillId)}>Delete</button>
                    <button type="button" className="btn--primary" onClick={() => this.updateSkill(skill.skillId)}>Edit</button>
                </td>
            </tr>);
        return (
            <div className="skll-list">
                <table className="skll-list__table">
                    <thead>
                        <tr className="skll-list__row">
                            <th className="title--light">
                                Skill
                            </th>
                            <th className="title--light">
                                Years
                            </th>
                            <th className="title--light">
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {skillList}
                    </tbody>
                </table>
            </div>
        );
    }
}