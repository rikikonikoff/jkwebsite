import React, { Component } from 'react';
import PostsIndex from '../components/posts/PostsIndex';
import PostShow from '../components/posts/PostShow';
import { Link } from 'react-router';

class PostsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPostId: null
    };
  }

  render(){
    let posts;
    let post;
    return(
      <div>
      {this.state.selectedPostId === null &&
      {posts}}
      {this.state.selectedPostId !== null &&
      {post}}
      {this.props.session && this.props.session.admin &&
      <Link to="/posts/new">New Post</Link>}
      </div>
    );
  }
}

export default PostsContainer;
