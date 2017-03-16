import React from 'react';

let fetchGetRequest = function(url) {
  fetch(url, {
    credentials: 'same-origin'
    })
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
      return responseData;
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
};

exports.fetchPostRequest = fetchGetRequest;
