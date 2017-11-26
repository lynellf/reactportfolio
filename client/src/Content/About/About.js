import React, { Component } from 'react';
import axios from 'axios';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import apiKey from '../Helpers/config.js';
import Loading from '../../Style/images/Rolling.svg';
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
            databasePoints: 0,
            badgeClass: 'hidden',
            musicClass: 'hidden',
            songsLoading: true,
            badgesLoading: true
        }
        this.toggleBadges = this.toggleBadges.bind(this);
        this.toggleMusic = this.toggleMusic.bind(this);
    }

    toggleBadges() {
        if (this.state.badgeClass === 'container__flex-row') {
            this.setState({
                badgeClass: 'hidden'
            })
        } else {
            this.setState({
                badgeClass: 'container__flex-row'
            })
        }
    }

    toggleMusic() {
        if (this.state.musicClass === 'container__flex-row') {
            this.setState({
                musicClass: 'hidden'
            })
        } else {
            this.setState({
                musicClass: 'container__flex-row'
            })
        }
    }

    componentDidMount() {
        axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Ezellf&api_key=${apiKey}&limit=9&format=json`)
            .then(response => {
                // console.log(response.data.recenttracks.track);
                this.setState({
                    songs: response.data.recenttracks.track
                })
                let songCapture = this.state.songs.map(song =>
                    <li key={_.uniqueId()}>{song.name} by {song.artist['#text']}</li>);
                this.setState({
                    recentSongs: songCapture,
                    songsLoading: false
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
                    badgesLoading: false
                })
            })
    }

    render() {
        const badgeList = this.state.badgesDetail;
        const allBadges = badgeList.map(badge =>
            <div className="card__badge" key={ badge.id }>
                <div className="card__image">
                    <img src={ badge.icon_url } alt={ badge.name } className="card__icon"/>
                </div>
                <div className="card__details">
                <span className="card__name">{ badge.name }</span>
                </div>
            </div>
        );

        const songDetails = this.state.songs;
        const recentlyPlayed = songDetails.map(song =>
            <div className="card__music" key={ _.uniqueId() }>
                <div className="card__image">
                    <img src={song.image[2]['#text'] || "https://lastfm-img2.akamaized.net/i/u/174s/4128a6eb29f94943c9d206c08e625904" } alt={ song.album }/>
                </div>
                <div className="card__details">
                    <span className="card__name">{ song.name }</span>
                    <span className="card__details">{ song.artist['#text'] } - { song.album['#text'] } </span>
                </div>
            </div>
        )

        if(this.state.badgesLoading === true && this.state.songsLoading === true) {
            return(
                <div className="container__flex-column--white">
                    <img src={Loading} alt="Loading" className="centered"/>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <header className="header">
                        <NavStart />
                    </header>
                    <main className="main">
                        <div className="container__flex-column--white">
                            <h1 className="centered__text">Learn More</h1>
                            <div className="container__main">

                                <div className="card__main">
                                    <h4 className="card__title">My Progress at Team Treehouse</h4>
                                    <button className="btn--primary" onClick={event => this.toggleBadges(event)}>Toggle Badges</button>
                                </div>

                                <div className={this.state.badgeClass}>
                                    {allBadges}
                                </div>
                            </div>
                            <div className="container__main">
                                <div className="card__main">
                                    <h4 className="card__title">What I'm Currently Listening To</h4>
                                    <button className="btn--primary" onClick={event => this.toggleMusic(event)}>Toggle Music</button>
                                </div>
                                <div className={this.state.musicClass}>
                                    {recentlyPlayed}
                                </div>
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
}