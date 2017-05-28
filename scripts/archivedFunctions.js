// these are working functions
// which have been refactored and no longer used.

function horizontalScan() {
  var winFound = false;

  for (var row = 0; row < 3; row++) {
    var column = row * 3;

    var cell_1_char = $('td').eq(column).text();
    var cell_2_char = $('td').eq(column + 1).text();
    var cell_3_char = $('td').eq(column + 2).text();

    if (cell_1_char === '') {
      continue; //  don't bother matching. 1st cell is empty.
    }

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

  for (var column = 0; column < 3; column++) {

    var cell_1_char = $('td').eq(column).text();
    var cell_2_char = $('td').eq(column + 3).text();
    var cell_3_char = $('td').eq(column + 6).text();

    if (cell_1_char === '') {
      continue; // prevent matching of 3 empty ''s.
    }

    winFound = (cell_1_char === cell_2_char) &&
      (cell_2_char === cell_3_char);

    if (winFound) {
      winnerChar = cell_1_char;
      break; //  break for loop
    }
  }
  return winFound;
}

function genericScan_v0(scanType) {
  var winFound = false;

  var item2Index = (scanType === 'horizontal')?
                    hScan2ndItemAddIndex:
                    hScan3rdItemAddIndex;
  var item3Index = (scanType === 'vertical')?
                    vScan2ndItemAddIndex:
                    vScan3rdItemAddIndex;
  var cell_1_char;
  var cell_2_char;
  var cell_3_char;

  for (var rowOrColumn = 0; rowOrColumn < 3; rowOrColumn++) {
    var xy = rowOrColumn;

    if (scanType === 'horizontal') {
      xy *= 3;
    }
    else if (scanType === 'diagonal' &&
             rowOrColumn === 2) {
          break;
    }

    cell_1_char = $('td').eq(xy).text();
    //  prevents matching of cells with 3 '' cells.
    if (cell_1_char === '') {
      continue;
    }

    cell_2_char = $('td').eq(xy + item2Index).text();
    cell_3_char = $('td').eq(xy + item3Index).text();

    winFound = (cell_1_char === cell_2_char) &&
               (cell_2_char === cell_3_char);

    if (winFound) {
      winnerChar = cell_1_char;
      break;  //  break out of for loop.
    }
  }
  return winFound;
}

const diagonalArrays = [
  [0, 4, 8],
  [2, 4, 6],
];

function diagonalScan() {
  var winFound = false;
  var cell_1_char;
  var cell_2_char;
  var cell_3_char;

  for (var i = 0; i < diagonalArrays.length; i++) {
    cell_1_char = $('td').eq(diagonalArrays[i][0]).text();
    cell_2_char = $('td').eq(diagonalArrays[i][1]).text();
    cell_3_char = $('td').eq(diagonalArrays[i][2]).text();

    // prevent matching of 3 '' cells.
    if (cell_1_char !== '') {
      winFound = (cell_1_char === cell_2_char) &&
                 (cell_2_char === cell_3_char);

      if (winFound) {
        winnerChar = cell_1_char;
        break; // ! false breaksOut of forEach. !
      }
    }
  }
  return winFound;
}

function areTurnsCompleted(){
  return $('td').filter((ind, elem, arr)=>{
    return $(elem).text() === '';
  }).length === 0;
}
