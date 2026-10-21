// =====================================================================
// ARROW FUNCTIONS — QUICK NOTES
// =====================================================================
// Short syntax for writing functions:  (params) => body
//
// Key difference from normal functions:
//   An arrow function has NO `this` of its own.
//   It uses the `this` of the place where it was written.
//
// Output in Node (CommonJS file): `this` at top level is {} (module.exports).
// In a browser it would be the `window` object.

// `name` is declared but not used in this file.
let name = 'aswad'

// Top-level `this` -> {} in Node
console.log(this)

const myArrowFunction = () => {
  // Inherits `this` from outside the function -> same {} as above
  console.log("Arrow function this =>", this);
};

myArrowFunction();


// ---------------------------------------------------------------------
// RETURN STYLES
// ---------------------------------------------------------------------
// 1) Block body  { }  -> you MUST write `return`
//    Use when you need more than one statement.
const addTwo = (a, b) => {
  return a + b
}

console.log(addTwo(3, 4))  // 7

// 2) Concise body (no { })  -> returns the expression automatically
//    Use for a single expression.
const add = (a, b) => a + b

// Both styles give the same result, only the syntax differs:
// Block body + return
const subtractTwo = (a, b) => { return a - b }
// Concise body. () is optional here; it is needed when returning an object:
//   const makeUser = () => ({ name: 'aswad' })
const subtract = (a, b) => (a - b)

// (add, subtractTwo and subtract are defined but never called in this file.)
