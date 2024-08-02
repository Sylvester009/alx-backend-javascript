export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Block-scoped
    const task2 = false; // Block-scoped
  }

  return [task, task2];
}
