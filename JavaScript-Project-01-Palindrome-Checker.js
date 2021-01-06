//Palindrome Checker
//return true if a given string is a palindrome
//a palindrome is a word or sentence that is spelled the same way both forward and backwards
//ignore punctuation, case, spacing and symbols

function palindrome(str) {
  //we first clean the str and we change the type to an array
  var cleanStr = str.toLowerCase().replace(/[\W_]/g, "").split('');
  //we do the same thing here but reverse the str
  var reverseStr = str.toLowerCase().replace(/[\W_]/g, "").split('').reverse();

  //we then compare the two, but also turn it back to a string so that we can use the ===
  if(cleanStr.join(' ') === reverseStr.join(' ')){
    return true;
  }else{
    return false;
  };
};

console.log(palindrome("nope"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("2A3*3a2"));
console.log(palindrome("My age is 0, 0 si ega ym."));
