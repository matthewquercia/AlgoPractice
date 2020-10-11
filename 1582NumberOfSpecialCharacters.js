/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let result = 0, numRows, numCols, idxOf1;

    for (let i = 0; i < mat.length; i++) {
        numCols = 0;
        numRows = mat[i].reduce((acc, curr) => {
            if (curr === 1) acc++;
            return acc;
        });
        if (numRows === 1) {
            idxOf1 = mat[i].indexOf(1);
            for (let j = 0; j < mat.length; j++) {
                if (mat[j][idxOf1] === 1) numCols++;
            }
        }
        if (numRows === 1 && numCols === 1) result++;
    }
    return result;
};