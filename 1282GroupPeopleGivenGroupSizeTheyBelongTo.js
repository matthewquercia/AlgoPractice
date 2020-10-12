/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let obj = {};
    let result = [];

    for(let i = 0; i < groupSizes.length; i++){
        if(obj.hasOwnProperty(groupSizes[i])){
            obj[groupSizes[i]].push(i)
        } else {
            obj[groupSizes[i]] = [];
            obj[groupSizes[i]].push(i)
        } 
    }

    let numOfSlices;
    for(let key in obj){
        numOfSlices = obj[key].length / key;
        for(let i = 0; i < numOfSlices; i++){
            result.push(obj[key].splice(0, key));
        }
    }

    return result;
};

console.log(groupThePeople([3,3,3,3,3,1,3])); //[[5],[0,1,2],[3,4,6]]
console.log(groupThePeople([2,1,3,3,3,2])); //[[1],[0,5],[2,3,4]]