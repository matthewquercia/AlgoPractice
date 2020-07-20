/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    var target = [];

    for(let i = 0; i < nums.length; i++){
        if(target[index[i] !== null]){
            target[index[i]] = nums[i];
        } else {
            target.splice(index[i], 0, nums[i]);
        }
    }


    return target;
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));
console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0]));
console.log(createTargetArray([1], [0]));


// solution

// var createTargetArray = function(nums, index) {
    
//     let returnArr=[];
     
//      nums.forEach((eachValue,i)=>{       
//          returnArr.splice(index[i],0,eachValue);
//      })
//      return returnArr;
//  };