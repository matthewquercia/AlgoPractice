/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let total = arr.reduce((a, b)=> {return a + b}, 0);

    if(arr.length > 2){
        for(let i = 3; i <= arr.length; i+=2){
            for(let j = 0; j + i <= arr.length; j++){
                total += arr.slice(j, i + j).reduce((a, b) => {return a + b}, 0);
            }
        }
    }
    
    return total;
};