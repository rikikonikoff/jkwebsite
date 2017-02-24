import React from 'react';

const Publication = (props) => {
  let handleMouse = (id) => {
    props.handleMouse(props.id);
  };

  let handleMouseOut = (id) => {
    props.handleMouseOut(props.id);
  };

  let details;
  if (props.selected === props.id) {
    details =
      <p className="publicationDetails">
      Authors: {props.authors} <br/>
      Published: {props.journal} {props.issue}, {props.pages} <br/>
      <br/>
      </p>;
  }

  return(
      <div onMouseOver={handleMouse} onMouseOut={handleMouseOut}>
        <a href={props.externalLink}>
          <h3>
            {props.title} ({props.date})
          </h3>
        </a>
        {details}
        <br/>
      </div>
  );
};

export default Publication;
