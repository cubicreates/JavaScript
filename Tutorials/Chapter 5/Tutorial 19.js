let num = [1,2,3,4,5];

for(let i=0; i<num.length;i++){
    console.log(num[i]);
}

for(let i of num){
    console.log(i);
}

for(let i in num){
    console.log(num[i]);
}

num.forEach((i) => {
    console.log(i*i);
});

let nme = "Array";
let arr = Array.from(nme);
console.log(arr);