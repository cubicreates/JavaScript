console.log(console);

console.time("For-loop");

for(let i=1;i<=10;i++){
    console.log(i);
};

console.timeEnd("For-loop");

console.info("Hello World!");
console.warn("Hello World!");
console.error("Hello World!");

console.assert(true);
console.assert(false);

let table = {
    Hello : "Log",
    Juno : "Hera",
    Vesta : "Hestia"
};

console.table(table);