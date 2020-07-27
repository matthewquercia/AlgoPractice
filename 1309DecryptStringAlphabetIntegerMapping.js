/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let str = '';
    let alphabet = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i = 0; i < s.length; i++){
        if(s[i + 2] === '#'){
            str += alphabet[parseInt((s[i] + s[i + 1]))];
            i += 2;
        } else {
            str += alphabet[parseInt(s[i])];
        }
    }
    return str;
};

console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("1326#"));