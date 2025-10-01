export default function appendToEachArrayValue(array, appendString) {

  for (let idx of array) {
    let value = array[idx];
    value = appendString + value;
  }

  return value;
}
