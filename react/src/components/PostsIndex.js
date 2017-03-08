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
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(id) {
    if (this.state.selectedPublicationId === id) {
      this.setState({ selectedPublicationId: null });
    } else {
      this.setState({ selectedPublicationId: id });
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
        selectedPostId={this.state.selectedPostId}
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
