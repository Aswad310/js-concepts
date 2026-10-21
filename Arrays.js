// JavaScript Arrays

const cars = ["suzuki", "honda", "kia"]

console.log(cars);

// Empty Array
const names = [];

names[0] = "aswad"
names[1] = "ali"
names[2] = "ahmed"

console.log(names);

// Accessing Arrays Element
const names2 = ["aswad", "ali", "ahmed"];
console.log(names2[1])

// Changing an Array
names2[1] = "rehman";
console.log(names2)

// converting an array to string
console.log(names2.toString())

// refering an array
const names3 = names2
console.log(names3)

// display an array to JSON
const nums =  [4, 1, 5, 67, 1]
const nums2 = JSON.stringify(nums)

console.log(nums2) // logs the "false", bcz stringify is not equal to nums2
console.log(nums === nums2) // logs the "false", bcz stringify is not equal to nums2

console.log(typeof(nums1));
console.log(typeof(nums2));


// array elements can be objects
const date = Date.now()
const myFunction = () => console.log(console.log("My Function"))
const myCars = () => console.log(console.log("My Cars"))

const arr = [date, myFunction, myCars]


// array length property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)


// looping through arrays
for(let i=0 ; i<fruits.length ; i++) {
  console.log(fruits[i])
}


// using "forEach()"
// fruits.forEach((value, index, array) => {
//   console.log(value)
//   console.log(index)
//   console.log(array)
// })


// adding array elements
const myArr = ["Banana", "Orange", "Apple"];
myArr.push("Peach")
console.log(myArr);


// access nested array inside the object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {

  for (let j in myObj.cars[i].models) {

    console.log(myObj.cars[i].models[j])
  }
}


