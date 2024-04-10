// Given an array (or string), the task is to reverse the array/string.
// Examples :
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

const reverseSting = (array) => {
  let stringval = array.split();
  let temp = [];
  // let temparray;
  console.log("array", array);
  for (let index = array.length - 1; index >= 0; index--) {
    // console.log(`${array[index]}`);
    temp.push(array[index]);
  }
  return temp.join().replace(",", "");
};

let arr = "How are you.";
let val = reverseSting(arr);
console.log("reverseval", val);

// const sortSting = (array) => {
//   let temp = null;
//   // let temparray;
//   console.log("array", array);
//   for (let index = 0; index < array.length; index++) {
//     // console.log(`${array[index]} ${array[index + 1]}`);
//     if (array[index] > array[index + 1]) {
//       temp = array[index];
//       array[index] = array[index + 1];
//       array[index + 1] = temp;
//     }
//   }

//   return array;
// };
