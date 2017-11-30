import React, { Component } from 'react';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import ReactQuill from 'react-quill';
import axios from 'axios';
import { withRouter } from "react-router-dom";
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
        this.projectChange = this.projectChange.bind(this);
        this.gitChange = this.gitChange.bind(this);
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
                    projectUrl: response.data.post.projectUrl,
                    gitHub: response.data.post.gitHub,
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

    projectChange(evt) {
        this.setState({
            projectUrl: evt.target.value
        });
    }
    gitChange(evt) {
        this.setState({
            gitHub: evt.target.value
        });
    }

    handleSubmit(event) {
        axios.post(`/api/${ AUTH_CONFIG.clientId }/update/${this.state.postId}`, {
            title: this.state.title,
            post: this.state.post,
            lastUpdated: this.state.date,
            tags: this.state.tags,
            imgUrl: this.state.imgUrl,
            photo: this.state.photo,
            preview: this.state.preview,
            projectUrl: this.state.projectUrl,
            gitHub: this.state.gitHub
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
        const modules = {
            toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean']
            ]
        };

        const formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ];

        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
                <header className="header">
                    <nav>
                        <NavStart />
                    </nav>
                </header>
                <main className="main">
                {isAuthenticated() && (
                    <div className="container__flex-column--white">
                        <h1 className="centered__text">Edit Post</h1>
                        <div className="container__main">
                            <form onSubmit={this.handleSubmit} name='photo' encType="multipart/form-data" className="container__flex-column">
                                <input
                                    type="text"
                                    label='Title'
                                    className="form__input"
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChange={evt => this.titleChange(evt)}
                                />
                                <ReactQuill
                                    theme={'snow'}
                                    value={this.state.post}
                                    onChange={this.postChange}
                                    modules={modules}
                                    formats={formats}
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

                                <input
                                    type="text"
                                    label='Project URL'
                                    className="form__input"
                                    placeholder="Project URL"
                                    value={this.state.projectUrl}
                                    onChange={evt => this.projectChange(evt)}
                                />

                                <input
                                    type="text"
                                    label='Github Repo'
                                    className="form__input"
                                    placeholder="Github Repo"
                                    value={this.state.gitHub}
                                    onChange={evt => this.gitChange(evt)}
                                />

                                <button
                                    type='submit'
                                    className="form__btn btn--primary">
                                    Submit Post
                                </button>
                            </form>
                        </div>
                        
                    </div>
                )}

                {!isAuthenticated() && (<h4 className="title--medium">
                        You are not logged in! Please{' '}
                        <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                            Log In
                            </a>
                        {' '}to continue.
                            </h4>)}
                </main>
                <footer className="footer">
                    <NavEnd />
                </footer>
            </div>

        )
    }
}

export default withRouter(UpdatePost);