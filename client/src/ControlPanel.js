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
                <td>
                    <button type="button" className="button--default" onClick={() => this.handleDelete(post.postId)}>Delete</button>
                    <button type="button" className="button--default" onClick={() => this.updatePost(post.postId)}>Edit</button>
                </td>
            </tr>);
        return (
            <div className="control-panel">
                <NavStart />
                {
                    isAuthenticated() && (
                        
                            <table className="post-list">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {postList}
                                </tbody>
                            </table>
                        
                    )
                }
                {!isAuthenticated() && (
                    <h4 className="title--medium">
                        You are not logged in! Please{' '}
                        <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                            Log In
                            </a>
                        {' '}to continue.
                            </h4>
                )}
                <div className="nav--end">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/">Ezell Frazier</Link>
                        </li>
                        <li className="nav__item">
                            Copyright (c) 2017 Ezell Frazier All Rights Reserved.
                        </li>

                        {!isAuthenticated() && (
                            <li onClick={this.login.bind(this)}>
                                Log In
                        </li>
                        )}
                        {isAuthenticated() && (
                            <li onClick={this.logout.bind(this)}>
                                Log Out
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }

}

export default withRouter(ControlPanel);