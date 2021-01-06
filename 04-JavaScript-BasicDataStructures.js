//basic data structures

//array refresher-------------------------------------------------------------------------------------
//one-dimensional has only level arr=[1,2,3,4]; 
//multi-dimensional is arrays within arrays arr= [[1,2],[3,4],[5,6]];
//you can access arrays using bracket notation arr[0] = 0;
//unshift adds a value to the beginning of the array 
//push adds a value to the end of the array
//pop removes the last value of the array 
//shift removes from the beginning
//spread operator is used to pack and unpack an array, useful for combining arrays
//----------------------------------------------------------------------------------------------------

//.slice
//the first two parameters creates a range first being included, second is excluded 
var arr = [1,2,3,4,5];
var val = arr.slice(1,2);
console.log(val);

//you can use .indexOf to find the index of a value 
var val = arr.indexOf(4);
//returns 3 because thats the index of 4
console.log(val);

//when reading multi-dimensional watch where each [] starts and ends
arr = [[1,2,[3,4,[5,6,[7,8]]]]];
val = arr[0][2][2][2][0];
console.log(val);

//objects refresher-----------------------------------------------------------------------------------
//they are like arrays but with properties instead of indexs
//can be accessed using dot and bracket notation
//they can nest other objects, arrays and functions. NOTE: makes them more complicated
//delete is used to remove values from objects 
//you can check if a property exsists using hasOwnProperty() 
//for loop can be used to iterate through arrays and objects 
//you can store all object properties in an array using var a = Object.keys(Obj)
//----------------------------------------------------------------------------------------------------
