import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';

export default class About extends Component {
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
            databasePoints: 0
        }
    }

    componentDidMount() {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Ezellf&api_key=${apiKey}&limit=10&format=json`)
            .then(response => {
                // console.log(response.data.recenttracks.track);
                this.setState({
                    songs: response.data.recenttracks.track,
                })
                let songCapture = this.state.songs.map(song =>
                    <li key={_.uniqueId()}>{song.name} by {song.artist['#text']}</li>);
                this.setState({
                    recentSongs: songCapture
                })
                // console.log(songCapture);
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
                    treeHouseIsloading: false
                })
            })
    }

    render() {
        return(
            <div className="container">
                <header className="header">
                    <NavStart />
                </header>
                <main className="main">
                    <div className="about__music">
                        <h4>What I'm Currently Listening To</h4>
                    </div>
                </main>
                <footer className="footer">
                    <NavEnd />
                </footer>
            </div>
        );
    }
}