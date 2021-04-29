/**
* @param {string} sentence
* @return {boolean}
*/
var checkIfPangram = function(sentence) {
    let s = new Set();
    for(let i = 0; i < sentence.length; i++){
        s.add(sentence.charCodeAt(i));
    }
    return (s.size == 26) ? true : false;
};
