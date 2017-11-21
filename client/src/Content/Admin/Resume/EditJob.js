import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { AUTH_CONFIG } from '../../Helpers/Auth/auth0-variables';

class EditJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
           jobs: []
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.updateJob = this.updateJob.bind(this);
    }

    componentDidMount() {
        axios.get('/api/jobs')
            .then(response => {
                // console.log(response.data.jobs);
                this.setState({
                    jobs: response.data.jobs
                })
            })
    }

    handleDelete(id) {
        const jobs = this.state.jobs;

        axios.post(`/api/${ AUTH_CONFIG.clientId }/deletejob`, {
            jobId: id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({
            jobs: jobs
        })

    }

    updateJob(id) {
        // window.location.replace(`/updatejob/${id}`);
        this.props.history.push(`/updatejob/${id}`);
    }

    render() {
        const jobList = this.state.jobs.map(job =>
            <tr key={job.jobId}>
                <td>
                    <span key={job.jobId}>{job.organization}</span>
                </td>
                <td>
                    <span key={job.jobId}>{job.title}</span>
                </td>
                <td className="job-list__options">
                    <button type="button" className="btn--primary" onClick={() => this.handleDelete(job.jobId)}>Delete</button>
                    <button type="button" className="btn--primary" onClick={() => this.updateJob(job.jobId)}>Edit</button>
                </td>
            </tr>);
        return(
            <div className="job-list">
                <table className="job-list__table">
                    <thead>
                        <tr className="job-list__row">
                            <th className="title--light">
                                Organization
                            </th>
                            <th className="title--light">
                                Title
                            </th>
                            <th className="title--light">
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(EditJob);