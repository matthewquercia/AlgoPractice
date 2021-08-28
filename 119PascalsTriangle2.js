/**
* @param {number} rowIndex
* @return {number[]}
*/
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1, 1];
    
    let result = [[1], [1, 1]];

    while(result.length - 1 !== rowIndex){
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

    return result[rowIndex];
};

console.log(getRow(1)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]