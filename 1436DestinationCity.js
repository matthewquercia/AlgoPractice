/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    var obj = {};
    var arr = new Set();

    for(let i = 0; i < paths.length; i++){
        arr.add(paths[i][0]);
        arr.add(paths[i][1]);

        if(obj.hasOwnProperty(paths[i][0])) obj[paths[i][0]].push(paths[i][1]);
        else obj[paths[i][0]] = [paths[i][1]];
    }

    for(let element of arr){
        if(!obj.hasOwnProperty(element)){
            return element;
        }
    }
};

console.log(destCity([["B","C"],["D","B"],["C","A"]]));
console.log(destCity([["A","Z"]]));