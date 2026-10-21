// =====================================================================
// VALUE vs REFERENCE — QUICK NOTES
// =====================================================================
// Primitives (number, string, boolean, null, undefined, ...)
//   -> variable holds the VALUE. Copying makes an independent copy.
//
// Objects & arrays (also functions)
//   -> variable holds a REFERENCE (address) to the data.
//      Copying copies the address, so both variables share ONE object.
//
// Strictly, JS always passes by value. For objects, that value IS the
// reference ("pass by sharing"). "Pass by reference" is the common shortcut.


// ---------------------------------------------------------------------
// 1) PRIMITIVES — copy is independent
// ---------------------------------------------------------------------
let a = 10

console.log("a => ", a)  // 10

let b = a  // b gets a COPY of 10
b = 20     // only b changes; a stays 10

console.log("b => ", b)  // 20


// ---------------------------------------------------------------------
// 2) ARRAYS / OBJECTS — copy is shared
// ---------------------------------------------------------------------
let c = [1, 2]

console.log("c => ", c)  // [1, 2]

let d = c        // d points to the SAME array as c (not a copy)
d.push(3)        // changes the shared array

console.log("c => ", c)  // [1, 2, 3] - c changed too
console.log("d => ", d)  // [1, 2, 3]

// To get a real copy instead:
//   const copy = [...c]          // array (shallow copy)
//   const copy = { ...obj }      // object (shallow copy)
//   const copy = structuredClone(obj)  // deep copy (nested data too)


// ---------------------------------------------------------------------
// 3) FUNCTION ARGUMENTS — same rule
// ---------------------------------------------------------------------
// The function receives the reference, so mutating the parameter
// mutates the original.
//
// Note: `e` has no let/const, so it becomes a global variable.
//       Prefer `let e = [1, 3, 5]` (this would crash in strict mode).
e = [1, 3, 5]

// Works before its definition because function declarations are hoisted.
pushArray(e, 4)   // passes the reference

console.log("e => ", e)  // [1, 3, 5, 4] - original changed

function pushArray(arr, element) {
  arr.push(element)  // mutates the shared array -> original changes
  // Gotcha: `arr = [...]` here would only re-point the local `arr`;
  // the original `e` would NOT change. Only mutation (push, etc.) leaks out.
}
