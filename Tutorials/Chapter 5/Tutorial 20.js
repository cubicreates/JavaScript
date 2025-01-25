let arr = [1,4,5,7,3];

let newarr = arr.map((element,index,array)=>{
    return {element,index,array};
});

console.log(newarr);

newarr = arr.filter((element)=>{
    return element>=5;
});

console.log(newarr);

newarr = arr.reduce((element1,element2)=>{
    return element1+element2;
});

console.log(newarr);