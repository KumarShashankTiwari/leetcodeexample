// *
// **
// ***
// ****
// *****

var pattern = function (val, number) {
  let stringval = "";

  for (let index = 0; index < number; index++) {
    for (let indexj = 0; indexj <= index; indexj++) {
      // console.log(`${index} ${indexj}`);
      stringval += val;
    }
    stringval += "\n";
  }
  console.log(stringval);
};
pattern("*", 5);
