import React, { Component } from 'react';
import apiKey from './config.js';
import axios from 'axios';
import _ from 'lodash';

export default class Aside1 extends Component {
    constructor() {
        super();
        this.state = {
            songs: [],
            recentSongs: [],
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
            let songCapture = this.state.songs.map(song =>
                <li key={_.uniqueId()}>{song.name} by {song.artist['#text']}</li>);
            this.setState({
                recentSongs: songCapture
            })
            console.log(songCapture);
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
            <aside className="app-container__aside right">
                <strong className="app-container__aside__title">Team Treehouse Scorecard</strong>
                <ul className="app-container__aside__treehouse">
                    <li>Total Badges: {this.state.badges}</li>
                    <li>Total Points: {this.state.totalPoints}</li>
                    <li>JavaScript: {this.state.jsPoints}</li>
                    <li>CSS: {this.state.cssPoints}</li>
                    <li>HTML: {this.state.htmlPoints}</li>
                    <li>Databases: {this.state.databasePoints}</li>
                </ul>
                <strong className="app-container__aside__title">Most Recent Songs</strong>
                <ul className="app-container__aside__lastfm">
                    {this.state.recentSongs}
                </ul>
            </aside>
        );
    }
    
}