/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var result = [nums[0]];
    var currentTotal = 0;

    for(let i = 1; i < nums.length; i++){
        currentTotal = result[result.length - 1] + nums[i]
        result.push(currentTotal);
    }

    return result;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));


// GOOD SOLUTION

// var runningSum = function(nums) {
//     let result = []
//     for(let i = 0; i < nums.length; i++){
//         if(i === 0){
//             result.push(nums[i])
//         }else{
//             result.push(result[i-1]+nums[i])
//         }
//     }
//     return result
// };