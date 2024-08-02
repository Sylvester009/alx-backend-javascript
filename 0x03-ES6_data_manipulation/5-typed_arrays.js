export default function createInt8TypedArray(length, position, value){
  if(position <= 0 && position > length){
    throw new error("out of range");
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int32Array(buffer);
  int8View.setInt8(position, value);
  return int8View;
}
