import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Table, Button, Menu } from 'semantic-ui-react';
import axios from 'axios';
import ControlPanelList from './ControlPanelList';
import Rolling from './images/Rolling.svg';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const margin = {
    margin: "3em 1em 0 0"
},

buttons = {
    margin: "0 1em"
};

const centeredStyle = {
    margin: "auto"
}

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
        const position = this.state.posts.findIndex(i => i.postId == id);
        const posts = this.state.posts;
        const updated = posts.splice(position, 1);

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
            <Table.Row key={post.postId}>
                <Table.Cell>
                    <Link key={post.postId} to={`/post/${post.postId}`}>{post.title}</Link>
                </Table.Cell>
                <Table.Cell>
                    <Button type="button" style={buttons} onClick={() => this.handleDelete(post.postId)}>Delete</Button>
                    <Button style={buttons} onClick={() => this.updatePost(post.postId)}>Edit</Button>
                </Table.Cell>
            </Table.Row>);
        return (
            <div className="control-panel">
                <Header />
                {
                    isAuthenticated() && (
                        
                            <Table celled style={ margin }>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Title</Table.HeaderCell>
                                        <Table.HeaderCell>Options</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {postList}
                                </Table.Body>
                            </Table>
                        
                    )
                }
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
        );
    }

}

export default withRouter(ControlPanel);