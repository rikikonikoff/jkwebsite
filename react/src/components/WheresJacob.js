import React, { Component } from 'react';

class WheresJacob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wheresJacob: null
    };
    this.fetchJacob = this.fetchJacob.bind(this);
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
    setInterval(this.fetchJacob, 10000);
  }

  render(){
    return(
      <div>
      Jacob is in...{this.state.wheresJacob}
      </div>
    );
  }
}

export default WheresJacob;
