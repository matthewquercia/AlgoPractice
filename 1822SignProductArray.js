/**
* @param {number[]} nums
* @return {number}
*/
var arraySign = function(nums) {
    let x = nums.reduce((a,b) => a * b);

    if(x > 0) return 1;
    else if (x < 0) return -1;
    else return 0;
};

console.log(arraySign([-1,-2,-3,-4,3,2,1]));
console.log(arraySign([1,5,0,2,-3]));
