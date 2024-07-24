export default function appendToEachArrayValue(array, appendString) {
  for (let idx = 0; idx < array.length; idx++) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
