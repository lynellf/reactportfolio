import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Posts from './Posts.js';



//Create a list of posts from the data passed as props

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get('https://ezellf.com/blog/?json=get_tag_posts&tag_slug=Project')
    .then(response => {
      console.log(response);
      this.setState({
        posts: response.posts
      })
    })
  }



  render() {
    return(
    <main className="projects">
      <Posts data={this.state.posts}/>
    </main>
    );
  }
}

export default Main;
