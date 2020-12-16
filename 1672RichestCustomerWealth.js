/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = accounts[0].reduce((a ,b) => {
        return a + b;
    });

    for(let i = 0; i < accounts.length; i++){
        let temp = accounts[i].reduce((a ,b) => {
            return a + b;
        });
        if(temp > max){
            max = temp;
        }
    }

    return max;
};