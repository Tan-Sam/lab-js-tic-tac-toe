var isXsTurn = true;

function calculateTurns(char){
  return $('td').filter((i,e)=>{ return e.textContent === char}).length;
}

function xTurns(){
  return calculateTurns('X');
}

function oTurns(){
  return calculateTurns('O');
}

function noOfturnsLeft(){
  return calculateTurns('');
}

function threeTurnsReached(){
  return xTurns() === 3 ||
         oTurns() === 3;
}

var winnerChar = null;
// $('td').eq(4).data().num
function horizontalScan(){
  var winFound = false;
  for (var i = 0; i < 3; i++) {
    var j = i * 3;
    if ($('td').eq(j).text() === '') {
      continue;
    }

    var cell_1_char = $('td').eq(j).text();
    var cell_2_char = $('td').eq(j+1).text();
    var cell_3_char = $('td').eq(j+2).text();

    winFound = (cell_1_char === cell_2_char) &&
               (cell_2_char === cell_3_char);

     if (winFound) {
       winnerChar = cell_1_char;
       return true;
     }
  }

  return winFound;
}

function verticalScan() {
  var winFound = false;
  for (var i = 0; i < 3; i++) {
    if ($('td').eq(i).text() === '') {
      continue; // prevent matching of 3 empty ''s.
    }

    var cell_1_char = $('td').eq(i).text();
    var cell_2_char = $('td').eq(i+3).text();
    var cell_3_char = $('td').eq(i+6).text();

    winFound = (cell_1_char === cell_2_char) &&
               (cell_2_char === cell_3_char);

     if (winFound) {
       winnerChar = cell_1_char;
       return true;
     }
  }

  return winFound;
}

const diagonalArrays = [
  [0,4,8],
  [2,4,6],
];

function diagonalScan() {
  var winFound = false;
  diagonalArrays.forEach((currVal, ind, arr)=>{
        if ($('td').eq(currVal[0]).text() !== '') {

          var cell_1_char = $('td').eq(currVal[0]).text();
          var cell_2_char = $('td').eq(currVal[1]).text();
          var cell_3_char = $('td').eq(currVal[2]).text();

          winFound = (cell_1_char === cell_2_char) &&
                     (cell_2_char === cell_3_char);

          if (winFound) {
            winnerChar = cell_1_char;
            return false; // breakOut of forEach.
          }
        }
  });
  return winFound;
}

function isCellFilled(e){
  return (e.target.textContent !== '');
}

function tickClicked(event){
  if (isCellFilled(event)) { // ignore marked cells.
      return;
  }
  markCell(event);

  if (threeTurnsReached()) {
    if (hasPlayerWon()) {
      alert('Player ' + winnerChar + " has won!");
    }
    else if (areTurnsCompleted()) {
      alert('Turns exhausted. Reset game.');
    }
  }

}

const xStyle = {color:'red'};
const oStyle = {color:'green', 'font-weight':'bold',};

const xPlayersTurn = 'It is X\'s turn';
const oPlayersTurn = 'It is O\'s turn';

const xChar = 'X';
const oChar = 'O';
var whichPlayers_turnLabel = $('.playerTurn');

//  mark player cells
function markCell(event){

  var targetCell = $(event.target);

  if (isXsTurn) {
    targetCell.text(xChar).css(xStyle);
    whichPlayers_turnLabel.text(oPlayersTurn);
  }
  else {
    targetCell.text(oChar).css(oStyle);
    whichPlayers_turnLabel.text(xPlayersTurn);
  }

  isXsTurn = !isXsTurn;
}

function hasPlayerWon(){
  return horizontalScan() ||
         verticalScan() ||
         diagonalScan();
}

function resetClicked(e) {
  $('td').text('');
  isXsTurn = true;
  whichPlayers_turnLabel.text(xPlayersTurn);
}

$(document).ready(()=>{
  $('td').click(tickClicked);
  $('#reset').click(resetClicked);
});

function functionTester(){

}
