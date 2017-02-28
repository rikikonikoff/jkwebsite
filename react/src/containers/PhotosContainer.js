import React, { Component } from 'react';

class PhotosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div>
      {this.props.session &&
        <div>
        <h2>Photos</h2>
        photos will go here
        </div>}
      </div>
    );
  }
}

export default PhotosContainer;
