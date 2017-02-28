import React, { Component } from 'react';
import UserShow from './UserShow';

class UsersIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    };
    this.fetchUsers = this.fetchUsers.bind(this);
    this.approve = this.approve.bind(this);
    this.handleApprove = this.handleApprove.bind(this);
  }

  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('/api/v1/users', {
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
      this.setState({ users: data });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  approve(id, jsonData){
    fetch(`/api/v1/users/${id}`, {
      method: "PATCH",
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

  handleApprove(id, data){
    this.approve(id, data);
    this.fetchUsers();
  }

  render(){
    let users = this.state.users.map(user => {
      return(
        <UserShow
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        approved={user.approved}
        handleApprove={this.handleApprove}
        />
      );
    });

    return(
      <div>
        {users}
      </div>
    );
  }
}

export default UsersIndex;
