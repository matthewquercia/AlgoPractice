/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let result = [];
    let flag;

    for(let i = 0; i < prices.length; i++){
        flag = false;
        for(let j = i + 1; j < prices.length; j++){
            if(prices[j] <= prices[i]){
                result.push(prices[i] - prices[j]);
                flag = true;
                break;
            }
        }
        if(!flag) result.push(prices[i]);
    }

    return result;
};

console.log(finalPrices([8,4,6,2,3]));
console.log(finalPrices([1,2,3,4,5]));
console.log(finalPrices([10,1,1,6]));