function telephoneCheck(str) {
  //first we need to check if the number starts with 1
  //followed by three numbers or three numbers and a space or -
  // then another three numbers.accept space and - if there is
  //and finally the number must end with four digits
  const regex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?([0-9]{3})[\s\-]?([0-9]{4})$/;
  return regex.test(str);
}
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("1 555)555-5555"));
