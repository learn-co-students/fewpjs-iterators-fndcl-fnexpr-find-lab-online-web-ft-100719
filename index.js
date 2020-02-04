const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winningGame = array.find(game => game.result === "W")
  if (winningGame) {
  return winningGame.year
  }
}
