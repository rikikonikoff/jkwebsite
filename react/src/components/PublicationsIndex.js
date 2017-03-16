import React from 'react';
import Publication from './Publication';

const PublicationsIndex = (props) => {
  let publications = props.publications.map(pub => {
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
        handleClick={props.handleClick}
        selected={props.selectedPublicationId}
      />
    );
  });
  return(
    <div>
      {publications}
    </div>
  );
};

export default PublicationsIndex;
