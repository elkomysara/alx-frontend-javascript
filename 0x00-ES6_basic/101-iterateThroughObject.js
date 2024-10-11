
export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [...reportWithIterator];  // Spread the iterator into an array
  return employeesArray.join(' | ');  // Join the employee names with ' | '
}
