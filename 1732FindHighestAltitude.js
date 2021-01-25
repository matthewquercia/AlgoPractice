/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let total = 0, max = 0;
    for(let i = 0; i < gain.length; i++){
        total += gain[i];
        if(total > max) max = total;
    }
    return max;
};


console.log(largestAltitude([-5,1,5,0,-7]));
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));