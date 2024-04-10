//Given the array arr, iterate through and remove each element starting from 
//the first element (the 0 index) until the function func returns true when 
//the iterated element is passed through it.
//Then return the rest of the array once the condition is satisfied,
//otherwise, arr should be returned as an empty array.

//dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
//dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

function dropElements(arr, func) {
    // Find the index of the first element that satisfies the function
    const index = arr.findIndex(func);
    
    // If no element satisfies the function, return an empty array
    if (index === -1) {
      return [];
    }
    
    // Otherwise, return the rest of the array
    return arr.slice(index);
  }


dropElements([1, 2, 3], function(n) {return n < 3; });