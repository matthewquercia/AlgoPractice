/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let result = 0, i = 1;
    while(i <= n){
        if(n - i >= 0){
            result++;
            n-=i;
            i++;
        }
    }
    return result;
};
