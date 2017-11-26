import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import { Link } from "react-router-dom";
import Loading from "../../Style/images/Rolling.svg";
import Desktop from "../../Style/images/imac.svg";

export default class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get('/api/portfolio')
            .then(response => {
                console.log(response.data.posts);
                this.setState({
                    projects: response.data.posts,
                    isLoading: false
                })
            })
    }

    render() {
        const projects = this.state.projects;
        const results = projects.map(project =>
            <div className="imac__container--small" key={ project.postId }>
                <div className="imac__display--small">
                    <img src={Desktop} alt="Desktop Display" className="imac__frame--small"/>
                </div>
                <img src={ project.imgUrl } alt={ project.title } className="imac__image--small"/>
                <Link to={ `post/${ project.postId }` } className="imac__title btn--primary">{ project.title }</Link>
            </div>
        );

        if (this.state.isLoading === true) {
            return (
                <div className="container__flex-column--white">
                    <img src={Loading} alt="Loading" className="centered" />
                </div>
            );
        } else {
            return (
                <div className="container">
                    <header className="header">
                        <NavStart />
                    </header>
                    <main className="main">
                        <div className="container__flex-column--white">
                            <h1 className="centered__text">Portfolio</h1>
                            <div className="container__flex-row">
                                {results}
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

}