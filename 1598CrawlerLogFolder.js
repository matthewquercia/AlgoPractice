/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let counter = 0;
    for(let i = 0; i < logs.length; i++){
        if(logs[i] !== "../" && logs[i] !== "./"){
            counter++;
        }
        if(logs[i] === "../" && counter > 0){
            counter--;
        }
    }
    return counter;
};

console.log(minOperations(["d1/","d2/","../","d21/","./"]));
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]));
console.log(minOperations(["d1/","../","../","../"]));

