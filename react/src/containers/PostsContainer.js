import React from 'react';
import PostsIndex from '../components/PostsIndex';


const PostsContainer = props => {
  return(
    <div>
      {props.session &&
        <div>
          <h2>Blog Posts</h2>
          {props.session && props.session.admin &&
            <a href="/posts/new">New Post</a>
          }
          <br/>
          <PostsIndex />
        </div>
      }
    </div>
  );
};

export default PostsContainer;
