/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var largest = Math.max(...candies);
    var result = [];

    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= largest){
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));

// solution

// var kidsWithCandies = function(candies, extraCandies) {
//     let max = Math.max(...candies)
//     return candies.map(candy => candy + extraCandies >= max)
// };