// Q1.
let age = 12;
if (age>=10 && age<=20){
    console.log("Your age lies between 10 and 20.");
}
else{
    console.log("Your age does not lies between 10 and 20.");
};

// Q2.
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

// Q3.
let num = 6;
if(num%2==0 && num%3==0){
    console.log("The number is divisible by 2 and 3");
}
else{
    console.log("The number is not divisible by 2 and 3");
}

// Q4.
num =4;
if(num%2==0){
    console.log("The number is divisible by 2");
}
else if(num%3==0){
    console.log("The number is divisible by 3");
}
else{
    console.log("The number is not divisible by 2 or 3");
}

// Q5.
age = 18;
console.log(age>=18?"You can drive.":"You cannot drive.");