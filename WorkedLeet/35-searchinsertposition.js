/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*[1,3,5,6] , 5*/
/* 2 */
var searchInsert = function (nums, target) {
  let tempindex = 0;
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  for (let index = 0; index < nums.length; index++) {
    tempindex =
      target < nums[index] && target > nums[index - 1] ? index : tempindex;
    if (target === nums[index]) {
      return index;
    }
  }
  return tempindex;
};
let answer = searchInsert([1, 3, 5, 10], 11);
console.log("answer", answer);
