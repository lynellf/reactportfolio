import React, { Component } from 'react';
import NavStart from './NavStart';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }
    
    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    componentDidMount() {
        axios.get('/api/posts')
            .then(response => {
                // console.log(response.data.posts);
                this.setState({
                    posts: response.data.posts,
                    isLoading: false
                })
            })
    }

    handleDelete(id) {
        const posts = this.state.posts;

        axios.post(`/api/rp`, {
            postId: id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({
            posts: posts
        })

    }

    updatePost(id) {
        // window.location.replace(`/update/${id}`);
        this.props.history.push(`/update/${id}`);
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const postList = this.state.posts.map(post =>
            <tr key={post.postId}>
                <td>
                    <Link key={post.postId} to={`/post/${post.postId}`}>{post.title}</Link>
                </td>
                <td className="post-list__options">
                    <button type="button" className="btn--primary" onClick={() => this.handleDelete(post.postId)}>Delete</button>
                    <button type="button" className="btn--primary" onClick={() => this.updatePost(post.postId)}>Edit</button>
                </td>
            </tr>);
        return (
            <div className="container">
                <header className="header">
                    <nav>
                        <NavStart />
                    </nav>
                </header>
                <main className="main grid__row">
                    {
                    isAuthenticated() && (
                                    </tr>
                                </thead>
                                <tbody>
                                    {postList}
                                </tbody>
                            </table>
                        </div>
                        )}
                    {!isAuthenticated() && (
                        <div className="auth-check">
                    <h4 className="title--medium">
                        You are not logged in! Please{' '}
                        <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                            Log In
                            </a>
                        {' '}to continue.
                            </h4>
                        </div>
                    )}
                </main>
                <footer className="footer">
                    <div className="nav--end grid__row">
                        <span className="legal grid__col--10">
                                Copyright (c) 2017 Ezell Frazier All Rights Reserved.
                            </span>
                        <ul className="nav__list grid__col--2">
                            {!isAuthenticated() && (
                                <li 
                                    className="nav__item"
                                    onClick={this.login.bind(this)}
                                >
                                    Log In
                            </li>
                            )}
                            {isAuthenticated() && (
                                <li
                                    className="nav__item"
                                    onClick={this.logout.bind(this)}
                                >
                                    Log Out
                            </li>
                            )}
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }

}

export default withRouter(ControlPanel);