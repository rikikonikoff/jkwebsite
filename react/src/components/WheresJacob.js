import React, { Component } from 'react';
import NewWheresJacob from './NewWheresJacob';

class WheresJacob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wheresJacob: ''
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
      {this.props.session &&
        <h2>Jacob is in {this.state.wheresJacob}</h2>
      }
      {this.props.session && this.props.session.admin &&
        <div>
          <br/>
          <NewWheresJacob />
        </div>
      }
      </div>
    );
  }
}

export default WheresJacob;
