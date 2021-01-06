//Regular expressions 
//is used to modify and alter parts of strings 

//you can search a string for a specific word 
var MyStr = "my name is Logan";
var MyName = /Logan/;
//watch the spelling and capital letters
var YourName = /logan/;
//test the string to see if MyName exsist within 
var IsMyName  = MyName.test(MyStr);
var NotMyName = YourName.test(MyStr);

console.log(IsMyName);
console.log(NotMyName);

//by using the or operator you can search for multiple words
var TwoLetterWords = /my|is/;
var TwoLetters = TwoLetterWords.test(MyStr);
console.log(TwoLetters);

//MyName still exsist, the TwoLetterWords will return false because it was taken out 
MyStr = "Name:Logan";
console.log(MyName.test(MyStr));
console.log(TwoLetterWords.test(MyStr));

//by adding the i flag you can ingnore letter-case 
YourName = /logan/i;
//still returns true, no longer case sensitive
console.log(YourName.test(MyStr));

//seen above the .test method proves the string exsists
//you can extract the word by using the .match method
MyStr = "this is my new string";
var ItsNew = /NEW/i;

var TheWord = MyStr.match(ItsNew);
console.log(TheWord);

// *** please note the syntax for both test and match *** \\

// you can search or extract more than once using the g flag
MyStr = "my name is logan,and logan is logan";
var logans = /logan/ig;
//returns all three logans
console.log(MyStr.match(logans));

//wildcard character works as a place holder for any character
MyStr = "fun in the sun with a gun";
var UnCollector = /.un/ig;
console.log(MyStr.match(UnCollector));

//you can also create a list of acceptable characters
MyStr = "the big bag of bugs are gone";
var MyBigBugs = /b[i,u]g./ig;
console.log(MyStr.match(MyBigBugs));

// you can also set a range with the same syntax
MyBigBugs = /b[a-z]g./ig;
console.log(MyStr.match(MyBigBugs));

//with use of the ^ to can set what values you dont want, all other characters are accepted 'including whitespaces and special characters'
MyBigBugs = /b[^a]g./ig;
console.log(MyStr.match(MyBigBugs));

//for repeating characters you can use the + or *
// + one or more 
// * zero or more 
MyStr = "cccccc";
var Aah = /c+/i;
var Char = /c*/i;
console.log(MyStr.match(Aah));
console.log(MyStr.match(Char));

//if you want to cut the string at the first e the below wont work because regular expressions are greedy
MyStr = "theeeeee";
var TheEnd = /t[a-z]*e/;
console.log(MyStr.match(TheEnd));

//with the ? symbol, it means 'when you come to this letter return match'
TheEnd = /t[a-z]*?e/;
console.log(MyStr.match(TheEnd));

//when you use the ^ outside of [] it tells the regular expression to check the beginning of the string 
MyStr = "this is the beginning";
var MyStart = /^this/;
console.log(MyStr.match(MyStart));

// the $ can be used to check the end of the string 
var MyEnd = /beginning$/;
console.log(MyStr.match(MyEnd));

//there are afew shortcuts for building patterns 
// - \w is equal to [A-Za-z0-9_], so all upper and lower case letters, all numbers and underscores 
// - \W is [^A-Za-z0-9_], which negates all those characters 
// - \d is for [0-9] 
// - \D is [^0-9], so it negates numbers
// - \s is for whitespaces, also includes carriage return,tabs,form feed and newlines
// - \S everything but whitespaces

//username challenge 
//write a regular expression for the following username:
//can only use alpha-numeric characters
//numbers need to be at end of username, 0 or more 
//must be two or more characters, two character usernames must be alphbetic

var UserName = "LoganTheProgram007";

var CheckUserName = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
//start with letter, followed by two or more numbers | one or more letters and zero or more numbers. $ effects () 
console.log(CheckUserName.test(UserName));

//you can set a repeat range using {}
//fist number is start of range
//second number is end of range or if left out allows any maximun
MyStr = "aaaaaah!";
var CountA = /a{2,6}h!/i;
console.log(MyStr.match(CountA));

//using ? after a character means the character is optional
MyStr = "aaaaaa!";
var option = /aaaaaah?!/i;
//still returns the string because h is optional
console.log(MyStr.match(option));

//lookaheads is a way to see if characters exsist futher in the string 
var lookAhead = /a+(?=h)/;
//returns null because there is no h in the string 
console.log(MyStr.match(lookAhead));

//returns all the a's because h exsists futher in the string
MyStr = "ah!";
console.log(MyStr.match(lookAhead));

//negitive lookaheads works the opposite, only returns character if lookahead doesnt exsist 
var DontWant = /a+(?!h)/i;
//returns null because h does exsist
console.log(MyStr.match(DontWant));

//you can search for groups of characters use ()
MyStr = "pumpkin or penguin"
var WhichOne = /p(umpk|engu)in/g;
console.log(MyStr.match(WhichOne));
