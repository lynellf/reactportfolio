import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import apiKey from '../Helpers/config.js';
import _ from 'lodash';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            songs: [],
            recentSongs: [],
            badgesDetail: [],
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
                    songs: response.data.recenttracks.track
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
                    badgesDetail: response.data.badges,
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
        const badgeList = this.state.badgesDetail;
        const allBadges = badgeList.map(badge =>
            <div className="badge" key={ badge.id }>
                <div className="badge__image">
                    <img src={ badge.icon_url } alt={ badge.name } className="badge__icon"/>
                </div>
                <div className="badge__details">
                <span className="badge__name">{ badge.name }</span>
                </div>
            </div>
        );

        const songDetails = this.state.songs;
        const recentlyPlayed = songDetails.map(song =>
            <div className="song" key={ _.uniqueId() }>
                <div className="song__image">
                    <img src={song.image[2]['#text'] || "https://lastfm-img2.akamaized.net/i/u/174s/4128a6eb29f94943c9d206c08e625904" } alt={ song.album }/>
                </div>
                <div className="song__details">
                    <span className="song__name">{ song.name }</span>
                    <span className="song__artist">{ song.artist['#text'] } - { song.album['#text'] } </span>
                </div>
            </div>
        )
        return(
            <div className="container">
                <header className="header">
                    <NavStart />
                </header>
                <main className="main">
                    <div className="about__progress">
                        <h4 className="title--medium">My Progress as a Software Developer at Team Treehouse</h4>
                        <div className="about__badges">
                            {allBadges}
                        </div>
                    </div>
                    <div className="about__music">
                        <h4 className="title--medium">What I'm Currently Listening To</h4>
                        <div className="about__artists">
                            { recentlyPlayed }
                        </div>
                    </div>
                </main>
                <footer className="footer">
                    <NavEnd />
                </footer>
            </div>
        );
    }
}