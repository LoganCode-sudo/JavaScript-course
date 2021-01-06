//Convert the given number into a roman numeral.
function convertToRoman(num) {
//variables for the numbers,their roman equals and the return string
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var reRoman ='';

//look through the numbers 
    for(var i =0;i<numbers.length;i++){
        //find the index that has the closest value
        while(numbers[i] <= num){
            //add the roman equal to the return str
            reRoman += numeral[i];
            //substract the index value from the test value
            num-=numbers[i];
        }
    }
    return reRoman;
}
console.log(convertToRoman(36));
