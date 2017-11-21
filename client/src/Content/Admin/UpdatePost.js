import React, { Component } from 'react';
import NavStart from '../Nav/NavStart';
import ReactQuill from 'react-quill';
import axios from 'axios';
import { withRouter, Link } from "react-router-dom";
import { AUTH_CONFIG } from '../Helpers/Auth/auth0-variables';

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
            postId: '',
            preview: ''
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
                    tags: response.data.post.tags,
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
        axios.post(`/api/${ AUTH_CONFIG.clientId }/upload`, data, {
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
        let closing = value.indexOf("</p>") + 4;
        let preview = value.substr(0,closing);
        console.log(preview);
        this.setState({
            post: value,
            preview: preview
        })
    }

    tagChange(evt) {
        let arr = evt.target.value.split(",");
        this.setState({
            tags: arr
        })
    }

    handleSubmit(event) {
        axios.post(`/api/${ AUTH_CONFIG.clientId }/update/${this.state.postId}`, {
            title: this.state.title,
            post: this.state.post,
            lastUpdated: this.state.date,
            tags: this.state.tags,
            imgUrl: this.state.imgUrl,
            photo: this.state.photo,
            preview: this.state.preview
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
            <div className="container--site">
                <header className="header">
                    <nav>
                        <NavStart />
                    </nav>
                </header>
                <main className="main">
                {/* {isAuthenticated() && (
                <form onSubmit={this.handleSubmit} name='photo' encType="multipart/form-data" className="post-form">
                        <div className="form">
                            <h4 className="title--medium">
                                New Post
                            </h4>
                            <input 
                                type="text" 
                                label='Title' 
                                className="form__input" 
                                placeholder="Title" 
                                value={this.state.title} 
                                onChange={evt => this.titleChange(evt)}
                            />
                            <ReactQuill 
                                value={this.state.post} 
                                onChange={this.postChange} 
                                modules={this.moudles}
                            />
                            <span className="form__btn btn--primary">
                                Upload Image
                                <input 
                                    type="file" 
                                    onChange={this.handleUploadFile.bind(this)} 
                                    name="photo" 
                                    className="form__input"
                                />
                            </span>

                            <input 
                                type="text" 
                                className="form__input" 
                                placeholder="Tags"
                                value={this.state.tags} 
                                onChange={evt => this.tagChange(evt)}
                            />

                            <button 
                                type='submit' 
                                className="form__btn btn--primary">
                                Submit Post
                            </button>
                        </div>
                    </form>)}

                {!isAuthenticated() && (<h4 className="title--medium">
                        You are not logged in! Please{' '}
                        <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                            Log In
                            </a>
                        {' '}to continue.
                            </h4>)} */}
                    <form onSubmit={this.handleSubmit} name='photo' encType="multipart/form-data" className="post-form">
                        <div className="form">
                            <h4 className="title--medium">
                                New Post
                            </h4>
                            <input 
                                type="text" 
                                label='Title' 
                                className="form__input" 
                                placeholder="Title" 
                                value={this.state.title} 
                                onChange={evt => this.titleChange(evt)}
                            />
                            <ReactQuill 
                                value={this.state.post} 
                                onChange={this.postChange} 
                                modules={this.moudles}
                            />
                            <span className="form__btn btn--primary">
                                Upload Image
                                <input 
                                    type="file" 
                                    onChange={this.handleUploadFile.bind(this)} 
                                    name="photo" 
                                    className="form__input"
                                />
                            </span>

                            <input 
                                type="text" 
                                className="form__input" 
                                placeholder="Tags"
                                value={this.state.tags} 
                                onChange={evt => this.tagChange(evt)}
                            />

                            <button 
                                type='submit' 
                                className="form__btn btn--primary">
                                Submit Post
                            </button>
                        </div>
                    </form>
                </main>
                <footer className="footer">
                <div className="nav--end grid__row">
                <span className="legal grid__col--6">
                  Copyright (c) 2017 Ezell Frazier All Rights Reserved.
                </span>
                <div className="about grid__col--3">
                  <span className="about__title">About</span>
                  <ul className="about__list">
                      <li className="about__item">
                          <Link to="/">Home</Link>
                      </li>
                      <li className="about__item">
                          <Link to ="/resume">Resume</Link>
                      </li>
                      <li className="about__item">
                          <Link to="/portfolio">Portfolio</Link>
                      </li>
                      <li className="about__item">
                          <Link to="/blog">Blog</Link>
                      </li>
                      <li className="about__item">
                          <Link to="/about">More</Link>
                      </li>
                    </ul>
                </div>
                <div className="external grid__col--3">
                  <span className="external__title">External</span>
                  <ul className="external__list">
                  <li className="external__item">
                      <a href="#" className="social--github fui-github"></a>
                    </li>
                  <li className="external__item">
                      <a href="#" className="social--linkedin fui-linkedin"></a>
                    </li>
                  <li className="external__item">
                      <a href="#" className="social--facebook fui-facebook"></a>
                    </li>
                    <li className="external__item">
                      <a href="#" className="social--twitter fui-twitter"></a>
                    </li>
                  </ul>
          
                </div>
              </div>
                </footer>
            </div>

        )
    }
}

export default withRouter(UpdatePost);