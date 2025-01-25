// Type Convertion from string to int and float
let num = "56";
console.log(typeof num);
num=parseInt(num);
console.log(num);
console.log(typeof num);
num=parseFloat(num)
console.log(num);
console.log(typeof num);

// If-Else
let age = 1;
if (age<18) {
    console.log("You are underage");  
}
else{
    console.log("You are of age");
};


// If - Else If - Else
age = 18;
if (age<18) {
    console.log("You are underage");  
}
else if (age===18){
    console.log("You are 18");
}
else{
    console.log("You are of age");
};

// Switch Statement
let a = 54;
let b = 45;
let opp = "+";
switch (opp) {
    case "+":
        console.log(a+b);
        break;

    case "-":
        console.log(a-b);
        break
    
    default:
        console.log(a*b);
        break;
}