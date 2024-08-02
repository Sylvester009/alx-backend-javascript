export default function hasValuesFromArra(set, array){
  return array.every((element) => set.has(element));
}
