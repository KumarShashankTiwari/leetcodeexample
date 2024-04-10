function largestOfFour(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    for (let j = 0; j < arr[i].length; j++) {
      total = arr[i][j] + total;
    }
    console.log(total);
    temp.push(total);
  }

  const max = Math.max(...temp);
  console.log("max", max);
  const index = temp.indexOf(max);
  console.log(index);
  console.log("Item", arr[index]);
  return arr[index];
}

largestOfFour([
  [4, 5, 1, 3],
  [1000, 1001, 857, 1],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
]);
