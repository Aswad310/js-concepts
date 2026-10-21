// =====================================================================
// `this` — QUICK NOTES
// =====================================================================
// `this` depends on HOW a function is called, not where it is written.
// EXCEPTION: arrow functions don't have their own `this`;
//            they use the `this` of the code around them.
//
// Quick rules (outputs below are from Node, CommonJS file):
//
// | Where                          | `this` is                                    |
// |--------------------------------|----------------------------------------------|
// | Top level of file              | {}  (module.exports); browser: window        |
// | Normal function, plain call    | global object; undefined in strict mode      |
// | Method call  obj.method()      | obj (the thing before the dot)               |
// | Class method                   | the instance (object made with `new`)        |
// | Arrow function                 | `this` of the surrounding code               |
// | Arrow inside setTimeout, etc.  | `this` of the surrounding code               |
// =====================================================================


// ---------------------------------------------------------------------
// 1) GLOBAL LEVEL
// ---------------------------------------------------------------------
// Node: {}      Browser: window
console.log("Global this =>", this);


// ---------------------------------------------------------------------
// 2) NORMAL FUNCTION
// ---------------------------------------------------------------------
// Called with no object before it -> `this` is the global object.
// With "use strict" it would be undefined instead.
function myFunction() {
  console.log("Function this =>", this);  // global object
}

myFunction();


// ---------------------------------------------------------------------
// 3) OBJECT METHOD
// ---------------------------------------------------------------------
// Called as myObject.myMethod() -> `this` is myObject.
const myObject = {
  myMethod() {
    console.log("Object this =>", this);  // { myMethod: [Function] }
  }
};

myObject.myMethod();


// ---------------------------------------------------------------------
// 4) CLASS METHOD
// ---------------------------------------------------------------------
// `this` is the instance, so it can read its fields (this.name).
class MyClass {
  name = "aswad"
  myMethod() {
    console.log("Class this =>", this);  // MyClass { name: 'aswad' }
  }
}

const myClass = new MyClass();
myClass.myMethod();


// ---------------------------------------------------------------------
// 5) ARROW FUNCTION
// ---------------------------------------------------------------------
// Not undefined: it uses the top-level `this` -> {} in Node.
// (The try/catch is not needed here: reading `this` here cannot throw.)
// BUG in the catch: it logs `e`, but the variable is named `error`.
// Fix: console.log(error)
const myArrowFunction = () => {
  try {
    console.log("Arrow function this =>", this);  // {}
  } catch (error) {
    console.log(e);
  }
};

myArrowFunction();


// ---------------------------------------------------------------------
// 6) TIMERS: setTimeout / setInterval
// ---------------------------------------------------------------------
// Arrow callback -> uses the top-level `this` -> {}
// (With a normal `function` callback, `this` would be different:
//  a Timeout object in Node, window in a browser.)
setTimeout(() => {
  console.log("Timeout this =>", this);  // {}
}, 1000);

// setInterval repeats every 1s FOREVER. Stop the script with Ctrl+C,
// or call clearInterval(id) with the id it returns.
setInterval(() => {
  console.log("Interval this =>", this);  // {}
}, 1000);


// ---------------------------------------------------------------------
// 7) INSIDE A PROMISE
// ---------------------------------------------------------------------
// The Promise callback and the timer callback are both arrows,
// so `this` is still the top-level {}.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise this =>", this);  // {}
  }, 1000);
});


// ---------------------------------------------------------------------
// 8) ASYNC FUNCTION
// ---------------------------------------------------------------------
// myAsyncFunction is a NORMAL function called plainly, so its `this`
// is the global object. The arrows inside simply inherit it.
// Different from the sections above, where the arrows sat at top level.
async function myAsyncFunction() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async function this =>", this);  // global object
    }, 1000);
  });
}

myAsyncFunction();
