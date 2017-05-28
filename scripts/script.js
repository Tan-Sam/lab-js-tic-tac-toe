var isX_Turn = true;

var winnerChar = null;

function isCellFilled(e) {
  return (e.target.textContent !== '');
}

function tickClicked(event) {
  if (isCellFilled(event) || // ignore marked cells.
      playerWon()) { // ignore when game ends.
    return;
  }
  markCell(event);

  if (threeTurnsReached()) {
    if (playerWon()) {
      alert('Player ' + winnerChar + " has won!");
    } else if (turnsExhausted()) {
      alert('Turns exhausted. Reset game.');
    }
  }
}

const xStyle = {
  color: 'red'
};
const oStyle = {
  color: 'green',
  'font-weight': 'bold',
};

const alertAnimation = {};

const xPlayersTurn = 'X\'s turn';
const oPlayersTurn = 'O\'s turn';
const playerWonTemplate = 'Player {{who}} has won. \nReset the game to play again.';

const xChar = 'X';
const oChar = 'O';
var whichPlayers_turnLabel = $('.playerTurn');

function playerWon() {
  var result = scan('horizontal')||
               scan('vertical')||
               scan('diagonal');

  if (result && whichPlayers_turnLabel.text().includes("turn")) {
    whichPlayers_turnLabel.text(playerWonTemplate.replace(/{{who}}/, winnerChar));
  }
  return result;
}

function resetClicked(e) {
  $('td').text('');
  // isX_Turn = true;
  var nxPlayer = isX_Turn? xPlayersTurn : oPlayersTurn;
  whichPlayers_turnLabel.text(nxPlayer);
}

$(document).ready(() => {
  $('td').click(tickClicked);
  $('#reset').click(resetClicked);
});
