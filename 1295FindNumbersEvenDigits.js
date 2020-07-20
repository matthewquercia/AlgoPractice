/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var result = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i].toString().length % 2 === 0) result++;
    }
    
    return result;
};

console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([555,901,482,1771]));