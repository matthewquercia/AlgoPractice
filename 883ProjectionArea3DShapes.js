/**
* @param {number[][]} grid
* @return {number}
*/
var projectionArea = function(grid) {
    let xy = 0;
    let yz = [];
    let zx = 0;

    //xy
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] !== 0) xy++;
        }
    }
    
    //yz
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(yz[j] === undefined || grid[i][j] > yz[j]){
                yz[j] = grid[i][j];
            }
        }
    }

    //zx
    for(let i = 0; i < grid.length; i++){
        zx += Math.max(...grid[i]);
    }

    return xy + zx + yz.reduce((a, b) => a + b);
};