/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var nums = n.toString().split('');
    var sum = 0;
    var product = 1;

    for(let i = 0; i < nums.length; i++){
        product *= parseInt(nums[i]);
        sum += parseInt(nums[i]); 
    }
    
    return (product - sum);
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
