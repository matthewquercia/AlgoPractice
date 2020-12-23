/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    var arr = s.split('');
    var currentDepth = 0;
    var temp = [];

    if(!arr.includes(')') || !arr.includes('(')) {
        return 0;
    }
    else {
        arr = arr.filter(c => {return (c === '(' || c === ')')});
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === '('){
                temp.push("(");
            } else {
                temp.pop();
            }
            if(temp.length > currentDepth){
                currentDepth = temp.length;
            }
        }
    }
    return currentDepth;
};

//  (()(())())

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); //3
console.log(maxDepth("(1)+((2))+(((3)))")); //3
console.log(maxDepth("1+(2*3)/(2-1)")); //1
console.log(maxDepth("1")); //0