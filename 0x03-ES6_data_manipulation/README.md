# ES6 Data Manipulation

This project explores various data manipulation techniques in JavaScript using ES6 features. The tasks involve working with arrays, maps, sets, and typed arrays to understand their functionality and how they can be used effectively in JavaScript.

## Table of Contents

1. [Basic List of Objects](#basic-list-of-objects)
2. [More Mapping](#more-mapping)
3. [Filter](#filter)
4. [Reduce](#reduce)
5. [Combine](#combine)
6. [Typed Arrays](#typed-arrays)
7. [Set Data Structure](#set-data-structure)
8. [More Set Data Structure](#more-set-data-structure)
9. [Clean Set](#clean-set)
10. [Map Data Structure](#map-data-structure)
11. [More Map Data Structure](#more-map-data-structure)
12. [WeakMap Data Structure](#weakmap-data-structure)

## Tasks

### 0. Basic List of Objects
In this task, we create a function named `getListStudents` that returns an array of student objects. Each object contains `id`, `firstName`, and `location`.

### 1. More Mapping
This task focuses on returning an array of student IDs from an array of objects. We use the `map` function to extract the IDs.

### 2. Filter
In this task, we create a function named `getStudentsByLocation` that filters a list of students by their location.

### 3. Reduce
We implement a function that returns the sum of student IDs using the `reduce` function.

### 4. Combine
This task combines `filter` and `map` to update student grades by their city. If a student doesn’t have a grade, the grade is set to `N/A`.

### 5. Typed Arrays
We explore the use of typed arrays by creating a function that returns a new `ArrayBuffer` with an `Int8` value at a specific position.

### 6. Set Data Structure
Here, we create a function that returns a `Set` from an array.

### 7. More Set Data Structure
We check if all elements in an array exist within a set, returning a boolean.

### 8. Clean Set
This task focuses on filtering values from a set that start with a specific string, returning a formatted string.

### 9. Map Data Structure
We create a function that returns a `Map` of grocery items and their quantities.

### 10. More Map Data Structure
This task involves updating quantities in a `Map`. If the quantity is `1`, it is updated to `100`. If the argument is not a `Map`, an error is thrown.

### 11. WeakMap Data Structure
In this advanced task, we use a `WeakMap` to track the number of times an API endpoint is called. If the number of queries is greater than or equal to 5, an error is thrown.

## Installation

To run this project, you need to have [Node.js](https://nodejs.org/) installed. Follow the steps below to install dependencies:

1. Clone the repository:

   ```bash
   git clone https://github.com/elkomysara/alx-frontend-javascript.git
