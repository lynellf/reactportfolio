import React, {Component} from 'react';
import axios from 'axios';
import Article from './Article.js';
import Rolling from '../../Style/images/Rolling.svg';

class DirectPost extends Component {

  constructor(props) {
    super();
    this.state = {
      title: '',
      contents: '',
      imgUrl: '',
      isLoading: true,
    }
  }

  componentDidMount() {
    axios.get(`/api/post/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          contents: response.data.post.post,
          title: response.data.post.title,
          imgUrl: response.data.post.imgUrl,
          isLoading: false
        })
      })
  }
  
  render(){
    if (this.state.isLoading === true) {
      return (
        <img src={Rolling} alt="" className="loading" />
      );
    } else if (this.state.isLoading === false) {
        return (
          <Article title={this.state.title} post={this.state.contents} imgUrl={this.state.imgUrl}/>
        );
    }
  }
}


export default DirectPost;
