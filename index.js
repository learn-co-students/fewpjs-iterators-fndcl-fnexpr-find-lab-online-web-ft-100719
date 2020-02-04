function superbowlWin(records) {
  let win = records.find( w => w.result === "W" )
  if (win)
    return win.year 
  else 
    return win
}
