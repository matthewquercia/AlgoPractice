/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {    
    var nTarget = target.sort((a, b)=>{
        return a - b;
    });
    var nArr = arr.sort((a, b)=>{
        return a - b;
    });
    
    if(nTarget.join('') === nArr.join('')) return true;
    else return false;
};

console.log(canBeEqual([1,2,3,4], [2,4,1,3]));
console.log(canBeEqual([3,7,9], [3,7,11]));