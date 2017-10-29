import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Form, Button,  Container } from 'semantic-ui-react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import Dropzone from 'react-dropzone';


const margin = {
    margin: "3em 0 0 0"
};

const centerAlign = {
    display: "block",
    margin: "auto"
};

const d = new Date();

export default class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            post: '',
            date: `${d.getMonth()} ${d.getDate()} ${d.getFullYear()}`,
            tags: [],
            imgUrl: "",
            files: [],
            postId: `${Date.now()}`
         } // You can also pass a Quill Delta here
        this.titleChange = this.titleChange.bind(this);
        this.postChange = this.postChange.bind(this);
        this.tagChange = this.tagChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    onDrop(files) {
        this.setState({
            files: files
        });
        const data = new FormData();
        files.forEach(file => {
            data.append('photo', file);
        });
        axios.post('/api/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            this.setState({
                imgUrl: response.data
            })
            return false;
        });
        
    }

    handleUploadFile = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('photo', event.target.files[0]);
        // '/files' is your node.js route that triggers our middleware
        axios.post('/api/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }}).then((response) => {
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
        axios.post('/api/submit', {
            title: this.state.title,
            post: this.state.post,
            date: this.state.date,
            tags: this.state.tags,
            imgUrl: this.state.imgUrl,
            photo: this.state.photo,
            postId: this.state.postId
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div style={margin}>
                <Header/>
                <Form onSubmit={this.handleSubmit} name='photo' encType="multipart/form-data">
                    <Container>
                        <h4>New Post</h4>
                        <Form.Field label='Title' control='input' 
                            value={this.state.title}
                            onChange={evt => this.titleChange(evt)}
                        />
                        <ReactQuill value={this.state.post}
                            onChange={this.postChange} />

                        <div className="dropzone" style={centerAlign}>
                            <Dropzone onDrop={this.onDrop.bind(this)}>
                                <p>Try dropping some files here, or click to select files to upload.</p>
                            </Dropzone>
                        </div>
                        <aside>
                            <h2>Dropped files</h2>
                            <ul>
                                {
                                    this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                }
                            </ul>
                        </aside>

                        {/* <input type="file" onChange={this.handleUploadFile} /> */}

                        <h5>Tags</h5>
                        <Form.Field control='input' 
                            value={this.state.tags}
                            onChange={evt => this.tagChange(evt)}
                        />
                        
                        <Button type='submit' style={margin}>Submit Post</Button>
                    </Container>
                </Form>

                {/* <form action="http://localhost:3001/api/upload" method="POST" 
                    encType="multipart/form-data" id="uploadForm">
                    <Form.Field >
                        <label>Upload Image</label>
                        <input type="file"
                            name="photo"/>
                        <Button type='submit' style={margin}>Upload Image</Button>
                    </Form.Field>
                </form> */}
                <Footer/>
            </div>
            
        )
    }
}