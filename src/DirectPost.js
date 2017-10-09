import React, {Component} from 'react';
import axios from 'axios';
import PostLiteral from './PostLiteral.js';
import Rolling from './images/Rolling.svg';

class DirectPost extends Component {

  constructor(props) {
    super();
    this.state = {
      images: [],
      title: '',
      contents: '',
      isLoading: true,
    }
  }

  componentDidMount() {
    axios.get(`https://ezellf.com/blog/?json=get_post&post_id=${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          contents: response.data.post.content,
          title: response.data.post.title,
          images: response.data.post.attachments,
          isLoading: false
        })
      })
  }
  
  render(){
    if (this.state.isLoading === true) {
      return (
        <img src={Rolling} alt="" className="loading solo" />
      );
    } else if (this.state.isLoading === false) {
        return (
          <PostLiteral title={this.state.title} post={this.state.contents} images={this.state.images} />
        );
    }
  }
}


export default DirectPost;
