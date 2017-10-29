import React, { Component } from 'react';
import apiKey from './config.js';
import axios from 'axios';
import Rolling from './images/Rolling.svg';
import _ from 'lodash';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Aside1 from './Aside1.js';
import Aside2 from './Aside2.js';
import { Grid } from 'semantic-ui-react';

//Grab posts from Wordpress JSON API


export default class MainSite extends Component {
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
        <div>
          <Header />
          <Grid centered={true} divided={true} stackable={true} verticalAlign="middle" stretched={true}>
            <Grid.Row>
              <Grid.Column width={2}>
                {<Aside2 posts={this.state.posts} />}
              </Grid.Column>
              <Grid.Column width={10}>
                <Main posts={this.state.posts} />
              </Grid.Column>
              <Grid.Column width={2}>
                <Aside1
                  recentSongs={this.state.recentSongs}
                  badges={this.state.badges}
                  totalPoints={this.state.totalPoints}
                  jsPoints={this.state.jsPoints}
                  htmlPoints={this.state.htmlPoints}
                  databasePoints={this.state.databasePoints}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Footer fixed="bottom" />
        </div>
      );
    }
  }
  
}
