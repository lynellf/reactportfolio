import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Form, Button,  Container } from 'semantic-ui-react';
import ReactQuill from 'react-quill'; 
import _ from 'lodash';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const margin = {
    margin: "3em 0 0 0"
}

const d = new Date();

export default class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            post: '',
            date: `${d.getMonth()} ${d.getDate()} ${d.getFullYear()}`,
            postId: `${_.uniqueId()}`,
            tags: []
         } // You can also pass a Quill Delta here
        this.titleChange = this.titleChange.bind(this);
        this.postChange = this.postChange.bind(this);
        this.tagChange = this.tagChange.bind(this);
    }

    titleChange(value) {
        this.setState({
            title: value
        })
    }

    postChange(value) {
        this.setState({ 
            post: value,
         })
    }

    tagChange(value) {
        let arr = value.toString().split(",");
        this.setState({
            tags: arr
        })
    }

    handleSubmit(event) {
        axios.post('http://localhost:3001/submit', {
            title: this.state.title,
            post: this.state.post,
            date: this.state.date,
            postId: this.state.postId,
            tags: this.state.tags
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
                <Form onSubmit={this.handleSubmit}>
                    <Container>
                        <h4>New Post</h4>
                        <Form.Field label='Title' control='input' 
                            value={this.state.title}
                            onChange={this.titleChange}
                        />
                        <ReactQuill value={this.state.post}
                            onChange={this.postChange} />
                        <h5>Tags</h5>
                        <Form.Field control='input' 
                            value={this.state.tags}
                            onChange={this.tagChange}
                        />
                        <Button type='submit' style={margin}>Submit Post</Button>
                    </Container>
                </Form>
                <Footer/>
            </div>
            
        )
    }
}