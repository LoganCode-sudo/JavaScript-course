//functional programming 

//programming approach based around the evaluation of functions. functions map input to output to produce a result.

//you can combine many basic functions to build more complex programs

//core principles:
//functions are independent from the state of the program.they only depend on the arguments passed to them.
//functions try to limit changes to the state of the program and avoid changing global values
//functions have minimal side effects in the program

//so functional programming is an approach that breaks down a problem into small, testable parts.

//functional programming includes:
//isolated functions- no dependence on the state of the program.
//pure functions- the same input always gives the same output.
//functions with limited side effects- any changes to the state of the program outside the function are carefully controlled

//functional terminology 
//callbacks - the function that are passed into another function to decide if that parameter/callback function
//first class functions- these are functions that are assinged to variables, passed into another function, or returned from another function. in Javascript all functions are first class functions
//higher order functions- theses are functions that take functions as arguments or returns a function.
//lambda- these functions are passed into another function or returned from another function

//understanding the hazards of using imperative code:
//the imperative style in programming is one that gives the computer a set of statements to perform a task.often the statements change the state of the program,e.g. updating global variables.
//on the other hand functional programing is a form of declarative programming. you tell the computer what you want done by calling a function or method.

//functional programming is not used to change things, change leads to bugs. its easier to prevent bugs knowing your functions dont change anything.

//another principal of functional programming is to always declare your dependencies explicitly (parameters). this means when a function depends on a variable or object it should be passed directly as an argument.
//by doing this the function is easier to test, you know exactly what input it takes.
//this gives you more confidence when you alter,remove, or add new code.

//below is an example of what functional programming 

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (myArr,bookName) {
let xArr = [...myArr];
  xArr.push(bookName);
  return xArr;
};

function remove (myArr,bookName) {
 let xArr = [...myArr];
  var book_index = xArr.indexOf(bookName);
  if (book_index >= 0) {
    xArr.splice(book_index, 1);
    return xArr;
    };
};

var newBook = add(bookList,"i dont know any books");
var newerBook = remove(bookList,"The Hound of the Baskervilles");
console.log(bookList);
console.log(newBook);
console.log(newerBook);

//simple array functions 
//map- is used to iterate over each item in an array.
//it takes a function as a parameter
const user =[
  {name:"logan",age:"18"},
  {name:"Raven",age:"14"},
  {name:"Mikhail",age:"24"}
];
const names = user.map(user=> user.name);
console.log(names);
//map is a pure function, it depends solely on the inputs given to it.

//you can also create your own map function
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  //use this. to reference the current array
  for(var i =0;i<this.length;i++){
    newArray.push(callback(this[i]));
  };
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
console.log(new_s);

//filter is another array function that well filters an array based on the conditions
const legalUsers = user.filter(user=>user.age >17);
console.log(legalUsers);


//you can use both map and filter together
//you must find all the values that you want to filter though 
//so the map gets all the ages from the user object
var Legal = user.map(age=>{
  return{
    age:age.age
  };//the filter then checks if the age is equal to or older than 18
}).filter(age=>{
  //if true value is stored
  return age.age>=18;
});

console.log(Legal);
console.log(user);

//slice is a method used to return a copy of certain elements of an array
//the first argument is where to start (inclucive) and the second is where to stop (exclusive)
var newArray = [1,2,3,4,5,6,7];
var sliceArray = newArray.slice(0,4);
newArray.splice(0,4);
console.log(sliceArray);
console.log(newArray);
//when wanting to remove values from an array you can use splice, but the only problem is it mutates the original array
//you can achieve the same with slice but without the global change

//concat method is used to join two arrays together
var JoinArray=newArray.concat([8,9,10,11]);
console.log(JoinArray);

//reduce iterates over each item in an array and returns a single value
//this is done by a callback function that is called on each iteration
//the callback takes four arguments
//first is the accumulator, it gets assigned the return value of the callback from the pervious iteration
//second is the current element being processed
//third is the index of that element
//fourth is the array that reduce is being called on
//in addition to the four arguments there is an extra one that takes an inital vaule for the accumulator

