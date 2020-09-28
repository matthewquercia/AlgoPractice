/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b)=>{ return a - b; })
    var curr = arr[1] - arr[0];
    
    for(let i = 1; i < arr.length; i++){
        if(i+1 < arr.length){
            if(arr[i+1] - arr[i] === curr){
                curr = arr[i+1] - arr[i];
            } else {
                return false;
            }
        }
    }
    return true;
};


console.log(canMakeArithmeticProgression([3,5,1]));
console.log(canMakeArithmeticProgression([1,2,4]));