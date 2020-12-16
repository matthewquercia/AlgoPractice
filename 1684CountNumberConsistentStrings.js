/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let letters = allowed.split('');
    let count = 0, flag = false;

    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(!letters.includes(words[i][j])){
                flag = false;
                break;
            } else {
                flag = true;
            }
        }
        if(flag) count++;
    }

    return count;
};
