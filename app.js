let cellEmpty = $('.slide__9').css('grid-area');
let cellEmptyArray;
let cellVal;
let cellValArray;
let tilePositions = ['1/1/2/2', '1/2/2/3', '1/3/2/4', '2/1/3/2', '2/2/3/3', '2/3/3/4', '3/1/4/2', '3/2/4/3'];

// Random tile positions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleTiles() {
  shuffleArray(tilePositions);
  for (let i = 0; i < tilePositions.length; i++) {
    $('.slide__' + (i + 1)).css('grid-area', tilePositions[i]);
    }
}

shuffleTiles();

// Move controlls
$('.slide').children().click(function() {
  cellVal = $(this).css('grid-area');
  cellEmptyArray = cellEmpty.split(" / ").map(Number);
  cellValArray = cellVal.split(" / ").map(Number);
  move($(this));
});

// A monster condition for moving tiles
// It basicly just compares empty cell position array 
// with clicked tile position array in every direction
function move(cell) { if ((cellEmptyArray[0] === cellValArray[0] && cellEmptyArray[1] === cellValArray[1] + 1 && cellEmptyArray[2] === cellValArray[2] && cellEmptyArray[3] === cellValArray[3] + 1) || (cellEmptyArray[0] === cellValArray[0] && cellEmptyArray[1] === cellValArray[1] - 1 && cellEmptyArray[2] === cellValArray[2] && cellEmptyArray[3] === cellValArray[3] - 1) || (cellEmptyArray[0] === cellValArray[0] + 1 && cellEmptyArray[1] === cellValArray[1] && cellEmptyArray[2] === cellValArray[2] + 1 && cellEmptyArray[3] === cellValArray[3]) || (cellEmptyArray[0] === cellValArray[0] - 1 && cellEmptyArray[1] === cellValArray[1] && cellEmptyArray[2] === cellValArray[2] - 1 && cellEmptyArray[3] === cellValArray[3])) {
  cell.css('grid-area', cellEmpty);
  $('.slide__9').css('grid-area', cellVal);
  cellEmpty = cellVal;
  }
}