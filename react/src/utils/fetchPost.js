import React from 'react';

let fetchPostRequest = (url, data) => {
  fetch(url, {
    method: "PATCH",
    body: data,
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'same-origin'})
  .then((response) => {
    if(response.ok) {
      return response.text();
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error);
    }
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default fetchPostRequest;
