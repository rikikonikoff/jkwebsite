import React from 'react';
import { Link, BrowserHistory } from 'react-router';
import BackButton from './BackButton';

const PostShow = (props) => {
  let handleClick = (id) => {
    props.handleClick(props.id);
  };
  let details;
  if (props.selectedPostId === props.id) {
    details = <div className="postDetails">
      {props.body}
      <br/>
      {props.photos}
    </div>;
  }

  return(
    <div className="panel panel-default">
      <div onClick={handleClick} className="post" title="Click to Expand">
        <strong>{props.title}</strong><br/><br/>
        {details}
      </div>
    </div>
  );
};

export default PostShow;
