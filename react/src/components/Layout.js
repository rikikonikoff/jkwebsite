import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: null
    };
    this.fetchSession = this.fetchSession.bind(this);
  }

  componentDidMount(){
    this.fetchSession();
  }

  fetchSession(){
    fetch('/api/v1/home', {
      credentials: 'same-origin'
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((data) => {
      this.setState({ session: data });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let children = React.cloneElement(this.props.children, {session: this.state.session});

    return(
      <div>
        {children}
      </div>
    );
  }
}

export default Layout;
