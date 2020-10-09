/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let arr = text.split(' ');
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === first && arr[i+1] === second && arr[i+2] !== undefined){
            result.push(arr[i+2]);
        }
    }
    
    return result;
};

console.log(findOcurrences("alice is a good girl she is a good student", "a", "good"));
console.log(findOcurrences("we will we will rock you", "we", "will"));

console.log(findOcurrences("ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk", "lnlqhmaohv", "ypkk"));
