import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { AUTH_CONFIG } from '../../Helpers/Auth/auth0-variables';

class EditEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edus: []
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.updateEdu = this.updateEdu.bind(this);
    }

    componentDidMount() {
        axios.get('/api/edu')
            .then(response => {
                // console.log(response.data.edus);
                this.setState({
                    edus: response.data.edus
                })
            })
    }

    handleDelete(id) {
        const edus = this.state.edus;

        axios.post(`/api/${ AUTH_CONFIG.clientId }/deleteschool`, {
            eduId: id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({
            edus: edus
        })

    }

    updateEdu(id) {
        // window.location.replace(`/editedu/${id}`);
        this.props.history.push(`/updateschool/${id}`);
    }

    render() {
        const eduList = this.state.edus.map(edu =>
            <tr key={edu.eduId}>
                <td>
                    <span key={edu.eduId}>{edu.schoolName}</span>
                </td>
                <td>
                    <span key={edu.eduId}>{edu.degree}</span>
                </td>
                <td className="table__options">
                    <button type="button" className="btn--primary" onClick={() => this.handleDelete(edu.eduId)}>Delete</button>
                    <button type="button" className="btn--primary" onClick={() => this.updateEdu(edu.eduId)}>Edit</button>
                </td>
            </tr>);
        return (
            <div className="container__main">
                <h3>Education</h3>
                <table className="table-responsive table-striped">
                    <thead>
                        <tr className="">
                            <th className="title--light">
                                School Name
                            </th>
                            <th className="title--light">
                                Degree
                            </th>
                            <th className="title--light">
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {eduList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(EditEducation);