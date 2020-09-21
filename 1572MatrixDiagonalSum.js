/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let first = 0;
    let last = mat[0].length - 1;
    let middle = mat[0].length / 2 - 0.5;

    if(mat[0].length === 1){
        return mat[0][0];
    }

    for(let i = 0; i < mat.length; i++){
        sum += mat[i][first] + mat[i][last];
        first++;
        last--;
    }

    if(mat[0].length % 2 === 1){
        return sum -= mat[middle][middle];
    } else {
        return sum;
    }
};

console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]]));
console.log(diagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]]));
console.log(diagonalSum([[7,3,1,9],[3,4,6,9],[6,9,6,6],[9,5,8,5]]));
console.log(diagonalSum([[5]]));
console.log(diagonalSum([[7,9,8,6,3],[3,9,4,5,2],[8,1,10,4,10],[9,5,10,9,6],[7,2,4,10,8]]));

