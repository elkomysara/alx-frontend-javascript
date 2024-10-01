export default function taskBlock(trueOrFalse) {
  const task = false;  // Use const to prevent reassignment
  const task2 = true;  // Use const to prevent reassignment

  if (trueOrFalse) {
    const task = true;   // Declare new block-scoped variable
    const task2 = false; // Declare new block-scoped variable
  }

  return [task, task2];
}
