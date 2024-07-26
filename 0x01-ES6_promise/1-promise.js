#!/usr/bin/node

// Using the prototype below, return a promise. The parameter is a boolean.

export default function getFullResponseFromAPI(success) {
    return new Promise(function(resolve, reject){
      if (success === true) {
        resolve({
          body: "Success",
          status: 200
        });
      } else if (success === false) {
        reject(new Error("The fake API is not working currently"));
      }
    });
  }
