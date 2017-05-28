//  mark player cells
function markCell(event) {

  var targetCell = $(event.target);

  if (isX_Turn) {
    targetCell.text(xChar).css(xStyle);
    whichPlayers_turnLabel.text(oPlayersTurn).delay(500);
  }
  else {
    targetCell.text(oChar).css(oStyle);
    whichPlayers_turnLabel.text(xPlayersTurn).delay(500);
  }

  isX_Turn = !isX_Turn;
}

function turnsExhausted() {
  return noOfturnsLeft() === 0;
}

function noOfturnsLeft() {
  return calculateTurns('');
}

function calculateTurns(char) {
  return $('td').filter((i, e) => {
    return e.textContent === char
  }).length;
}

function xTurnsTaken() {
  return calculateTurns('X');
}

function oTurnsTaken() {
  return calculateTurns('O');
}

function threeTurnsReached() {
  return xTurnsTaken() >= 3 ||
    oTurnsTaken() >= 3;
}
