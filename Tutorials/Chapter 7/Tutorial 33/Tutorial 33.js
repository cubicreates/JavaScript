console.log(document.body.childNodes);
let arr = document.body.childNodes;
let array = Array.from(arr);
console.log(array);

console.log(document.body.firstChild);
let a = document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement);
console.log(a.firstChild.nextSibling);