const arr = [3, 1, 5, 2, 71, 1, 4]

// indexOf()
console.log(arr.indexOf(2, 4))



// lastIndexOf()
console.log(arr.lastIndexOf(1))



// includes -> returns true/false
console.log(arr.includes(123))



// find() -> passes a function and returns value, index, arr
// returns the "value" of the first array element that passes a test function
const nums = [3, 1, 5, 7, 4];
const response = nums.find(myFun)
console.log("response====>>>>", response)
function myFun(value, index, array) {
  return value > 4;
}



// findIndex() -> > passes a function and returns value, index, arr
// returns the index of the first array element 
const numbers = [4, 9, 16, 25, 29];
let res2 = numbers.findIndex(myFunction);
console.log("first====>", res2)
function myFunction(value, index, array) {
  return value > 18;
}



// findLast() -> returns the value of the first element from end of the array
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);

