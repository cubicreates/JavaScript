for(let i = 1;i<=5;i++){
    console.log(i);
}

const obj = {
    new : "star",
    hip : "hop"  
}

for(let i in obj){
    console.log(i,":",obj[i]);
}

for(let i of "Hello World!"){
    console.log(i);
}