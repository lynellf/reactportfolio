import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts.js';
import Rolling from './images/Rolling.svg';
import MainCarousel from './MainCarousel.js';



//Create a list of posts from the data passed as props

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isLoading: true
    }
  }

  componentDidMount() {
    axios.get('https://ezellf.com/blog/?json=get_tag_posts&tag_slug=Project')
    .then(response => {
      this.setState({
        posts: response.data.posts,
        isLoading: false
      })
    })
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <img src={Rolling} alt="" className="loading"/>
      );
    } else if (this.state.isLoading === false) {
        return(
        <main className="deck">
          <div className="deck__carousel">
              <MainCarousel />
          </div>
          <div className="deck__projects">
            <h4>Projects</h4>
            <Posts data={this.state.posts}/>
          </div>
          <div className="deck__bg">
            <h4>Background</h4>
              <p>As a recent college graduate, I want to continue my life of learning and creating value for others. Joining the Treehouse
          Techdegree program feels like the right step after finishing with a bachelor's in management information systems.
          I'm super excited to be a part of this amazing experience.</p>
          </div>
        </main>
        );
    }
  }


}

export default Main;
