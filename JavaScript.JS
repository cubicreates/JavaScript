// First JS program
console.log("Adit Ghosh")

// Variables in JS
// uses 'var' or 'let' keyword

var $name1 = "Hello"
let $name2 = "World"

console.log($name1)
console.log($name2)

// typeof function of JS
// gives the datatype of variable
let type = typeof $name1
console.log(type)

// Arrays
let arr = ["I", "love", "you", 3000, false]
console.log(arr)

// accessing an element
let index = arr[3]
console.log(index) //Way 1

console.log(arr[3]) //Way 2

// replacing elements
arr[4] = true
console.log(arr)

// to get the length of arrays
let len = arr.length
console.log(len)

// Array Methods

// pop method (takes out the last element of the array)
console.log(arr)
let pp = arr.pop()

console.log(pp)
console.log(arr)

// push method (enters the element at the end of the array)
let bool= false
pu = arr.push(bool)

console.log(arr)

// shift method (takes out the first element of the array)
let sh = arr.shift()

console.log(sh)
console.log(arr)

// unshift method (enters the elment at the front of the array)
let str = "I"
unsh = arr.unshift(str)

console.log(arr)

// popping specific elements
let Pop = arr.pop(false)

console.log(Pop)
console.log(arr)

// Objects
let avengers = {
    "IronMan" : "Tony Stark",
    "Captain-America" : "Steve Rogers",
    "Black-Widow" : "Natasha Romanof"
}

console.log(avengers)

// Accessing the value from the key - value pair (property) from an object

// Method 1
let $M1 = avengers.IronMan
console.log($M1)

// Method 2
let $M2 = avengers["Captain-America"]
console.log($M2)

// Adding a property
avengers.Hawkeye = "Clint Barton"
avengers.AntMan = "Scott Lang"
console.log(avengers)

// Updating a property + Adding Array in Object
avengers["Black-Widow"] = ["Natasha", "Romanof"]
console.log(avengers)

// Adding Object inside Object
avengers.Hawkeye = {
    "Name" : "Clint Barton",
    "Affiliation" : "S.H.E.I.L.D"
}
console.log(avengers)

// Deleting a property

delete avengers.AntMan
console.log(avengers)

