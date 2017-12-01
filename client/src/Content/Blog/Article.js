import React, { Component } from 'react';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import axios from 'axios';
import _ from 'lodash';
import Desktop from "../../Style/images/imac.svg";
import Loading from "../../Style/images/Rolling.svg";


class Article extends Component {
    constructor(props) {
        super();
        this.state = {
            title: '',
            contents: '',
            imgUrl: '',
            projectUrl: '',
            gitHub: '',
            skills: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        axios.get(`/api/post/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
        this.setState({
            contents: response.data.post.post,
            title: response.data.post.title,
            imgUrl: response.data.post.imgUrl,
            projectUrl: response.data.post.projectUrl,
            gitHub: response.data.post.gitHub,
            skills: response.data.post.skills,
            isLoading: false
        })
    })
    }

    render() {
        const image = this.state.imgUrl;
        const projectUrl = this.state.projectUrl;
        const gitUrl = this.state.gitHub;
        const skillList = this.state.skills;
        let skills = skillList.map(skill => (
            <li className="label list__item" key={_.random(0, 10000, false)}>
                { skill }
            </li>
        ));
        let skillResults;
        let imageResults;
        let projectLinks;
        if (image !== "") {
            imageResults = (
                <div className="imac__container">
                    <div className="imac__display">
                        <img src={Desktop} alt="Desktop Display" className="imac__frame" />
                    </div>
                    <img src={image} alt="" className="imac__image" />
                </div>

            );
        } else if (image === "") {
            imageResults = "";
        }

        if (this.state.projectUrl && this.state.gitHub) {
            projectLinks = (
                <div className="card__default">
                    <a href={projectUrl} className="btn--primary">View Project</a>
                    <a href={gitUrl} className="btn--primary">View GitHub Repo</a>
                </div>
            );
        } 
        if (this.state.skills.length !== 0) {
            skillResults = (
                <div className="container__flex-row--white">
                <h4>Skills and Technologies</h4>
                    <ul className="list__container">
                        { skills }
                    </ul>
                </div>
            );
        }

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
                            <h1 className="centered__text">{this.state.title}</h1>
                            <div className="container__main">
                                <article className="article">
                                    {imageResults}
                                    {projectLinks}
                                    { skillResults }
                                    <div className="container__text" dangerouslySetInnerHTML={{ __html: this.state.contents }} />
                                </article>
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

export default Article;