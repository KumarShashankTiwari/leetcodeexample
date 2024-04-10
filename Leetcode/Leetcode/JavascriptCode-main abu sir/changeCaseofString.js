//Input a string and converts upper case letters to lower and vice versa
/*
Test Data:
console.log(swapcase('AaBbc'));
"aAbBC"

*/
let str = "Hello World";

let convertedStr = str.replace(/[a-z]/gi, function(char) {
  return (/[A-Z]/.test(char)) ? char.toLowerCase() : char.toUpperCase();
});


// 2nd method

function cases(str){
 let letters= str.split('');
 let newArray =[];

 for(let letter of letters){
  if(letter === letter.toUpperCase()){
    newArray.push(letter.toLowerCase());
  } else {
    newArray.push(letter.toUpperCase());
  }
 }
 return newArray.join('');
}
