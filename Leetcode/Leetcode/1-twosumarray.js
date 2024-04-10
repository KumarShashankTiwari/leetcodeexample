/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

var twoSum = function (nums, target) {
  let neededValue = {};
  for (let index = 0; index < nums.length; index++) {
    let index2 = neededValue[target - nums[index]];

    console.log(
      "start ",
      "target",
      target,
      "element",
      nums[index],
      "target-element",
      target - nums[index],
      "neededvalue",
      neededValue,
      "index",
      index,
      "  ",
      "index2",
      index2
    );
    if (index2 != undefined) {
      return [index2, index];
    } else {
      neededValue[nums[index]] = index;
    }
    console.log(
      "last ",
      "target",
      target,
      "element",
      nums[index],
      "target-element",
      target - nums[index],
      "neededvalue",
      neededValue,
      "index",
      index,
      "  ",
      "index2",
      index2,
      "\n"
    );
  }
};

let array = [2, 7, 11, 15, 3, 6, 9, 22, 41, 66, 8];
let target = 14;

let solution = twoSum(array, target);
console.log(solution);
