// Q1.
let drive = ()=>{let input = prompt("Enter your age");
let age = parseInt(input);

if (age>=18){
    alert("You can drive!");
}
// Q3.
else if(age<0){
    console.error("Age is negative!") 
}
else{
    alert("You cannot drive!");
};
};

drive();

// Q2.
let agree = confirm("Do you want to see the prompt again?");
if(agree){
    drive();
};

// Q4.
let number = prompt("Enter a number");
if(number>4){
    location.href="https://www.google.com";
};

// Q5.
let color = prompt("Enter a color");
document.body.style.backgroundColor = color;