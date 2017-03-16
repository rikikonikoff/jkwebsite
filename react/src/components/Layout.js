import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';
import co from 'co';

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: null
    };
    this.fetchSession = this.fetchSession.bind(this);
    this.fetchGet = this.fetchGet.bind(this);
    this.fetchPost = this.fetchPost.bind(this);
  }

  componentDidMount(){
    this.fetchSession();
  }

  fetchSession(){
    let sessionData = this.fetchGet('/api/v1/home');
    this.setState({ session: sessionData });
  }

  fetchGet(url){
    co(function *(){
      let data = yield fetch(url, {
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
      .catch(error => console.error(`Error in fetch: ${error.message}`));
      return data;
    });
  }

  fetchPost(url, data){
    fetch(url, {
      method: "PATCH",
      body: data,
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

  render(){
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
