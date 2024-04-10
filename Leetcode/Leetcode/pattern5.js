/* WAP Pattern Hollow Triangle Star Pattern

    *
   ***
  *****
 *******
**********

*/

var pattern5 = function (val, number) {
  let stringval = "";

  for (let index = 0; index < number; index++) {
    for (let indexj = 0; indexj < number - (index + 1); indexj++) {
      stringval += " ";
    }
    for (let indexk = 0; indexk <= index; indexk++) {
      stringval += "*";
    }
    for (let indexl = 1; indexl <= index; indexl++) {
      stringval += "*";
    }
    stringval += "\n";
  }
  return stringval;
};
console.log(pattern5("*", 5));
