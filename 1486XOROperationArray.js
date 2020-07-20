/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    var total = start + 2 * 0;

    for(let i = 1; i < n; i++){
        total = total ^ (start + 2 * i);
    }
    
    return total;
};

console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));
console.log(xorOperation(1, 7));


