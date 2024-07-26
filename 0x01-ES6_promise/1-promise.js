#!/usr/bin/node

// Using the prototype below, return a promise. The parameter is a boolean.

function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: "Success",
      });
    } else if (success === false) {
      reject(new Error("The fake API is not working currently"));
    }
  });
}

export default getFullResponseFromAPI;
