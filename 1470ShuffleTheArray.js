/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var x = nums.slice(0, n);
    var y = nums.slice(n, nums.length);
    var result = [];

    for(let i = 0; i < n; i++){
        result.push(x[i], y[i]);
    }

    return result;
};

console.log(shuffle([2,5,1,3,4,7], 3));
console.log(shuffle([1,2,3,4,4,3,2,1], 4));

// solution

// var shuffle = function(nums, n) {
//     let answer = []
//  for (let i = 0; i < n; i++) {
   
//    answer.push(nums[i], nums[i+n])
  
//  }
//     return answer

// };