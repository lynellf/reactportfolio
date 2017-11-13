import React, { Component } from 'react';
import apiKey from '../Helpers/config.js';
import axios from 'axios';
import Rolling from '../../Style/images/Rolling.svg';
import _ from 'lodash';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import Welcome from './Welcome.js';
import AsideRight from './AsideRight';
import AsideLeft from './AsideLeft';

//Grab posts from Wordpress JSON API
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      songs: [],
      recentSongs: [],
      badges: 0,
      totalPoints: 0,
      htmlPoints: 0,
      jsPoints: 0,
      cssPoints: 0,
      databasePoints: 0,
      postsAreLoading: true,
      songsAreloading: true,
      treehouseIsLoading: true
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

    axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Ezellf&api_key=${apiKey}&limit=10&format=json`)
      .then(response => {
        // console.log(response.data.recenttracks.track);
        this.setState({
          songs: response.data.recenttracks.track,
          songsAreloading: false
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

  render(){
    if (
      this.state.treehouseIsLoading === true 
      && this.state.songsAreloading === true 
      && this.state.postsAreLoading === true
    ) {
      return(
        <img src={Rolling} alt="" className="loading" />
      );
    } else {
      return (
        <div className="container--home">
          <header className="header">
            <nav>
              <NavStart />
            </nav>
          </header>
                <AsideLeft posts={this.state.posts} />
                <main className="main">
                  <Welcome />
                </main>
                <AsideRight
                  recentSongs={this.state.recentSongs}
                  badges={this.state.badges}
                  totalPoints={this.state.totalPoints}
                  jsPoints={this.state.jsPoints}
                  htmlPoints={this.state.htmlPoints}
                  databasePoints={this.state.databasePoints}
                />
          <footer className="footer">
            <NavEnd />
          </footer>
        </div>
      );
    }
  }
  
}
