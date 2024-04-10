/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    let globalmaximumsum = 0;
    let maximumsumarraytemp = {};
    /*maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);*/
    for (let newindex = index; newindex < nums.length; newindex++) {
      let currentsum = 0;
      let locallmaximumsum = 0;
      let localmaximumsumarray = [];
      currentsum = nums[newindex] + currentsum;
      locallmaximumsum = currentsum;
      console.log(
        "index",
        index,
        "index1",
        newindex,
        "locallmaximumsum",
        locallmaximumsum,
        "currentsum",
        currentsum
      );
      localmaximumsumarray.push(nums[index]);
      if (locallmaximumsum > currentsum) {
        maximumsumarraytemp[index] = localmaximumsumarray;
        globalmaximumsum = locallmaximumsum;
        return;
      }
    }
    console.log("globalmaximumsum", globalmaximumsum);
    console.log("maximumsumarraytemp", maximumsumarraytemp);

    // currentsum = nums[index] + nums[index + 1];
  }
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

/*iterations */
