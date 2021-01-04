//basic Algorithm scripting 

//write a function to turns celsius to fahrenheit 
function convert (celsuis){
  var fahrenheit = celsuis *9/5+32;
  return fahrenheit;
};
console.log(convert(32));

//write a function that reverses a given string 
function reverseString(str){
  //.split allows you to convert a string into an array 
  //no space between .split("") means array of characters
  let Arr = str.split("");
  Arr.reverse();
  //.join coverts it back to a string
  let i = Arr.join("");
  return i;
};
console.log(reverseString("hello my name is logan"));

//write a function that finds the longest word within a string
//return should be the number of characters 
function LongestWord(str1){
   //space between .split(" ") means array of words
  let Arr = str1.split(" ");
  //return counter
  var i=0;
  
  for(var a = 0; i<Arr.length;i++){
    if(Arr[a].length>i){
      i= Arr[a].length;
    };
  };
  return i;
};
console.log(LongestWord("the lazy fox was stupid!"));

//write a function that returns a array that consists of the largest values from a different array
function LargestOf(arr){
  let Arr = [];
  for (var i = 0;i<arr.length;i++){
    Arr.push(Math.max(...arr[i]));
  };
  return Arr;
};
console.log(LargestOf([[1,2],[3,4],[5,6],[7,8]]));

//check if a string ends with the target 
function comfirmed(str,target){
  var tar = target.length;
  var myStr = str.length;
  
  return str.slice(myStr-tar)==target;
};
console.log(comfirmed("can you find logan","logan"));

//write a function that can repeat a string for a number of times 
function Repeater(str,num){
  let MyStr = "";
  for (let i = 0;i<num;i++){
    MyStr+=str;
  };
  return MyStr;
};
console.log(Repeater("Logan",3));

//shorten a string so that it only has a given number of letters
//be sure to add ... to the return str
function Shorten(Str,num){
  if (Str.length>num){
    var myStr = Str.slice(Str,num);
    myStr+="...";
    return myStr;
  }else{
    return Str;
  };
};
console.log(Shorten("this string is to long!",11));

//write a function that checks if a value is a boolean 
function valueType (val){
  if(val == true | val == false){
    return true;
  }else{
    return false;
  };
};
var val = true;
console.log(valueType(val));

//write a function that takes a string and capitalizes every first letter of each word 
function Upper(str){
  var myArr = str.toLowerCase().split(" ");
  let result = myArr.map(function(val){
    return val.replace(val.charAt(0),val.charAt(0).toUpperCase());
  });
  return result.join(" ");
};
console.log(Upper("this is a string"));

//you are given two arrays and an index. copy the second array into the first array at the given idex
function copyArr(Arr1,Arr2,Index){
  let MyArr = Arr2.slice(0,Arr2.length);
  
  for(var i = 0; i<Arr1.length;i++){
    MyArr.splice(Index,0,Arr1[i]);
    Index++;
  }
  return MyArr;
};
console.log(copyArr([1,3,4],[5,6,7],2));

//write a function that filters out the false values within an array 
function removeBoo(arr){
  return arr.filter(Boolean);
};
console.log(removeBoo([1,2,false,3,4,true,false]));

//write a function that shows which index to add a number to an array
function getIndex(Arr,num){
  Arr.sort();
  var index = 0;
  
  for (let i = 0;i<Arr.length;i++){
    if (num>Arr[i]){
      index++;
    };
  };
  return index;
};
console.log(getIndex([1,2,4,5],3));

//write a function that splits an array into a size,then return them in a two-dimensional array
function ArrayIngroups(Arr,Size){
  var MyArr = [];
  
  for (var i =0;i<Arr.length;i+=Size){
    MyArr.push(Arr.slice(i,i+Size));
  };
  return MyArr;
};
console.log(ArrayIngroups([1,2,3,4,5,6],2));
