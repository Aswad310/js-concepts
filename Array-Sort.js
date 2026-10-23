const fruits = ["Banana", "Orange", "Apple", "Mango"];


// sort() -> mutate the orginal array
// console.log(fruits.sort())



// reverse()
// console.log(fruits.reverse())



// toSorted() -> orginal array remains same
// console.log(fruits.toSorted())



// toReversed() -> orginal array remains same
// console.log(fruits.toReversed())



// sort() -> sort the int
// const nums = [40, 100, 1, 5, 25, 10]
// console.log(nums.sort((a, b) => a - b))
// console.log(nums.sort((a, b) => b - a))
// console.log(nums.sort(() => 0.5 - Math.random()))



// min, max using Math
// const nums = [40, 100, 1, 5, 25, 10]
// console.log(Math.min(...nums))
// console.log(Math.max(...nums))



//  Array Minimum Method
const nums = [40, 100, 1, 5, 25, 10]
console.log(findMin(nums))


function findMin(arr) {
  len = arr.length
  min = Infinity

  while (len--) {
    if (arr[len] < min){
      min = arr[len]
    }
  }

  return min
}




// Sorting Object Arrays
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];


console.log(cars.sort((a, b) => a.year - b.year))