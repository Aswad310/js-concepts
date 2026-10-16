// Arrow Functions - ES6 syntax shorthand for function expressions
// Arrow functions DON'T have their own 'this' - they inherit from parent scope
let name = 'aswad'
console.log(this)
const myArrowFunction = () => {
  console.log("Arrow function this =>", this);  // 'this' refers to global/parent context
};

myArrowFunction();

// Explicit return syntax - use {} curly braces when you need multiple statements
// Must use 'return' keyword explicitly with curly braces
const addTwo = (a, b) => {
  return a + b
}

console.log(addTwo(3, 4))

// Implicit return (Concise body) - use () parentheses for single expression
// Expression automatically returns without 'return' keyword
const add = (a, b) => a + b

// Comparison: Both return same result, different syntax
// {} + return = explicit return (block body)
const subtractTwo = (a, b) => { return a - b }
// () = implicit return (concise body - must use parentheses)
const subtract = (a, b) => (a - b)