const arr = [4, 5, 1, 7, 2, 8, 22, 65]

// length 
console.log(arr.length)

// set the length of an array
// arr.length = 2
// console.log(arr)



// toString()
console.log(arr.toString())



// at
console.log(arr.at(3))



// join
console.log(arr.join('*'))



// pop and push
// const popValue = arr.pop()
// console.log(popValue)

// let reverseArr = []
// while (arr.length) {
//   reverseArr.push(arr.pop())
// }

// console.log(reverseArr)



// shift
console.log("shift===>>")
console.log(arr.shift())

// unshift  => returns an array after unshifting the first element
console.log("unshift===>>")
console.log(arr.unshift("aswad"))
console.log(arr)



// Array.isArray()
console.log(Array.isArray(arr))



// delete() - its better to  Use pop() or shift() instead. bcz delete() leaves undefined holes in the array.
delete arr[1]
console.log(arr)


// concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const concateArr = myGirls.concat(myBoys)
console.log(concateArr)



// copyWithin(targetIndex, startIndex, endIndex)
const arr2 = [4, 5, 1, 7, 2, 8, 22, 65]
arr2.copyWithin(2, 6, 8)
console.log(arr2)



// Array flat() - return new Array
const myArr = [[1, 2], [3, 4], [5, 6]];
const flatArr = myArr.flat()
console.log(flatArr.push([12, 30, 45]))


// Array flatMap()
const myArr2 = [[1, 2], [3, 4], [5, 6]];
const flatArr2 = myArr2.flatMap(x => x)
console.log(flatArr2)



// Array Slice -> slice(start, end-1)
const dota = [2022, 2019, 1999, 2002, 2003, 2010]
console.log(dota.slice(1, 8))



// Array Splice -> spice(arrayIndex, from arrayIndex values to remove, values to add)
const lol = ["lux", "malphite", "morgana", "yone", "timu", "oriana"]
console.log("spliced response =====>>> " , lol.splice(2, 0, 'aswad'))
console.log("actual lol array ====>>>", lol)


// Array Spliced -> did not change the array, instead return the updated array
console.log("spliced response =====>>> " , lol.toSpliced(2, 0, 'aswad'))
console.log("actual lol array ====>>>", lol)

