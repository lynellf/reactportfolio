import React, { Component } from 'react';
import apiKey from './config.js';
import axios from 'axios';

export class Aside extends Component {
    constructor() {
        super();
        this.state = {
            songs: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Ezellf&api_key=${apiKey}&format=json`)
        .then(response => {
            this.setState({
                songs: response.data.recenttracks,
                isloading: false
            })
        })

    }

    render(){
        return (
            <aside className="flex-container__aside">

            </aside>
        );
    }
    
}