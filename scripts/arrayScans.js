const hScanArray = [
  [0,1,2],
  [3,4,5],
  [6,7,8]
];

const vScanArray = [
  [0,3,6],
  [1,4,7],
  [2,5,8]
];

const dScanArray = [
  [0,4,8],
  [2,4,6]
];

function scan(scanType) {
  var winFound = false;
  var cell_1_char;
  var cell_2_char;
  var cell_3_char;
  var tArray;

  switch (scanType) {
    case "horizontal": tArray = hScanArray; break;
    case "vertical":   tArray = vScanArray; break;
    case "diagonal":   tArray = dScanArray; break;
    default: break;
  }

  for (var x = 0; x < 3; x++) {
    if (scanType === 'diagonal' && x === 2) {
      break;
    }
    cell_1_char = $('td').eq(tArray[x][0]).text();
    //  prevents matching of 3 '' cells.
    if (cell_1_char === '') {
      continue;
    }
    cell_2_char = $('td').eq(tArray[x][1]).text();
    cell_3_char = $('td').eq(tArray[x][2]).text();

    winFound = (cell_1_char === cell_2_char) &&
               (cell_2_char === cell_3_char);

    if (winFound) {
      winnerChar = cell_1_char;
      break;  //  break out of for loop.
    }
  }
  return winFound;
}
