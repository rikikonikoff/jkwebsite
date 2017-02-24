import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class UserSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null,
      email: "",
      password: ""
    };
    this.fetchSession = this.fetchSession.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
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

  componentDidMount(){
    this.fetchSession();
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render(){
    return(
      <div>
        {this.state.session === null &&
          <div>
            <h4>Log In</h4>
            <p>
              If Jacob has not yet approved your account,
              you will not be able to log in.
            </p>
            <form action="/users/sign_in" method="POST">
              <label>Email</label>
              <input onChange={this.handleEmail} value={this.state.email} />
              <br/>
              <label>Password</label>
              <input onChange={this.handlePassword} value={this.state.password} />
              <br/>
              <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
              <input type="submit" value="Submit" />
            </form>
          </div>
        }
        {this.state.session &&
          <div>
            <h4><a href="/users/sign_out" method="DELETE">Log Out</a></h4>
          </div>
        }
      </div>
    );
  }
}

export default UserSignIn;
