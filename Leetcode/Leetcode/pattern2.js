/* WAP Pattern Downward Triangle Star Pattern

*****
****
***
**
*/

var pattern2 = function (val, number) {
  let stringval = "";

  for (let index = 0; index < number; index++) {
    for (let indexj = 0; indexj < number - index; indexj++) {
      stringval += "*";
    }
    stringval += "\n";
  }
  return stringval;
};
console.log(pattern2("*", 5));
