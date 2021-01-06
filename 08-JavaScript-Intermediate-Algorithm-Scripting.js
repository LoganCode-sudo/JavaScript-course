/intermediate Algorithm scripting 

//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {
  //first find the highest and lowest values within the array
  var low = Math.min(arr[0],arr[1]);
  var high = Math.max(arr[0],arr[1]);
  //define a counter
  var sum=0;
  //loop from lowest to highest 
  for (var i = low;i<=high;i++){
  sum+=i;
  };
return sum;
};
console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
console.log(sumAll([20, 5]));

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
function diffArray(arr1, arr2) {
  var newArr = [];
  var func = (one,two)=>{
    for(var i = 0;i <one.length;i++){
      //-1 means if it returns false
      if(two.indexOf(one[i])=== -1){
      newArr.push(one[i])
      }
    };
  };
//the function is ran twice,once normal and once in reverse order so that we cover all values within both arrays
  func(arr2,arr1);
  func(arr1,arr2);
  return newArr;
};
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  //You need to work with arguments as if it was a regular array.
  //the args variable does this.
  //all extra arguments will be put into an array
  var args = Array.prototype.slice.call(arguments);
//you then check if the the arguments array values exsist within the actual array and delete it if it does
  for(var i = 0;i<arr.length;i++){
    for(var j = 0;j<args.length;j++){
      if(arr[i]===args[j]){
        delete arr[i];
      };
    };
  };
//filter array to get rid of empty values
  return arr.filter(Boolean);
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
//create an array that stores all the source properties
 var srcKeys = Object.keys(source);

//filter through array values so we have access to the objects
//filter also return the index that passes the tests
 return collection.filter(function(obj){
   //then use every to see if--
   return srcKeys.every(function(key){
     //--the object has the property we looking for 
     // and if it does have the property the value must be the same
     return obj.hasOwnProperty(key) && obj[key] === source[key];
   });
 });
};
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  //the split reg expression splits at whitespace characters OR _ OR if a letter is followed by a uppercase letter
  //then join into one string but with - in between each index 
  //and finally make it lower case 
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}
console.log(spinalCase('ThisIs_Spinal Tap'));

//Pig Latin is a way of altering English Words. The rules are as follows:
//- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
//- If a word begins with a vowel, just add "way" at the end.
function translatePigLatin(str) {
  //return variable and regular expression
  var pigLatin= str.split('');
  var regEx = /^[^aeiou]+/i;
  
  //see if the word starts with a consonant/cluster
  if(regEx.test(str) == true){
    //store the constonants in an array
    var conson = str.match(regEx)[0].split('');
    //add the consonantand 'ay' to the end of the string
    pigLatin.push(conson);
    pigLatin.push("ay");
    //for loop that removes the consonant from from the beginning
    for(var i = 0;i<conson.length;i++){
      pigLatin.shift(conson[i]);
    };
    }else{
      //if the string doesnt pass the regex test
      pigLatin.push('way')
    };
    //return pigLatin but as a string and replace the "," made by the multidimensional array
     return pigLatin.toString().replace(/,/g,'');
  };
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));

//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//Note:Preserve the case of the first character in the original word when you are replacing it.
function myReplace(str, before, after) {
  //regex to check for uppercase
  var up = /^[A-Z]/;
  
  //if before is uppercase
    if(up.test(before)){
      //make after's first letter capital
     after = after[0].toUpperCase() + after.substring(1);
    }else{
      //else make it lowercase
      after = after[0].toLowerCase() + after.substring(1);
    };
  
    //replace before with after
  return str.replace(before,after);
};
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  var newArr = []
var funcSearch = function(char){
  switch(char){
    case "A":
    newArr.push(["A","T"]);
    break;
    case "T":
    newArr.push(["T","A"]);
    break;
    case "G":
    newArr.push(["G","C"]);
    break;
    case "C":
    newArr.push(["C","G"]);
    break;
  };
  };

  for(var i = 0;i<str.split('').length;i++){
      funcSearch(str[i])
  };
  return newArr;
};
console.log(pairElement("ATCAG"));
console.log(pairElement("GCG"));

//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.
//.charCodeAt() gives you the ascii value of defined index
//.fromCharCode() converts ascii value back to character
function fearNotLetter(str) {
  for (var i = 1;i<str.length;i++){
    if(str.charCodeAt(i)-str.charCodeAt(i-1)>1){
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    };
  };
};
console.log(fearNotLetter("abce"));

