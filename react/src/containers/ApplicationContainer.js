import React, { Component } from 'react';
import { Link } from 'react-router';

class ApplicationContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
      { this.props.children }
      </div>
    );
  }
}

export default ApplicationContainer;
