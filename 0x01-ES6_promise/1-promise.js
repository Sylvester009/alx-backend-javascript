#!/usr/bin/node

function getFullResponseFromAPI(success) {
  return promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: "Success",
      });
    } else if (success === false) {
      reject("Error: The fake API is not working currently");
    }
  });
}

export default getFullResponseFromAPI;
