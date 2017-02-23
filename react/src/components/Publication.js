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
      {props.authors} ({props.date}). {props.title}. {props.journal} {props.issue}, {props.pages}.
      <br/>
      <a href={props.externalLink}>Read this article</a>
      </p>;
  }

  return(
      <div onMouseOver={handleMouse} onMouseOut={handleMouseOut}>
        <p>
          {props.title} ({props.date})
          <br/>
          {details}
        </p>
        <br/>
      </div>
  );
};

export default Publication;
