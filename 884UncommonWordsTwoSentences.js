/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const longString = B.concat(" ", A).split(" ");
    var result = [];
    var map = {};

    for(let i = 0; i < longString.length; i++){
        if(map.hasOwnProperty(longString[i])) map[longString[i]]++;
        else map[longString[i]] = 1;
    }

    for(var obj in map){
        if(map[obj] === 1){
            result.push(obj);
        }
    }

    return result;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "banana"));