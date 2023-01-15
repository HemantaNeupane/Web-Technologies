// alert("Hi I am Alert")
// console.log("Hi I am 22 years old");
// console.log("Hi I am Arjun");
// console.log(document.getElementById("paragraph").innerHTML);
// document.getElementById("paragraph").innerHTML=" Basantapur";
// var arjungyawali="Hi I am Arjun Gyawali";
// console.log(arjungyawali);
// document.getElementById("my_message").innerHTML="Yahoo"+" "+arjungyawali+"!";


var para = document.querySelector('p');
var a =12;

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = ` ${name} Welcome to the Game !!!!!!!`;
}