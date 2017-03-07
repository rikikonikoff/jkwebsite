import React, { Component } from 'react';
import { Link } from 'react-router';
import PostShow from './PostShow';

class PostsIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPostId: null
    };
  }

  render(){
    return(
      <div>
      Post Index goes here.
      </div>
    );
  }
}

export default PostsIndex;
