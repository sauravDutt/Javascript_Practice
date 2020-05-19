// This is the final JavaScript Practive 
//...........ALL THE BASICS............
// I am going to cover all the important Topics of JavaScript

// Variable :- var, let, const
// We will not be using var as var keyword assigns or declares a 
// global variable, we will be using let and const most of the time
// let and const were introduced in 2015 in ES6 
// let - You can reassign values eg :-
// let letExample = 30;
// letExample = 31;
// console.log(letExample);
// const - You cannot reassign a value to constant or const variable

// Data Type :- Strings, Numbers, Boolean, null, undefined, symbol
// eg:-
//  const name = 'Saurav'; //String
//  const age = 21; //Number
//  const rating = 4.9; //Number
//  const isCool = true; //Boolean
//  const x = null; //null . object
//  const y = undefined; //undefined
//  let z; //undefined

 //console.log(typeof rating); // the typeof tells the datatype

 // Concatenation 
// const hello =  `My name is ${name} and I am ${age}`;
// console.log(hello)

//String Properties and Methods

// const s = 'Hello World';

// console.log(s.length); //length is a property since it does not have ()
// console.log(s.toUpperCase()); // toUpperCase is a method we can also do toLowerCase()
// console.log(s.substring(0, 5)); // this method takes two perimeters one is the start string and one is the end string.
// console.log(s.split(''))

// Arrays - Variables that hold multiple values

// const fruits = ['apple', 'oranges', 'pears'];

// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// //Object Literals
//  const person = {
//      firstName: 'Saurav',
//      lastName: 'Dutt',
//      age: 21,
//      hobbies: ['music', 'movies', 'sports'],
//      address: {
//          street: 'Park Drive',
//          city: 'Gurugram',
//          state: 'Haryana'
//      }
//  }

//  console.log(person)
//  // to access a single value 
//  console.log(person.firstName, person.lastName);
//  // if we want movies from hobbies
//  console.log(person.hobbies[1]);
//  // if we want city from the address object
//  console.log(person.address.city);

//  // Destructuring - if we wanted to create variables from the object
// const { firstName, lastName, address: { city }} = person;
// console.log(firstName);
// console.log(city);
// // We can also add properties 
// person.email = 'sauravdutt@gmail.com';
// console.log(person);

// const todo = [
//     {
//         id: 1,
//         text: 'Take out Trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Learn JavaScript',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Complete Objectives',
//         isCompleted: false
//     },
// ];
// console.log(todo[1].text);
// // JSON

// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

// // Loops - For loop
// for (let i = 0; i < 10; i++) {
//     console.log(`For Loop Number ${i}`);
// }

// //while
// let i = 0;
// while (i<10) {
//     console.log(`While Loop Number ${i}`);
//     i++;
// }

// for (let i = 0; i < todo.length; i++) {
//     console.log(todo[i].text);
    
// }

// for (let to of todo) {
//     console.log(to.id);
// }

// High Order Array Methods - forEach, map, filter
// // forEach
// todo.forEach(function(to){
//     console.log(to.text);
// });
// map , makes another array out or the main array with the specified parimeter
// const todotext = todo.map(function(to){
//     return to.text;
// });

// console.log(todotext);
//filter
// const isCompleted = todo.filter(function(to){
//     return to.isCompleted === true;
// }).map(function(to){
//     return to.text;
// })

// Ternary operater 
// const x = 11;
// const color = x > 10 ? 'red' : 'blue'; //if x is greater than 10 then its red or its blue

// // switches
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red not blue');
//         break;
// }

// Functions
// traditional way to defining functions
// function addNums(num1 = 1, num2 = 1) {
//     return num1 + num2;
// }

// console.log( addNums(5, 2) );
// // arrow functions - introduced in ES6
// const subNums = (num1= 2, num2=1) => {
//     return num1 - num2;
// }
// console.log(subNums(5, 2));

// Constructor Function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`; //could also be written as this.firstName +' '+ this.lastName;
// }

//The Constructor Function Above is doing the same thing what the following class is doing 
// Class - ES6 introduced Classes in JavaScript
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`; //could also be written as this.firstName +' '+ this.lastName;
//     }
// }


// // Instantiate object
// const person1 = new Person('Saurav', 'Dutt', '2-22-1999');
// const person2 = new Person('Anshul', 'Dutt', '9-24-2000');

// console.log(person1);
// console.log(person2.dob);
// console.log(person2.getBirthYear());
// console.log(person1.getFullName());

//DOM - Document Object Model

//Single Element Selecttors

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

//Multiple element selector
// console.log(document.querySelectorAll('.item'));

//How can we loop through multiple items 
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.remove();// it removes the entire thing
// ul.lastElementChild.remove(); // it removes the last element of the class items
// ul.firstElementChild.textContent = "Hello"; //It lets you change the first element of the class items to hello
// ul.children[1].innerText = "Saurav"; // This gets the second element [1] is the index number 
// ul.lastElementChild.innerHTML = '<h1>Last Element Child</h1>'; //by innerHTML we can format the element as well as change it.

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// // Events
// const btn = document.querySelector('.btn');

// //addEventLIstener takes two parameters one is the event and the second is the function with an event parameter any parameter in the example below that parameter is e
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     //console.log(e);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// })

//For making a small working form where the user can enter the inputs and on clicking submit a list of users can get print in the bottom of the form
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();
    console.log(e.target);
    if(nameInput.value === '' || emailInput.value === '' || phoneInput.value === ``) {
        msg.classList.add('error')
        msg.innerHTML = 'Please Enter All Fields !!'

        setTimeout(() => {
            msg.remove()
        }, 2000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${phoneInput.value}`));

        msg.classList.add('success');
        msg.innerHTML = 'Submitted Successfully !!'

        setTimeout(() => {
            msg.remove()
        }, 2000);

        userlist.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
    }
}