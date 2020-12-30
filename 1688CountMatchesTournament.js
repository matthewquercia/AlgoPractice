/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches = 0;
    if(n === 1) return 0;
    while(n !== 2){
        if(n % 2 === 1){
            matches += (n - 1) / 2;
            n = (n - 1) / 2 + 1
        } else {
            matches += n / 2;
            n = n / 2;
        }
    }
    return matches + 1;
};