/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let result = [], c = 1;
    while (c <= target[target.length - 1]) {
        if (target.includes(c)) {
            result.push('Push');
        } else {
            result.push('Push', 'Pop');
        }
        c++;
    }
    return result;
};

//console.log(buildArray([1, 3], 3));
console.log(buildArray([1, 2, 3], 3));