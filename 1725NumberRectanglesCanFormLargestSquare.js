/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let obj = {};
    for(let i = 0; i < rectangles.length; i++){
        if(obj.hasOwnProperty(Math.min(...rectangles[i]))) obj[Math.min(...rectangles[i])]++;
        else obj[Math.min(...rectangles[i])] = 1;
    }
    return obj[Object.keys(obj).reduce((a, b) => a > b ? a : b)];
};

console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]));
console.log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]]));
console.log(countGoodRectangles([[5,8],[3,9],[3,12]]));