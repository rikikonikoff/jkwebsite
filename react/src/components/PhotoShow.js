import React from 'react';

const PhotoShow = (props) => {
  return(
    <div>
      <img src={props.path}/>
    </div>
  );
};

export default PhotoShow;
