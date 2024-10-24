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
len = arr.length
console.log(len)

// Array Methods

// pop method (takes out the last element of the array)
console.log(arr)
pp = arr.pop()

console.log(pp)
console.log(arr)

// push method (enters the element at the end of the array)
bool= false
pu = arr.push(bool)

console.log(arr)

// shift method (takes out the first element of the array)
sh = arr.shift()

console.log(sh)
console.log(arr)

// unshift method (enters the elment at the front of the array)
str = "I"
unsh = arr.unshift(str)

console.log(arr)

// popping specific elements
Pop = arr.pop(false)

console.log(Pop)
console.log(arr)