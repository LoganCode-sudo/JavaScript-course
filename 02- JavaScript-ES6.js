//ES6 is Javascript with extra features
//these include:
//-Arrow functions
//-classes
//-modules
//and much more...

//"use strict" enables strict mode, it catches comman javascript errors
"use strict";
//let Name = "Logan";
//let Name = "Raven";
//console.log(Name);

// in normal JS this would just override the "Logan" value
// but "use strict" doesnt allow it to pass

// using var creates global variables||if decleared within a function its local
//let works the same but when decleared within a code block, statement or expression its only limited to that section
//only exsists while the for is running
for (let i = 0; i == 0; i++) {
  console.log("i exsist here");
  console.log(i);
}
//calling within statement returns = 0

//console.log(typeof i);
//the above comment retuns "undefined"

// const is a declearation type that is read-only
//value cannot be changed after decleared
const I = 0;

//i = 3;
//the above comment will throw a error
//good practise to declear constants in uppercase and underscores

const ARR = [1, 2, 3];
ARR.push(4);
console.log(ARR);

//ARR = [2,4,6];
//constant arrays can still be modified
//the array itself cannot be reassigned

//Object.freeze is used to ensure data does not change
var Obj = {
  Name: "Logan",
  LastName: "Coghill"
};
Object.freeze(Obj);
console.log(Obj);

//Obj.Name = "Not Logan";
//the above comment throws a read-only error

//you can create inline functions using arrow function syntax
const MY_AGE = () => {
  let Age = 18;
  return Age;
};
console.log(MY_AGE());
//when a function has only a return the above can be simplified even more
//parameters also work
const MY_JOB = (str1, str2) => str1 + str2;
//the code block and return is not included
console.log(MY_JOB("Jr. ", "programmer"));

//default parameter is a value that the function will use if the value is not defined
const MY_PET = (name = "Dog") => "My pet is a: " + name;
console.log(MY_PET());
console.log(MY_PET("dog + cat"));

//rest parameter can store any amount of arguments, in the form of an array
const MY_NUMS = (...args) => args.length;
console.log(MY_NUMS(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

//spread operator, its used to expand arrays and other expressions
const ARR_1 = [1, 2, 3];
let Arr1 = [...ARR_1, 4, 5, 6];
console.log(Arr1);
console.log();
//all the values of the ARR_1 are packed, then unpacked when called in console
// the spread operator works in-line, e.g. arrays and parameters

//destructing assignment
//this is a neat way to store values taken from objects
const USER = { Name: "logan", Age: 18 };

var Name = USER.Age;
var Age = USER.Name;
//the above can be done in one line
var { Name, Age } = USER;
console.log(Name);
console.log(Age);

//multi-lined strings and interpolation features
const greet = `hello my name is ${USER.Name},
and im ${USER.Age}`;
console.log(greet);
//NOTE: these are backticks not quotes, it allows for multi-lined strings
//the ${} also allows you to include a variable

//you can make functions that create objects
const OBJ_USER = (a, b) => ({
  a: a,
  b: b
});
console.log(OBJ_USER(1, 2));

//you can also nest objects within objects with the following ES6 syntax
const HELLO_USER = {
  Name: "Logan",
  SayHello() {
    return `hello, my name is ${HELLO_USER.Name}`;
  }
};
console.log(HELLO_USER.SayHello());

//class can be used to create objects, although it mustnt be confused with OOP "its just syntax"
class Planets {
  //constructors are used to create properties without knowing the value
  constructor(_Planet, _MainResource) {
    this._Planet = _Planet;
    this._MainResource = _MainResource;
  }
}
//values are then assigned when object is created
var DirtBall = new Planets("Earth", "Water");
console.log(DirtBall);

//getters and setters control access to an object
class Person {
  constructor(Name){
    //when refering to the objects property we use the understore
    this._Name = Name;
  };
    //getters fetch the value from a private variable 
  get Name(){
    return this._Name;
  };
    //setters allow you to modify the value of that private variable 
  set Name(MyName){
    this._Name = MyName;
  };
  
};

const NewUser = new Person('Logan');
console.log(NewUser);

//uses the setter to change the vaule of the private variable
NewUser.Name = "Not Logan!";

//uses getter to display the name in the console
console.log(NewUser.Name);

//imports and exports
//code sharing can be done between JS files 
//by exporting features you want to use in other files 
//and importing it where needed 

//exporting can be done in-line with variable declearation 
//export const Add = (x,y)=> {return x+y;}

//or you can export later on
//const Subtract = (x,y)=>{return x-y;};
//export {Substract};

//importing can be done with the following syntax
//import {Add,Subtract} from './fileName.js';

//you can also import all at once 
//import * as BasicMath from './fileName.js';
//BasicMath.Add(1,2);
//BasicMath.Subtract(4,2);

//default exports,are used when only one value,variable or function is being exported
//it also provides a fallback value for a file or module
export default function add (x,y){return x+y;};
//can only one default per file/modual

//to import default exports 
//import add from './fileName.js';
//add now becomes a variable for holding the default export 
//add(4,4);

//JavaScript Promises 
//used to make a Promise to do something 
//when the task is complete you either fulfill or fail the promise 
//promises take a function as its parameter
//resolve and reject is for determaining the promise outcomes
const MyPromise = new Promise((resolve,reject)=>{
  let val = false;
  if (val == true){
    resolve("Promise complete!");
  }else{
    reject("Promise Failed!");
  };
});

//promises are useful when dealing with processes that take an unknown amount of time e.g. server requests

//do something if promise resovled
MyPromise.then(result =>{console.log("Well Done!")});

//do something with the reject
MyPromise.catch(error =>{console.log("Try Again!")});
