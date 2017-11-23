import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Desktop from "../../Style/images/imac.svg";
import Ezell from './Images/ezell.jpg';

//Create a list of posts from the data passed as props

export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            latest: []
        }
    }

    componentDidMount() {
        axios.get('/api/latest')
            .then(response => {
                console.log(response.data.posts);
                this.setState({
                    latest: response.data.posts,
                })
            });
    }

    render() {
        const projects = this.state.latest;
        const results = projects.map(project =>
            <div className="imac__container--small" key={project.postId}>
                <div className="imac__display--small">
                    <img src={Desktop} alt="Desktop Display" className="imac__frame--small" />
                </div>
                <img src={project.imgUrl} alt={project.title} className="imac__image--small" />
                <Link to={`post/${project.postId}`} className="imac__title btn--primary">{project.title}</Link>
            </div>
        );
        return (
            <div className="grid__row">
                <div className="container__text grid__col--7 centered">
                    <div className="grid__row">
                        <img className="profile-pic image__profile" src={Ezell} alt="Image of Ezell Frazier" />
                        <div className="welcome__text">
                            <h3 className="title--medium">Background</h3>
                            <p>
                                I'm a junior-level full-stack web developer,
                                experienced in project management, database design,
                                front and back-end languages and practices.
                            </p>
                        </div>
                    </div>
                    <h2 className="title--skills">
                        JavaScript / React.js / Node.js / Express / MongoDB / Sass
                    </h2>
                    <div className="welcome__text">
                        <h3 className="title--medium">About This Site</h3>
                        <p>
                            I have created my home site using the MERN stack (Mongo, Express, React, Node.js).
                            You're currently interacting with a single-page application (SPA)
                            with complete with its very own API responsible for creating,
                            reading, updating, and deleting site content (CRUD).
                        </p>
                    </div>
                    <h3 className="title--medium">Latest Projects</h3>
                    <div className="container__flex-row">
                        {results}
                    </div>
                </div>
            </div>

        );
    }
}

