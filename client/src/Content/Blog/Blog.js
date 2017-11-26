import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import Loading from "../../Style/images/Rolling.svg";
import { Link } from "react-router-dom";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get('/api/blog')
            .then(response => {
                console.log(response.data.posts);
                this.setState({
                    posts: response.data.posts,
                    isLoading: false
                })
            })
    }

    render() {
        const posts = this.state.posts;
        const results = posts.map(post =>
            <div className="text__border-bottom" key={ post.postId }>
                <h2><Link to={ `post/${ post.postId }` }>{ post.title }</Link></h2>
                <div className="blog__preview" dangerouslySetInnerHTML={{ __html: post.preview }}/>
                <Link to={ `post/${ post.postId }` }>Read More</Link>
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
                            <h1 className="centered__text">Blog</h1>
                            <div className="container__main">
                                <div className="container__text">
                                    {results}
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
}