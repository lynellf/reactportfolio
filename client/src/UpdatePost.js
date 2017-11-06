import React, { Component } from 'react';
import Header from './Header';
import { Form, Button, Container, Menu } from 'semantic-ui-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { withRouter } from "react-router-dom";


const margin = {
    margin: "3em 1em 0 0"
};

const centerAlign = {
    display: "block",
    margin: "auto"
};

const centeredStyle = {
    margin: "auto"
}

const d = new Date();

class UpdatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            post: '',
            lastUpdated: `${d.getMonth()} ${d.getDate()} ${d.getFullYear()}`,
            tags: [],
            imgUrl: "",
            files: [],
            postId: ''
        } // You can also pass a Quill Delta here
        this.titleChange = this.titleChange.bind(this);
        this.postChange = this.postChange.bind(this);
        this.tagChange = this.tagChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
        axios.get(`/api/post/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    post: response.data.post.post,
                    title: response.data.post.title,
                    imgUrl: response.data.post.imgUrl,
                    postId: response.data.post.postId,
                    isLoading: false
                })
            })
    }

    handleUploadFile = (event) => {
        this.setState({
            files: event.target.files
        })
        const data = new FormData();
        console.log(event.target.files[0]);
        data.append('photo', event.target.files[0]);
        // '/files' is your node.js route that triggers our middleware
        axios.post('/api/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            this.setState({
                imgUrl: response.data
            })
            return (response);
        });

        event.preventDefault();
    }

    titleChange(evt) {
        this.setState({
            title: evt.target.value
        })
    }

    postChange(value) {
        this.setState({
            post: value,
        })
    }

    tagChange(evt) {
        let arr = evt.target.value.split(",");
        this.setState({
            tags: arr
        })
    }

    handleSubmit(event) {
        axios.post(`/api/update/${this.state.postId}`, {
            title: this.state.title,
            post: this.state.post,
            lastUpdated: this.state.date,
            tags: this.state.tags,
            imgUrl: this.state.imgUrl,
            photo: this.state.photo
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();

        // Redirect to target page
        this.props.history.push('/controlpanel');
    }

    handleDelete(){
        axios.post(`/api/rp`, {
            postId: this.state.postId
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        // Redirect to target page
        this.props.history.push('/controlpanel');
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div style={margin}>
                <Header />
                {isAuthenticated() && (
                    <Form onSubmit={this.handleSubmit} name='photo' encType="multipart/form-data">
                        <Container>
                            <h4>New Post</h4>
                            <Form.Field label='Title' control='input'
                                value={this.state.title}
                                onChange={evt => this.titleChange(evt)}
                            />
                            <ReactQuill value={this.state.post}
                                onChange={this.postChange} />

                            <input type="file" onChange={this.handleUploadFile.bind(this)} name="photo" style={margin} />


                            <h5>Tags</h5>
                            <Form.Field control='input'
                                value={this.state.tags}
                                onChange={evt => this.tagChange(evt)}
                            />

                            <Button type='submit' style={margin}>Update Post</Button>
                            <Button type='button' style={margin} onClick={this.handleDelete}>Delete Post</Button>
                        </Container>
                    </Form>
                )}
                {!isAuthenticated() && (
                    <h4 style={margin}>
                        You are not logged in! Please{' '}
                        <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                            Log In
                            </a>
                        {' '}to continue.
                            </h4>
                )}
                
                <Menu inverted color="blue" fixed="bottom">
                    <Menu.Item header href="/">
                        Ezell Frazier
                     </Menu.Item>
                    <Menu.Item style={centeredStyle}>
                        Copyright (c) 2017 Ezell Frazier All Rights Reserved.
                    </Menu.Item>

                    {!isAuthenticated() && (
                        <Menu.Item onClick={this.login.bind(this)}>
                            Log In
                    </Menu.Item>
                    )}
                    {isAuthenticated() && (
                        <Menu.Item onClick={this.logout.bind(this)}>
                            Log Out
                    </Menu.Item>
                    )}
                </Menu>
            </div>

        )
    }
}

export default withRouter(UpdatePost);