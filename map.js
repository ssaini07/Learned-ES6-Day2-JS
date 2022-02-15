//Create objects
const apples = {
    name: 'Apples'
};
const bananas = {
    name: 'Banana'
};
const oranges = {
    name: 'Oranges'
};

// Create a new Map
const fruits = new Map();

//Add new elements to the map
console.log(fruits.set(apples, 500));
console.log(fruits.set(bananas, 300));
console.log(fruits.set(oranges, 200));

//Javascript create a set

const createSet = new Set();

//Add some values to the set
createSet.add('John');
createSet.add('Smith');
console.log(createSet);
console.log(createSet.size);

//Javascript classes
class Car {
    constructor(company, year, variant) {
        this.company = company;
        this.year = year;
        this.variant = variant;
    }
}

const mycar1 = new Car('Toyota', '2022', 'Land Cruiser');
console.log(mycar1);

//Javascript promise 
// const myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() {
//         myResolve("I love You !!");
//     }, 3000);
// });

// myPromise.then(function(value) {
//     console.log(value);
// });

//Javascript promise 
const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User watching cat meme',
                message: 'WebDevSimplified > Cat'
            })
        } else {
            resolve('Thumbs up and subscribe');
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})

//function rest parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

//Array.from
console.log(Array.from("ABCDEFG"));

//Array Keys()
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruit.keys();

let text = "";
for (let x of keys) {
    text += x + "<br>";
}

console.log(text);

//Array find() method
const numbers = [10, 7, 22, 29, 16, 19, 8];

function myFunction(value, index, array) {
    return value > 10;
}

let first = numbers.find(myFunction);
console.log(first);

//Find index using Array findIndex() method
let findIndex = numbers.findIndex(myFunction);
console.log(findIndex);

//The Math.trunc() Method
console.log(Math.trunc(5.4));

//The Math.cbrt() Method
//Math.cbrt(x) returns the cube root of x:

console.log(Math.cbrt(9));
console.log(Math.cbrt(125));

//Exponentiation operator (**) works same way as Math.pow(x,2)
let y = 5;
let z = y ** 2;
console.log(z);

//Javascript Array.includes() method
const colors = ['red', 'black', 'white', 'grey'];
const result = colors.includes('green');
console.log(result);

//Javascript String padding

let str = "5";
str = str.padStart(4, 0);
console.log(str);

let str1 = "5";
str1 = str1.padEnd(4, 0);
console.log(str1);

//JavaScript Object Entries
const person = {
    name: 'John',
    age: 30,
    profession: 'Software Developer',
    city: 'Miami'
}

const output = Object.entries(person);
console.log(output);

const perfumes = {
    company1: 100,
    company2: 200,
    company3: 300,
    company4: 400
}

const myMap = new Map(Object.entries(perfumes));
console.log(myMap);

//JavaScript Async Functions
async function myFun() {
    return 'John Macron';
}

myFun()
    .then(res => console.log(res));

//Async and Await functions
// async function getUsers() {
//     //await response of the fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     //only proceed once its resolved 
//     const data = await response.json();

//     //Only proceed once second promise is resolved
//     return data;
// }

// getUsers().then(users => console.log(users));

//Array.map() 

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element) {
    return element * 3;
});

console.log(modifiedArr);

//Array.reduce() 

let total = [0, 1, 2, 3];
let outcome = total.reduce((previousValue, currentValue) =>
    previousValue + currentValue, 0);
console.log(outcome);