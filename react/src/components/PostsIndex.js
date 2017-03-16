import React, { Component } from 'react';
import PostShow from './PostShow';

class PostsIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null
    };
    this.fetchPosts = this.fetchPosts.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  fetchPosts(){
    fetch('/api/v1/posts')
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((responseData) => {
      this.setState({ posts: responseData });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handlePostClick(id) {
    if (this.state.selectedPostId === id) {
      this.setState({ selectedPostId: null });
    } else {
      this.setState({ selectedPostId: id });
    }
  }

  componentDidMount(){
    this.fetchPosts();
  }

  render(){
    let posts = this.state.posts.map(post => {
      return(<PostShow
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        photos={post.photos}
        date={post.created_at}
        selected={this.state.selectedPostId}
        handleClick={this.handlePostClick}
      />);
    });
    return(
      <div>
        {posts}
      </div>
    );
  }
}

export default PostsIndex;
