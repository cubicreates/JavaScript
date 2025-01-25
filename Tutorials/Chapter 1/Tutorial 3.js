// var a = 56;
// var a = "Hello";
let b = "Outside Block";
let c = null;
let d = undefined;
{
    let b = "Inside Block"
    console.log(b);
}

console.log(b);

// let b = 67; --> Throws error
b = 7;

const type = "new" ;
// type = "pr"; --> Throws error
console.log(type);
