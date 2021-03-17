/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    let total = 0, count = 0;
    for (let i = 0; i < salary.length; i++) {
        if (salary[i] !== max && salary[i] !== min) {
            total += salary[i];
            count++;
        }
    }
    return (count > 1) ? total / count : total;
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));