/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var result = [];
    var count = 0;

    for(let i = 0; i < nums.length; i++){
        count = 0;
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
                if(nums[i] > nums[j]){
                    count++;
                }
            }
        }
        result.push(count);
    }
    
    return result;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
console.log(smallerNumbersThanCurrent([6,5,4,8]));
console.log(smallerNumbersThanCurrent([7,7,7,7]));