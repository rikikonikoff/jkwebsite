import React, { Component }  from 'react';
import Publication from '../components/Publication';

class PublicationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/bars.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({publications: responseData});
      });
  }

  render() {
    let publications = this.state.publications.map(pub => {
      return(
        <Publication
          key={pub.id}
          id={pub.id}
          title={pub.title}
          publishedIn={pub.published_in}
          date={pub.date}
          externalLink={pub.external_link}
        />
      );
    });
    return(
      <div className="publications">
        <h2> I am the Publications Container </h2>
        {publications}
        {this.props.children}
      </div>
    );
  }
}

export default PublicationsContainer;
