import React, { Component } from 'react';

class NewWheresJacob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    let jsonData = JSON.stringify({location: this.state.location});
    fetch('/api/v1/wheres_jacobs', {
      method: "POST",
      body: jsonData,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'same-origin'})
    .then((response) => {
      if(response.ok) {
        return response.text();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  render(){
    return(
      <div>
      <h4>Jacob, where are you?</h4>
      <form>
        <label>I am in...</label>
        <input onChange={this.handleChange} value={this.state.location} />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default NewWheresJacob;
