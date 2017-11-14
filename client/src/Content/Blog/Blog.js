import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import { Link } from "react-router-dom";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('/api/blog')
            .then(response => {
                console.log(response.data.posts);
                this.setState({
                    posts: response.data.posts,
                })
            })
    }

    render() {
        const posts = this.state.posts;
        const results = posts.map(post =>
            <div className="post__item" key={ post.postId }>
                <img src={ post.imgUrl } alt={ post.title } className="post__img"/>
                <Link to={ `post/${ post.postId }` }>{ post.title }</Link>
            </div>
        );

        return (
            <div className="container">
                <header className="header">
                    <NavStart />
                </header>
                <main className="main">
                    <div className="post">
                        { results }
                    </div>
                </main>
                <footer className="footer">
                    <NavEnd />
                </footer>
            </div>
        );
    }

}