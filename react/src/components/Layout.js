import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: null,
      width: window.innerWidth
    };
    this.fetchSession = this.fetchSession.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
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

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render(){
    let width = this.state.width;
    let isMobile = (width <= 500);
    let children = React.cloneElement(this.props.children, {session: this.state.session});

    return(
      <div>
        <h1>Jacob M. Konikoff</h1>
        <br/>
        {children}
      </div>
    );
  }
}

export default Layout;
