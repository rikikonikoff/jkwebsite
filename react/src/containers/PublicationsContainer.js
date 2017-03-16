import React, { Component }  from 'react';
import PublicationsIndex from '../components/PublicationsIndex';

class PublicationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: [],
      selectedPublicationId: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/publications')
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
        this.setState({publications: responseData})
      .catch(error => console.error(`Error in fetch: ${error.message}`));
      });
  }

  handleClick(id) {
    if (this.state.selectedPublicationId === id) {
      this.setState({ selectedPublicationId: null });
    } else {
      this.setState({ selectedPublicationId: id });
    }
  }

  render() {
    return(
      <div className="publications">
        <h2> Publications </h2>
        <PublicationsIndex
          publications={this.state.publications}
          handleClick={this.handleClick}
          selectedPublicationId={this.state.selectedPublicationId}
        />
        {this.props.children}
      </div>
    );
  }
}

export default PublicationsContainer;
