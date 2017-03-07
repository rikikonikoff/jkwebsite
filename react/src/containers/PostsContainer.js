import React from 'react';
import PostsIndex from '../components/PostsIndex';

const PostsContainer = props => {
  return(
    <div>
      {props.session &&
        <div>
          <h2>Blog Posts</h2>
          <br/>
          <PostsIndex />
        </div>
      }
      {props.children}
    </div>
  );
};

export default PostsContainer;
