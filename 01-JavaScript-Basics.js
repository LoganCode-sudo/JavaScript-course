console.log("hello");
//this is a comment

// playing with strings
var a;
var MyName = "Logan";
var MyLength = MyName.length;
console.log(typeof a);
console.log(MyLength);
console.log(MyName[0]);

//Arrays and multi-dimensional arrays
var Arr = ["Logan", 18 , 5.9];
var MultiArr  = [["Logan", 18],["Coghill", 5.9]];

//using index principal to navigate through array
console.log(Arr[2])
console.log (MultiArr[1][0]);

//specific values can be changed without the rest of the array being affected
Arr[2] = 6.0;
console.log(Arr);

// you can use the .push to add values to the end of the array
Arr.push(7);
console.log(Arr);

//.pop can be used to remove the last index of an array
Arr.pop();
console.log(Arr);

// *** works with multi-dimensional arrays as well *** \\

//.shift is the same as .pop but removes the first value 
Arr.shift();
console.log(Arr);

//.unshift works the same as .push but adds to the beginning of the array
Arr.unshift("Logan");
console.log(Arr);

//Functions are code blocks that can be reused
function MyFunc(){
  //when a function comes across a return it stops and returns the outcome
  return "this is the function output.";
};
//assign function to a variable
var Func = MyFunc();
console.log(Func);


//functions can have parameters "values that you don't know yet"
//return sends the value of the function out
function MyNameFunc(val1, val2){
  return val1 + val2;
};
//parameters are given value when the function is called 
console.log(MyNameFunc("My name is ","Logan!"));

//variables defined within a function is known as its local variable
function MyVarFunc (){
  var Age = 18;
  return Age;
};
//this means the variable only exists while the function is in use
console.log(MyVarFunc());

//boolean is a data type that returns true/false
var MyBoolean = true;
console.log(MyBoolean);

//if statements 
var Age = 18;

if (Age == 18){
  console.log("Old Enough!")
}
//works with boolean conditions "only if conditions are true, code will be executed." 
if (Age >= 21){
  console.log("Old enough to drink!");
};
//the above wont be in the console because the condition is not met.
// *** when comparing different data types one must be converted, this is known as type coerion *** \\

//Symbols:
// = is assignment 
// == comparison with type coerion 
// === strict comparison without coerion 
// != means "Not Equal" when you want false outcomes
// > greater than "left value has to be more than right value"
// >= greater than or equal to "includes right value in range"
// < less than "left value must be smaller than right value"
// <= less than or equal to "includes right value"
// && allows you to check more than one condition "both conditions must be true"
// ||either or "more than one condition, but only one has to be true"

//else statements
if (Age >= 21){
  console.log("you can drink!");
}else{
  console.log("you are to young to drink!")
};
//if the if statement is not met the first code block will be skipped and the else block will be ran
// *** if statements run in a linear fashion, so the order of the chain is important *** \\

//Switch statement 
switch(Age){
  case 15:
    console.log("you are very under age");
    break;
  case 16:
    console.log("you are still under age");
    break;
  case 17:
    console.log("almost old enough");
    break;
  case 18:
    console.log("You finally old enough");
};
//it can also be written to make multiple cases do the same thing
switch (Age){
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6-17:
    console.log("you are to young");
    break;
  case 18:
    console.log("you older now");
};

//objects are similar to arrays but instead of indexes you use properties to access and modify data.
//properties can be named unlike indexes which are numeric
//Objects store data, objects store information
var Person = {
  "Name":"Logan",
  "Last Name":"Coghill",
  "Age":18,
  "Legal":"true"
};
//access with dot notation
var MyAge = Person.Age;
console.log(MyAge);
//for properties with more than one word names you can use bracket notation
var MyLastName = Person["Last Name"];
console.log(MyLastName);

//create a object with two properties with prefixes.
//create a function that applies a prefix to a parameter.
//call a property from your object by using the function.

var Monster = {
  "MonsterName":"BigFoot",
  "MonsterThreat":6.7
};

function PrefixMon(str){
  var prefix = "Monster";
  return prefix+str;
};

var test1 = PrefixMon("Name");
var test2 = PrefixMon("Threat");
console.log(Monster[test1]);
console.log(Monster[test2]);
//the property name is not defined, it is created by the function and displayed by use of the variable that calls the function

//you can change object values using both dot and bracket notation 
Monster.MonsterName = "Godzilla";
Monster["MonsterThreat"] = 7.1;
console.log(Monster);

//delete can be used to remove properties
delete Monster.MonsterThreat;
console.log(Monster);

//if you want to check if an object has a property you can use .hasOwnProperty, it returns a boolean 
console.log(Monster.hasOwnProperty("MonsterName"));
console.log(Monster.hasOwnProperty("MonsterThreat"));

//objects are very flexible, this means they can contain a lot of different data-types

var Albums = {
  "Name":"Chris Webby",
  "Albums":["Wednesday",
           "next Wednesday",
           "Wednesday after next"],
  "sales":function() {return "a lot";}
};

console.log(Albums.Albums[2]);
console.log(Albums.sales());
// *** be careful of the call order, must be based on the order of creation *** \\

//while loop 
var CountArr = [];
var i = 0;

while (i<=5){
  CountArr.push(i);
  i++;
}
//while loop loops until the condition returns false
console.log(CountArr);

//for loop runs for a specific number of times
for(var i =0 ;i<=5;i++){
  CountArr.pop(i);
}
//there are three parts to a for loop
//initialization: used to define the counter
//condition: as long as condition is true the loop will run
//final-expression: executes every-time a loop is complete
console.log(CountArr);

//nested for loops can also be used with multi-dimensional arrays
var ForArr = [[1,2],[3,4],[5,6]];

for(var i =0;i<ForArr.length;i++){
  for(var x =0;x<ForArr[i].length;x++){
    console.log(ForArr[i][x]);
  }
}
//the first for loop gives access the first layer of the array
//the second for loop gives access to the values of the inner arrays
//each index values are then displayed one by one

//do while loop 
//similar to while loop but condition comes at the end of the loop 
//meaning the loop will always run at least once
i = 0;

do{
  CountArr.push(i);
  i++;
}while(i>5);
//even if our condition is false the do while runs once 
console.log(CountArr);

//Math.random generates a random decimal number between 0 'included' - 1 'exclusive' 
function Fraction(){
  return Math.random();
};
console.log(Fraction());

//parseInt covets a string into a integer 
var Num = "111";
console.log(parseInt(Num));
//if you add another argument its known as a radix or base
console.log(parseInt(Num,2));
//so 111 with a base of 2 means binary, it reads the number as binary

//the conditioned operator, also used as a one-lined if statement 
//it has three parts:
//condition,if-true,if-false
function AorB(a,b){
  return a>b? "A is Bigger":"B is bigger"
};
console.log(AorB(2,1));
console.log(AorB(3,4));
//it can also chain conditions 
function AreEqual(A,B){
  return (A===B)? "theses two are equal":(A>B)? "A is Bigger":"B is Bigger";
};
console.log(AreEqual(2,2));
//use the above with care, to much will make your code difficult to read
