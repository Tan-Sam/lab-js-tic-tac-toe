function areTurnsCompleted(){
  return $('td').filter((ind, elem, arr)=>{
    return $(elem).text() === '';
  }).length === 0;
}
