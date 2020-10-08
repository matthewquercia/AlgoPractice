/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    var arr = [], result = [];

    for(let i = 0; i < mat.length; i++){
        var temp = mat[i].reduce((acc, curr)=>{
            if(curr === 1) acc++;
            return acc;
        });
        arr.push([i, temp]);
    }

    arr.sort((a, b)=>{
        return a[1] -b[1];
    });

    for(let i = 0; i < k; i++){
        result.push(arr[i][0]);
    }

    return result;
};

console.log(kWeakestRows([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], 3));
console.log(kWeakestRows([[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]], 2));