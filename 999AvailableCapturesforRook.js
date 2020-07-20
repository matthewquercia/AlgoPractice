/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let row, rowNum;
    let col;
    let flag = false, count = 0;

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === 'R'){
                row = board[i];
                rowNum = i;
                col = j;
                break;
            }
        }
    }

    for(let i = 0; i < row.length; i++){
        if(row[i] === 'p') flag = true;
        if(row[i] === 'B') flag = false;
        if(row[i] === 'R'){
            if(flag) count++;
            flag = false;
        }
        if(i > col){
            if(flag) {
                count++;
                break;
            }
            if(row[i] === 'B'){
                break;
            }
        }
    }
    
    flag = false;

    for(let i = 0; i < board.length; i++){
        if(board[i][col] === 'p') flag = true;
        if(board[i][col] === 'B') flag = false;
        if(board[i][col] === 'R'){
            if(flag) count++;
            flag = false;
        }
        if(i > rowNum){
            if(flag) {
                count++;
                break;
            }
            if(board[i][col] === 'B'){
                break;
            }
        }
    }

    return count;
};


console.log(numRookCaptures([[".",".",".",".",".",".",".","."],
                             [".",".",".","B",".",".",".","."],
                             [".",".",".","R","B",".",".","p"],
                             [".",".",".","B",".",".",".","."],
                             [".",".",".",".",".",".",".","."],
                             [".",".",".","p",".",".",".","."],
                             [".",".",".",".",".",".",".","."],
                             [".",".",".",".",".",".",".","."]]));