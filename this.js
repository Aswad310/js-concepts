// Different types of this

// global level  (for node it returns {}, but for brower it returns "window object")

console.log("Global this =>", this);

// this in function
function myFunction() {
  console.log("Function this =>", this);
}

myFunction();

// this in object
const myObject = {
  myMethod() {
    console.log("Object this =>", this);
  }
};

myObject.myMethod();

// this in class
class MyClass {
  name = "aswad"
  myMethod() {
    console.log("Class this =>", this);
  }
}

const myClass = new MyClass();
myClass.myMethod();

// this in arrow function return undefined
const myArrowFunction = () => {
  try {
    console.log("Arrow function this =>", this);
  } catch (error) {
    console.log(e);
  }
};

myArrowFunction();

// this in setTimeout
setTimeout(() => {
  console.log("Timeout this =>", this);
}, 1000);

// this in setInterval
setInterval(() => {
  console.log("Interval this =>", this);
}, 1000);

// this in Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise this =>", this);
  }, 1000);
});

// this in async function
async function myAsyncFunction() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async function this =>", this);
    }, 1000);
  });
}

myAsyncFunction();

