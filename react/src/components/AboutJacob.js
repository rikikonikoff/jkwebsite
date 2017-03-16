import React from 'react';

const AboutJacob = (props) => {
  return(
    <div>
      <h2>About Jacob</h2>
      <br/>
      <div className="panel panel-default">
        <div className="row">
          <div className="col-xs-4">
            <img src={props.imageUrl} className="resizable-image"/>
          </div>
          <div className="col-xs-8">
            {props.about}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJacob;
