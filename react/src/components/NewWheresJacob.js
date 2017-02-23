import React from 'react';

const NewWheresJacob = (props) => {
  let handleSubmit = () => {
    let location = this.refs.location.value;
    $.ajax({
      url: '/api/v1/wheres_jacobs',
      type: 'POST',
      data: [ { location: location }],
      success: (response) => { console.log('it worked!', response); }
    });
  };

  return(
    <div>
    <input ref='location' placeholder='Jacob, where are you?' />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NewWheresJacob;
