import React, { Component }  from 'react';
import Publication from '../components/Publication';

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
          abstract={pub.abstract}
          background={pub.background}
          methods={pub.methods}
          results={pub.results}
          methodsAndFindings={pub.methods_and_findings}
          conclusions={pub.conclusions}
          externalLink={pub.external_link}
          handleClick={this.handleClick}
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
