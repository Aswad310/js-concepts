// Pass by value (Primitives: number, string, boolean, etc.)
// Primitives store actual values. Assigning copies the value.
// Changes to copy don't affect original.

let a = 10

console.log("a => ", a)

let b = a  // b gets copy of a's value (10)
b = 20     // b changes, a stays 10

console.log("b => ", b)

// Pass by reference (Objects & Arrays)
// Objects/arrays store memory address. Assigning copies the reference.
// Both variables point to same object. Changes affect both.

let c = [1, 2]

console.log("c => ", c)

let d = c        // d points to same array as c (not a copy)
d.push(3)        // mutate the array both reference

console.log("c => ", c)  // [1, 2, 3] - c changes too
console.log("d => ", d)

// Pass by reference in function calls
// Functions receive reference to array, not a copy.
// Mutations inside function affect original array.

e = [1, 3, 5]

pushArray(e, 4)   // pass reference to array

console.log("e => ", e)  // [1, 3, 5, 4] - original changed

function pushArray(arr, element) {
  arr.push(element)  // mutating parameter mutates original
}