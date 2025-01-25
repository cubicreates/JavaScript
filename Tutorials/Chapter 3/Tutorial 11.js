console.log(oneplusavg(2,3)); //Hoisting
function oneplusavg(a,b){
    return 1+(a+b)/2;
}
console.log(oneplusavg(2,3));


// console.log(obj(3,4)); --> No Hoisting
const obj = (a,b)=>{
    return a+b;
}
console.log(obj(3,4));