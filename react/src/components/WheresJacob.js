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
    return(
      <div>
      {this.state.session && this.state.session.admin &&
        <div>
        <h2>Jacob is in {this.state.wheresJacob}</h2>
        <NewWheresJacob />
        </div>
      }
      {this.state.session && this.state.session.user &&
        <div>
        <h2>Jacob is in {this.state.wheresJacob}</h2>
        </div>
      }
      </div>
    );
  }
}

export default WheresJacob;
