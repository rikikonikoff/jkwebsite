import React, { Component }  from 'react';
import Publication from '../components/Publication';

class PublicationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: [],
      selectedPublicationId: null
    };
    this.handleMouse = this.handleMouse.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
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

  handleMouse(id) {
    this.setState({ selectedPublicationId: id });
  }

  handleMouseOut(id) {
    if (this.state.selectetdPublicationId === id) {
      this.setState({ selectetdPublicationId: null });
    }
  }

  render() {
    let publications = this.state.publications.map(pub => {
      return(
        <Publication
          key={pub.id}
          id={pub.id}
          authors={pub.authors}
          date={pub.date}
          title={pub.title}
          journal={pub.journal}
          issue={pub.issue}
          pages={pub.pages}
          externalLink={pub.external_link}
          handleMouse={this.handleMouse}
          handleMouseOut={this.handleMouseOut}
          selected={this.state.selectedPublicationId}
        />
      );
    });
    return(
      <div className="publications">
        <h2> Publications </h2>
        {publications}
        {this.props.children}
      </div>
    );
  }
}

export default PublicationsContainer;
