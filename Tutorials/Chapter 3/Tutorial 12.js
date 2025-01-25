// Q1.
let obj ={
    Nevel : "9.0",
    Conve : "9.5",
    KDot : "9.4"
}

for(let i in obj){
    let a=obj[i];
    console.log(i, ":", a);
}

// Q2.
for(let i in obj){
    let a=obj[i];
    console.log(i, ":", a);
}

// Q3.
let num = 4;
let guess = 3;

while(true){
    if(num===guess){
        console.log("You guessed the number!");
        continue;
    }
    else{
        console.log("Try Again!");
        break;
    };
};

// Q4.
const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
};

console.log(mean(1,2,3,4,5));