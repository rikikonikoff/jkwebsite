import React, { Component } from 'react';

class UserShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      approved: this.props.approved
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let trueFalse = !this.state.approved;
    this.setState({ approved: trueFalse });
    let jsonData = JSON.stringify({ approved: trueFalse });
    this.props.handleApprove(this.props.id, jsonData);
  }

  render(){
    return(
      <div>
      <p>
      {this.props.name} ({this.props.email})
      {this.state.approved == true &&
        <span>
        <span> - Approved</span>
        <button onClick={this.handleClick} className="Approval">Revoke Approval?</button>
        </span>}
        {this.state.approved == false &&
          <button onClick={this.handleClick} className="Approval">Approve Now</button>}
      </p>
      </div>
    );
  }
}

export default UserShow;
