
function superbowlWin(record) {
  let found = record.find( record => record.result === "W" )
  if (found) {
    return found.year
  }
}