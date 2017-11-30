var board;

$(function() {
  //https://stackoverflow.com/questions/7545641/javascript-multidimensional-array
  CreateBoard();
  Place_Char_Should_Return_True();
  CheckHorizontals2D_Should_Return_True();

})();

function CreateBoard() { // [grid][col][row].
  var column = 4;
  var row = 4;
  var grid;
  board = new Array();
  for(x=0;x<4;x++) {
    grid = new Array();
    for (i=0;i<column;i++) {
     grid[i]=new Array();
     for (j=0;j<row;j++) {
      grid[i][j]="?";
     }
    }
    board[x] = grid;
  }
}

function Clear() {
  for(a=0;a<4;a++) {
    for(b=0;b<4;b++) {
      for(c=0;c<4;c++) {
        board[a][b][c] = "?";
      }
    }
  }
}

function CheckHorizontals2D(char) {
  for(grid = 0; grid < 4; grid++) {
    for(row = 0; row < 4; row++) {
      for(col = 0; col < 4; col++) {
        if(board[grid][col][row] != char) {
          break;
        }
        else if(col == 3) { // if last col char matches
          return true;
        }
      }
    }
  }
  return false;
}

function PlaceChar(char, grid, col, row) {
  if(board[grid][col][row] === "?") {
    board[grid][col][row] = char;
    return true;
  }
  else {
    return false;
  }

}

//TESTS RIGHT here
function CheckVerticals2D_Should_Return_True() {
  
}

function Place_Char_Should_Return_True() {  // THIS WORKS
  Clear();
  //PlaceChar("X", 1, 2, 2);
  if(PlaceChar("X", 1, 2, 2) != true) {
    alert("Place_Char_Should_Return_True FAILED");
  }
}

function Place_Char_Should_Return_False() { //THIS WORKS
  Clear();
  PlaceChar("X", 1, 2, 2);
  if(PlaceChar("X", 1, 2, 2) != false) {
    alert("Place_Char_Should_Return_False FAILED");
  }
}

function CheckHorizontals2D_Should_Return_True() { // THIS WORKS
  PlaceChar("X", 0, 0, 0);
  PlaceChar("X", 0, 1, 0);
  PlaceChar("X", 0, 2, 0);
  PlaceChar("X", 0, 3, 0);
  if(CheckHorizontals2D("X") != true) {
    alert("CheckHorizontals2D_Should_Return_True FAILED 1");
  }
  Clear();
  PlaceChar("X", 1, 0, 1);
  PlaceChar("X", 1, 1, 1);
  PlaceChar("X", 1, 2, 1);
  PlaceChar("X", 1, 3, 1);
  if(CheckHorizontals2D("X") != true) {
    alert("CheckHorizontals2D_Should_Return_True FAILED 2");
  }
  Clear();
  PlaceChar("X", 2, 0, 2);
  PlaceChar("X", 2, 1, 2);
  PlaceChar("X", 2, 2, 2);
  PlaceChar("X", 2, 3, 2);
  if(CheckHorizontals2D("X") != true) {
    alert("CheckHorizontals2D_Should_Return_True FAILED 3");
  }
  Clear();
  PlaceChar("X", 3, 0, 3);
  PlaceChar("X", 3, 1, 3);
  PlaceChar("X", 3, 2, 3);
  PlaceChar("X", 3, 3, 3);
  if(CheckHorizontals2D("X") != true) {
    alert("CheckHorizontals2D_Should_Return_True FAILED 4");
  }
}
