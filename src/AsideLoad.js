import React, { Component } from 'react';
import apiKey from './config.js';
import axios from 'axios';
import Aside from './Aside.js';

export default class AsideLoad extends Component {
    constructor() {
        super();
        this.state = {
            songs: [],
            badges: 0,
            totalPoints: 0,
            htmlPoints: 0,
            jsPoints: 0,
            cssPoints: 0,
            databasePoints: 0,
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Ezellf&api_key=${apiKey}&limit=10&format=json`)
        .then(response => {
            // console.log(response.data.recenttracks.track);
            this.setState({
                songs: response.data.recenttracks.track,
                isloading: false
            })
        })

        axios.get(`https://teamtreehouse.com/ezellfrazier.json`)
            .then(response => {
                this.setState({
                    badges: response.data.badges.length,
                    totalPoints: response.data.points.total,
                    htmlPoints: response.data.points.HTML,
                    jsPoints: response.data.points.JavaScript,
                    cssPoints: response.data.points.CSS,
                    databasePoints: response.data.points.Databases,
                    isloading: false
                })
            })
    }

    render(){
        return (
            <Aside 
                songs={this.state.songs}
                badges={this.state.badges}
                totalPoints={this.state.totalPoints}
                htmlPoints={this.state.htmlPoints}
                jsPoints={this.state.jsPoints}
                cssPoints={this.state.cssPoints}
                databasePoints={this.state.databasePoints}
             />
        );
    }
    
}