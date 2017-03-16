import React, { Component } from 'react';
import AboutJacob from '../components/AboutJacob';

class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      about: "",
      imageUrl: "",
      imageThumb: ""
    };
  }

  componentDidMount(){
    fetch("/homes/1")
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
        this.setState({
          about: data.about,
          imageUrl: data.image.url,
          imageThumb: data.image.thumb.url
        })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    });
  }

  render(){
    return(
      <div>
        <AboutJacob
          about={this.state.about}
          imageUrl={this.state.imageUrl}
          imageThumb={this.state.imageThumb}
        />
        {this.props.session && this.props.session.admin &&
          this.state.about !== "" &&
          <a href="homes/1/edit">Change what people see here</a>}
        {this.props.session && this.props.session.admin &&
          this.state.about === "" &&
          <a href="/homes/new">Change what people see here</a>}
      </div>
    );
  }
}

export default HomeContainer;
