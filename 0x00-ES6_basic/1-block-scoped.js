export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    var task = true; // Block-scoped
    var task2 = false; // Block-scoped
  }

  return [task, task2];
}
