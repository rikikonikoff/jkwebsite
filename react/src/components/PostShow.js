import React from 'react';
import PhotoShow from './PhotoShow';

const PostShow = (props) => {
  let handleClick = (id) => {
    props.handleClick(props.id);
  };

  let photos = props.photos.map(photo => {
    return(
      <PhotoShow
        key={photo.id}
        caption={photo.caption}
        path={photo.image.url}
        thumb={photo.image.thumb.url}
      />
    );
  });

  let details;
  if (props.selected === props.id) {
    details = <div className="postDetails">
      {props.body}
      <br/>
      {photos}
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
