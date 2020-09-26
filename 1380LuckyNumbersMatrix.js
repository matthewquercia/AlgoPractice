/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {

    var luckyNum = [];

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] <= Math.min(...matrix[i])){
                var temp = matrix.map((row) => {
                    return row[j];
                });
                if(matrix[i][j] >= Math.max(...temp)){
                    luckyNum.push(matrix[i][j]);
                }
                break;
            }
        }
    }
    return luckyNum;
};

console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));
console.log(luckyNumbers([[7,8],[1,2]]));