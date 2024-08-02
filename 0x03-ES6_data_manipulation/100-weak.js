const weakMap = new WeakMap();

function queryAPI(endpoint) {

  let count = weakMap.get(endpoint) || 0;

  count += 1;

  // Update the count in the weakMap.
  weakMap.set(endpoint, count);

  // If number of queries for this endpoint is >= 5, throw an error.
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

// Export the queryAPI function and the weakMap.
export { queryAPI, weakMap };
