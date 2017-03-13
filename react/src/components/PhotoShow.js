import React from 'react';

const PhotoShow = (props) => {
  return(
    <div>
      <img src={props.url}/>
    </div>
  );
};

export default PhotoShow;
