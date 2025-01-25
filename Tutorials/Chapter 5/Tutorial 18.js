let a = [1,2,3,4,5,6,7,8,9];
console.log(a);
delete a[8];
console.log(a);
console.log(a.length);

let b = [1,2,35,6,7,8,9,345,221];
let c = [22,33]
let arr = b.concat(c)
console.log(arr);

console.log(b);

b.sort();
console.log(b);

b.reverse();
console.log(b);

let sp = b.splice(2,4,101,102,103,104);
console.log(b);
console.log(sp);

let sl = b.slice(3,5);
console.log(sl);