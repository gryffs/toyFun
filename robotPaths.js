/*
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner.
The robot can move either up, down, left, or right, but cannot visit the same spot twice.
How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of up to 6 rows/columns.  You are given the makeBoard function to use.
*/
function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}

function robotPaths (n) {
  let paths = 0;
  let board = makeBoard(n);
  
  (function roboWalker(y, x) {
    if(y === n - 1 && x === n - 1) {
      paths++; // we find a path if we make it to
      return;  // the opposite corner ie, 3 x 3 = (2, 2)
    }          // 4 x 4 = (3, 3)
    if(y < 0 || y >= n || x < 0 || x >= n) {
      return;  //outside the graph
    }
    if(board.hasBeenVisited(y, x)) {
      return;  // hasBeenVisited returns boolean of graph
    } else {
      //this will recursively manipulate the board by 
      //finding possible routes, then back tracking to 
      //a point that other possible routes can be found 
      //until all possible combinations are exhausted
      board.togglePiece(y, x); //toggle sets to opposite
      roboWalker(y, x + 1); //go right
      roboWalker(y + 1, x);  //go down
      roboWalker(y, x - 1);  //go left
      roboWalker(y - 1, x);  //go up
      board.togglePiece(y, x); //toggle back to false
    }
  })(0, 0);
  return paths;
}

robotPaths(3) // => 12
robotPaths(5) // => 8512
