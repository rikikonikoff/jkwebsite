import React from 'react';

const Publication = (props) => {
  let handleClick = (id) => {
    props.handleClick(props.id);
  };

  let publishedInfo = `${props.journal} ${props.issue}, ${props.pages}`;

  let details;
  if (props.selected === props.id) {
    details =
      <p className="publicationDetails">
        <br/>
        {props.abstract &&
          <p><i>Abstract</i>: {props.abstract}</p>}
        {props.background &&
          <p><i>Background</i>: {props.background}</p>}
        {props.methods &&
          <p><i>Methods</i>: {props.methods}</p>}
        {props.results &&
          <p><i>Results</i>: {props.results}</p>}
        {props.methodsAndFindings &&
          <p><i>Methods and Findings</i>: {props.methodsAndFindings}</p>}
        {props.conclusions &&
          <p><i>Conclusions</i>: {props.conclusions}</p>}
      </p>;
  }

  return(
    <div className="panel panel-default">
      <div onClick={handleClick} className="publication" title="Click to Expand">
        <strong>{props.title} ({props.date})</strong><br/><br/>
        <i>Authors</i>: {props.authors} <br/>
      </div>
      <br/>
      <div className="details">
        <i>Published</i>:
        <a href={props.externalLink} title="Visit Link">
          {publishedInfo}
        </a><br/>
        {details}
      </div>
    </div>
  );
};

export default Publication;
