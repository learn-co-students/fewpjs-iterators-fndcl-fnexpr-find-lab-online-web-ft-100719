const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let team = array.find(obj => obj.result === 'W')
  return team ? team.year : undefined
}