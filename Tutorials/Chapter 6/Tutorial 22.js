let num = ((Math.random()*10)+1);

let i=1
while(i<=100){
    let guess = prompt("Enter a number between 1 and 10: ");
    
    if (guess === num){
        console.log("You guessed the correct number!");
        break;
    }
    
    else{
        console.log("Try Again!");
    };

    i++;
};

console.log("Your score ",100-i);

