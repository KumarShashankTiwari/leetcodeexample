/* WAP Hollow Pyramid Star Pattern

    *
   *  *
  *    *
 *      *
***** ****

*/

var pattern8 = function (val, number) {
  let stringval = "";

  for (let index = 0; index < number; index++) {
    for (let indexj = 0; indexj < number - (index + 1); indexj++) {
      stringval += " ";
    }

    for (let indexk = 0; indexk <= index; indexk++) {
      if (indexk === index || indexk === number - 1) {
        stringval += "*";
      }
    }
    // for (let indexl = 1; indexl <= index; indexl++) {
    //   if (indexl === index) {
    //     stringval += "*";
    //   }
    // }
    stringval += "\n";
  }
  return stringval;
};
console.log(pattern8("*", 5));
