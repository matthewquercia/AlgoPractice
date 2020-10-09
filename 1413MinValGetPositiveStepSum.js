/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let flag = false;
    let total = 0;
    let counter = 1

    while(!flag){
        total = counter;
        for(let i = 0; i < nums.length; i++){
            total = total + nums[i];
            // console.log(total);
            if(total < 1){
                flag = false;
                break;
            } else {
                flag = true;
            }
        }
        if(flag) return counter;
        counter++;
    }
};

console.log(minStartValue([-3,2,-3,4,2])); //5
console.log(minStartValue([1,-2,-3])); //5
console.log(minStartValue([1, 2])); //1
console.log(minStartValue([-22,-29,-21,0,-4,-26,10,-11,-14,-11]));

/*

example
5 -3 = 2
2 +2 = 4
4 -3 = 1
1 +4 = 5
5 +2 = 7

*/