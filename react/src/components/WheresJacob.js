import React, { Component } from 'react';
import NewWheresJacob from './NewWheresJacob';

class WheresJacob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wheresJacob: null,
      session: null
    };
    this.fetchJacob = this.fetchJacob.bind(this);
    this.fetchSession = this.fetchSession.bind(this);
  }

  fetchJacob() {
    fetch('/api/v1/wheres_jacobs')
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((responseData) => {
      this.setState({ wheresJacob: responseData.location });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.fetchJacob();
    this.fetchSession();
    setInterval(this.fetchJacob, 5000);
  }

  fetchSession(){
    fetch('/api/v1/home')
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((responseData) => {
      this.setState({ session: responseData });
      debugger;
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

render(){
    return(
      <div>
      <p>Jacob is in...{this.state.wheresJacob}</p>
      <a href="/wheres_jacobs/new"> (Jacob, where are you?)</a>
      </div>
    );
  }
}

export default WheresJacob;
