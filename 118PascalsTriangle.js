/**
* @param {number} numRows
* @return {number[][]}
*/
var generate = function(numRows) {
    if(numRows === 1) return [[1]];
    if(numRows === 2) return [[1], [1, 1]];
    
    let result = [[1], [1, 1]];

    while(result.length !== numRows){
        let aboveRow = result[result.length - 1];
        let currentRow = [];

        for(let i = 0; i < aboveRow.length; i++){
            if(aboveRow[i + 1] !== undefined){
                currentRow.push(aboveRow[i] + aboveRow[i + 1]);
            }
        }
        currentRow.push(1);
        currentRow.unshift(1);

        result.push(currentRow);
    }

    return result;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]