//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
function uniteUnique(arr) {
  var arg = [...arguments]
  var newArr = [];

  for(var i = 0;i<arg.length;i++){
    for(var j = 0;j<arg[i].length;j++){
      if(!newArr.includes(arg[i][j])){
        newArr.push(arg[i][j]);
      };
    };
  };
  
  return newArr;
};
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  //arrays for: characters being changed, what they being changed to and the string as a character array.
var charArr = ["&","<",">","\'","\""];
var charHtml = ["&amp;","&lt;","&gt;","&apos;","&quot;"];
var charStr = str.split("");
  //for loop for the string character array
  for(var i = 0;i<charStr.length;i++){
    //for loop to find the characters that need to be changed
    for(var j = 0;j<charArr.length;j++){
      //if the character string matches with the character we need 
      if(charStr[i] ===charArr[j]){
        //change that character to the html entites
        charStr[i] =charHtml[j];
      };
    };
  };
  //return the arr but covert it back to a string
  return charStr.join('');
};
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
function sumFibs(num) {
  //variables for current, previous and result numbers
  var curr=1,pre=0,result=0;
  
  //while loop makes sure we dont go pass the given value
  while(curr<=num){
    //to check if current is even or odd
    if(curr%2 !==0){
      //add current to the return value
      result+=curr;
    };
    //the add pre to curr to get next value 
    curr+=pre;
    //get the old current and make it the previous
    pre= curr-pre;
  };
  //return the result
return result;
};
console.log(sumFibs(1000));

//A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
function sumPrimes(num) {
  //return sum
var sum = 0;
  //variable function that tests to see if value passed is a prime
 var checkPrime =(i)=>{
  for (var k = 2; k < i ; k++){
   if (i % k === 0){
    return false;
   };
  };
  return true;
  };
  //for loop that checks if number is a prime and if it is add it to sum
  for(var i =2;i<=num;i++){
    if(checkPrime(i)){
      sum+=i;
    }
  };
  //return sum
  return sum;
}
console.log(sumPrimes(977));

//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
function smallestCommons(arr) {
  
  //variables for min, max and return values 
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var returnVal = min;
  
  //recursion to find the greatest comman divisor
  let gcd= (a,b)=> {
    if (b == 0) {
        return a;
    }return gcd(b, a % b);
  };
  
  //apply formula for LCM
  let lcm = (a,b)=>(a*b)/gcd(a,b);
  
  //while loop to find LCM between the range of min and max
  while(min<max){
    returnVal = lcm(returnVal,++min)
  };
  
return returnVal;
};
console.log(smallestCommons([1,5]));

//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
 let times = arr.length;
  //for loop to iterate through array elements
 for(var i = 0;i<times;i++){
 //if array index pass test break the loop
   if(func(arr[0])){
     break;
   }else{
     //else remove that element
     arr.shift();
   };
 };
 return arr;
};
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));

//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  var newArr =[];

  //create a function to add values thats not an array to the new array
  var func = function(x){
    if(!Array.isArray(x)){
      newArr.push(x);
    }else{
      //if it is an array use recursion to flatten it 
      for(var a in x){
        func(x[a]);
      };
    };
  };
  //run it for each index in the array
  arr.forEach(func);
  return newArr;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));

//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.
function binaryAgent(str) {
  //first we split the binary into the different codes
  //then we use map to convert each binary char into real characters
  //and finally join the string together
  return str.split(' ').map(x=>String.fromCharCode(parseInt(x, 2))).join("");
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
//In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
//Remember, you can access object properties through either dot notation or [] notation.
function truthCheck(collection, pre) {
  return collection.every(obj=>obj[pre]);
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//Calling this returned function with a single argument will then return the sum:
//var sumTwoAnd = addTogether(2);
//sumTwoAnd(3) returns 5.
//If either argument isn't a valid number, return undefined.
function addTogether() {
  //function to check if value passed is a number
  var checkNum = function(num){
    if(typeof num !== 'number'){
      return undefined;
    }else{
      return num;
    };
  };

  //check if there is two parameters
  if(arguments.length > 1){
    //check both values 
    var a,b;
    a = checkNum(arguments[0]);
    b = checkNum(arguments[1]);
    //deal with checkNum outcomes, either add values or return undefined
    if(a === undefined ||b === undefined){
      return undefined;
    }else{
      return a+b
    };

  }else{//if only one parameter
    var c = arguments[0];

    //return a curried function
    if(checkNum(c)){
      return function(d){
        if(c === undefined || checkNum(d) === undefined){
          return undefined;
        }else{
          return c+d;
        };
      };
    }
  };
};
console.log(addTogether(2,3));
console.log(addTogether(5)(7));

//make a person constructor.
//it takes one parameter (string of full name)
//you should have getters and setters for name,surname,and fullname.
var Person = function(firstAndLast) {
  var fullName = firstAndLast;
 this.getFullName = function() {
    return fullName;
  };

  this.getFirstName =function(){
    return fullName.split(' ')[0];
  };

  this.getLastName =function(){
    return fullName.split(' ')[1];
  }

  this.setFirstName = function(name){
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(surname){
    fullName = fullName.split(" ")[0] + " " + surname;
  };

  this.setFullName = function(full){
    fullName = full;
  };
};
var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.getLastName());

//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//You can read about orbital periods on Wikipedia.
//The values should be rounded to the nearest whole number. The body being orbited is Earth.
//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(({name,avgAlt})=>{
    const earth = earthRadius + avgAlt;
    const  orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return {name,orbitalPeriod}
  });
}
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
