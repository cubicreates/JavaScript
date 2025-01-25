// Q1.
let a = 74;
let b = 0;
let arr = [1,2,3,4,5]

arr.push(a)
console.log(a);

// Q2.
while(true){
    if( a != 0){
        arr.push(b);
    }
    else{
        arr.push(b);
        break
    }
}

// Q3.
let newarr = arr.filter((i)=>{
    if(i%10){
        return i;
    };
});

console.log(newarr);

// Q4.
newarr = arr.map((element)=>{
    return element*element;
});

console.log(newarr);

// Q5.
let natural = [6,5,4,3,2,1]
newarr = natural.reduce((n1,n2)=>{
    return n1*n2;
});

console.log(newarr);