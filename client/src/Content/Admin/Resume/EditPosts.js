import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from "react-router-dom";
import { AUTH_CONFIG } from '../../Helpers/Auth/auth0-variables';

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

        axios.post(`/api/${ AUTH_CONFIG.clientId }/deletepost`, {
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
        const postList = this.state.posts.map(post =>
            <tr key={post.postId}>
                <td>
                    <Link key={post.postId} to={`/post/${post.postId}`}>{post.title}</Link>
                </td>
                <td className="table__options">
                    <button type="button" className="btn--primary" onClick={() => this.handleDelete(post.postId)}>Delete</button>
                    <button type="button" className="btn--primary" onClick={() => this.updatePost(post.postId)}>Edit</button>
                </td>
            </tr>);
        return (
            <div className="container__main">
                <table className="table">
                    <thead>
                        <tr className="">
                            <th className="title--light">
                                Title
                            </th>
                            <th className="title--light">
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {postList}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default withRouter(ControlPanel);