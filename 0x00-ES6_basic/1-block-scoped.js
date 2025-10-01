export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true; // Block-scoped
    task2 = false; // Block-scoped
  }

  return [task, task2];
}
