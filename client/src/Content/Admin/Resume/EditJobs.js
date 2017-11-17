import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

export default class EditJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        axios.get('/api/jobs')
            .then(response => {
                // console.log(response.data.posts);
                this.setState({
                    jobs: response.data.jobs
                })
            })
    }

    render() {
        const jobs = this.state.jobs;
        let jobLit = jobs.map(job => )
        return(
            <div className="edit-job">
                
            </div>
        );
    }
}