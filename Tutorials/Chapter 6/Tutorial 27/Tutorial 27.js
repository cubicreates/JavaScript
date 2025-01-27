alert("This Website Works!");

let a = prompt("This Website Works!");
console.log(a);
document.write(a);
alert(`The written message is ${a}`)

let confir = confirm("The Website Works");
if (confir){
    document.write("Yes"); //writes in the html page
}
else{
    window.close(); //closes the webpage
};