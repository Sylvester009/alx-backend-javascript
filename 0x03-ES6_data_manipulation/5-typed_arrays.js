export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  // Create an ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view on the ArrayBuffer
  const int8View = new Int8Array(buffer);

  // Set the value at the specified position
  int8View[position] = value;

  // Return the ArrayBuffer
  return buffer;
}
