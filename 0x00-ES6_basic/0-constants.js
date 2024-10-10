
export function taskFirst() {
  const task = 'I prefer const when I can.';  // Changed to const
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';  // Changed to let
  combination += getLast();  // Combination value changes

  return combination;
}
