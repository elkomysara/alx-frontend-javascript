# 0x00. ES6 Basics

## Description

This project focuses on understanding the fundamentals of ECMAScript 6 (ES6), the latest standard of JavaScript at the time of this project. ES6 introduced many new features and improvements to JavaScript, including block-scoped variables, arrow functions, default parameters, rest and spread parameters, string templating, and more. Through this project, you will learn to apply these concepts in real-world coding scenarios.

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without assistance:

- What is ES6 and its significance.
- New features introduced in ES6.
- The difference between a constant (`const`) and a variable (`let` or `var`).
- Block-scoped variables and their uses.
- Arrow functions and default parameters.
- Rest and spread function parameters.
- String templating and its advantages.
- Object creation and manipulation in ES6.
- Iterators and `for-of` loops.

## Requirements

- **Node.js 12.11.x** must be installed (Use [setup instructions](#setup)).
- All your files will be executed on **Ubuntu 18.04 LTS** using NodeJS.
- Use of allowed editors: **vi**, **vim**, **emacs**, or **Visual Studio Code**.
- All files must end with a new line.
- Code must follow **ESLint** rules (with the configuration provided).
- Testing will be done using the **Jest** Testing Framework.
- All functions must be exported for testing purposes.

## Setup

To get started with the project, follow the steps below:

### 1. Install Node.js 12.11.x:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify the installation:
```bash
node -v  # Expected output: v12.11.1
npm -v   # Expected output: 6.11.3
```

### 2. Install Jest, Babel, and ESLint:

In the project directory, install the required dependencies using the supplied `package.json`:

```bash
npm install
```

This will install the following:
- Jest (for testing)
- Babel (for transpiling ES6)
- ESLint (for linting)

### 3. Configuration Files:

Make sure the following files are present in your project:

#### `package.json`:
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

#### `babel.config.js`:
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

#### `.eslintrc.js`:
```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};
```

### 4. Run Tests

To test your code, use the following command:

```bash
npm run test
```

You can also run the full lint and test check with:

```bash
npm run full-test
```

## Tasks

### Task 0: Const or Let?
Modify the functions to use `const` and `let` appropriately.

### Task 1: Block Scope
Rewrite the function `taskBlock` to ensure that variables are block-scoped.

### Task 2: Arrow Functions
Rewrite the function using ES6 arrow function syntax.

### Task 3: Default Parameters
Condense the function by defining default parameter values.

### Task 4: Rest Parameter Syntax
Use the rest parameter syntax to count the number of arguments passed to the function.

### Task 5: Spread Syntax
Use the spread syntax to concatenate arrays and strings.

### Task 6: Template Literals
Rewrite the function to use template literals for string interpolation.

### Task 7: Object Property Shorthand
Simplify the object properties using ES6 shorthand syntax.

### Task 8: Computed Property Names
Use computed property names to dynamically create object properties.

### Task 9: Method Properties
Use ES6 method properties for defining methods inside an object.

### Task 10: For...of Loops
Rewrite the function to use the `for...of` loop.

### Task 11-14: Advanced Tasks (Iterators)
Work with iterators and objects, returning custom iterators that allow iteration through object properties.

## Author

**elkomysara** - [GitHub Profile](https://github.com/elkomysara)
