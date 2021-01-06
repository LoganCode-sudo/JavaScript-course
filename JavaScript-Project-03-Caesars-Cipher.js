//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  //two arrays that split the alphabet into half
  var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //turn string into array 
  var reStr = str.split('');
//loop through the string
  for (var i = 0;i<reStr.length;i++){
    //loop through first 13 letters
    for(var j = 0;j<abc.length;j++){
      //replace index with need value
      if(reStr[i] ===abc[j]){
        reStr[i] = nop[j];
      }else if(reStr[i]===nop[j]){
        reStr[i] = abc[j];
      };

    };
  };
return reStr.join('');
}
console.log(rot13("SERR PBQR PNZC"));