//below is example of using the first two arguments
//the first argument takes in a function that adds the values of all the ages of the array
//the second agrument is used as a default value for the very first iteration
const sumofAges = user.reduce((sum,user)=>sum+parseInt(user.age),0);
console.log(sumofAges);

//another way to use it
//an object can be returned containing the names as properties and the age as values
const myUsers = user.reduce((obj,user)=>{
  //the property is set as name the given the value of age
  obj[user.name] = user.age;
  return obj;
  //the second parameter is the default first iteration
},{});
console.log(myUsers);

//write a function that takes an array
//filter it so its just whole integers 
//find the square root of those values and return that array
const squareList = arr => {
  return arr = arr.filter((num)=>{
    return num>0 && num % parseInt(num)===0;
  }).map((num)=> Math.pow(num,2));
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//sort() is used to sort a integer array from smallest to biggest, but that is not the only use for it
//the () can accept a callback function that tell sort how you want things arranged

//the function below sorts the arr in decending order
function Dsend(arr){
  return arr.sort(function(a,b){
    return b-a;
  });
};
console.log(Dsend([2,1,6,4,3,5]));

//this function shows how to sort an array of letters in reverse
function reverseAlpha(arr){
  return arr.sort(function(a,b){
    //the follow can be read as:
    //if a and be are equal make no changes
    //if a is smaller than b move it up by one 
    //and finally any other outcome move down by one. 
    //this function can easily be changed to sort in alphabetical order
    //by switching the less than sign for a greater than sign 
    return a===b?0:a<b?1:-1;
  });
};
console.log(reverseAlpha(['a','b','c','d','e']));

//a side effect of using sort is that it changes the original array 
//to avoid this you can use concat on a empty array to copy all the original arrays values
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  var newArray = arr.concat();
  return newArray.sort(function(a,b){
    return a-b
  });
};
console.log(nonMutatingSort(globalArray));

//split is used to split a string into an array of strings
//it can take two types of arguments:
//delimiter, this is the ""(array of character) or " "(array of words)
//it can also accept regular expressions
var MyStr = "hello world";
var bySpace =MyStr.split(" ");
console.log(bySpace);

var OtherStr = "How2Are7You";
var byDigits = OtherStr.split(/\d/);
console.log(byDigits);

//join is used the same as split, but works in the oppsite way.it joins an array into a string
console.log(byDigits.join(' '));

//you can use the methods learned to convert a string into a url extention

//The input is a string with spaces and title-cased words
//The output is a string with the spaces between words replaced by a hyphen (-)
//The output should be all lower-cased letters
//The output should not have any spaces

function urlSlug(title) {
return title.toLowerCase().trim().split(/\s+/).join("-");
};
console.log(urlSlug(" Winter Is  Coming"));

//every is an array method used to check every index of an array to see if they pass the test
var numbs = [1,2,3,4,5,6,7];
var result = numbs.every(function(current){
  return current<5;
});
//not all the values pass the test
console.log(result);

//some is a method to check of any one of the indexs pass the test.
var results = numbs.some(function(current){
  return current<5;
});
console.log(results);

//the arity of a function is the number of arguments it requires
//currying takes a function with multiple arguments and turns it into multiple funtions with one argument each
//so its a function that has one argument that returns the next funtion with one function and so on

//normal function
function simple(a,b){
  return a+b;
};

//curried function
function curried(a){
  return function(b){
    return a+b;
  };
};

//ES6 syntax
const esCurried = a=>b=>a+b;

//curried functions are useful when you cant supply all arguments at one time.
//you can store them in variables that will hold the return function
var FuncForB = curried(3);
console.log(FuncForB);
//supply the next argument when called
console.log(FuncForB(3));

//partial is similar to curried,
//by calling the function and applying the bind prototype along with "this" you can supply arguments when called
function impart(x,y,z){
  return x+y+z;
};
var partFunc = impart.bind(this,3,4);
console.log(partFunc(3));
