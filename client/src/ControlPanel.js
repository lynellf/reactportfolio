import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import axios from 'axios';



export default class ControlPanel extends Component {
    constructor(props){
        super(props);
        state: {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('/api/posts')
            .then(response => {
                console.log(response.data.posts);
                this.setState({
                    posts: response.data.posts,
                    postAreLoading: false
                })
            })
        }
        

    render(){
        return(
            <div className="control-panel">
                <Header/>

                <Footer/>
            </div>
        );
    }


}