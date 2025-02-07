# JavaScript Falsy Value Handling

This repository demonstrates a common JavaScript bug related to handling falsy values in functions. The `foo` function explicitly checks for `null` values, but it does not consider other falsy values like `0`, `false`, `''`, `undefined`, and `NaN`.  This can lead to unexpected results or errors if these values represent legitimate inputs.

## Bug
The `bug.js` file shows the function with the potential issue. The function is designed to add two numbers but returns 0 if either input is `null`.  However, it doesn't handle other falsy inputs correctly.

## Solution
The `bugSolution.js` file provides a solution that addresses this limitation by using a more robust check for valid numeric inputs.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment (e.g., browser's console, Node.js).
3. Run the code to observe the behavior.