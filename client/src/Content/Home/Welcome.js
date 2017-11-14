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
            <div className="project__item" key={project.postId}>
                <div className="project__display">
                    <img src={Desktop} alt="Desktop Display" className="project__imac" />
                </div>
                <img src={project.imgUrl} alt={project.title} className="project__img" />
                <Link to={`post/${project.postId}`}>{project.title}</Link>
            </div>
        );
        return (
            <div className="welcome__intro grid__row">
                <div className="container--text grid__col--7 centered">
                    <h3 className="title--medium">Background</h3>
                    <p>I'm a junior-level full-stack web developer,
                    experienced in project management, database design,
                    front and back-end languages and practices.
                    </p>
                    <h2 className="title--medium-bold welcome__skills">
                        JavaScript / React.js / Node.js / Express / MongoDB / Sass
                    </h2>
                    <h3 className="title--medium">About This Site</h3>
                    <p>
                        I have created my home site using the MERN stack (Mongo, Express, React, Node.js).
                    You're currently interacting with a single-page application (SPA)
                    with complete with its very own API responsible for creating,
                    reading, updating, and deleting site content (CRUD).
                    </p>
                    <h3 className="title--medium">Latest Projects</h3>
                    <div className="project">
                            {results}
                    </div>
                </div>
                <div className="welcome__image grid__col--3">
                    <img className="profile-pic" src={Ezell} alt="Image of Ezell Frazier" />
                </div>


            </div>

        );
    }
}

