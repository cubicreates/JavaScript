function number(){
    let num = Math.floor(Math.random()*10);
    
    if (num>=1 && num<=3){
        return 1;
    }
    else if (num>=4 && num<=6){
        return 2;
    }
    else if (num>=7 && num<=9){
        return 3;
    }
    else{
        number();
    }
}

function main(){
    
    let computer_number = number();

    if (computer_number === 1){
        computer_choice = "S";
    }
    else if(computer_number === 2){
        computer_choice = "W";
    }
    else{
        computer_choice = "G";
    }

    let person_choice = prompt("Enter your choice between 'S', 'W' or 'G'");
    person_choice = person_choice.toUpperCase();



    if (person_choice == computer_choice){
        alert(`${computer_choice} and ${person_choice} are the same. Try again!`)
    }
    else if((person_choice == "S" && computer_choice == "W") || (person_choice == "W" && computer_choice == "G") || (person_choice == "G" && computer_choice == "S")){
        alert(`${person_choice} beats ${computer_choice}! You Win!`)
    }
    else if((computer_choice == "S" && person_choice == "W") || (computer_choice == "W" && person_choice == "G") || (computer_choice == "G" && person_choice == "S")){
        alert(`${computer_choice} beats ${person_choice}! You Win!`)
    }
}

function program(){
    while(true){
        main()
        let ask = confirm("Do you want to play again?");
        if (ask){
            continue;
        }
        else{
            break;
        }
    }
}

program()