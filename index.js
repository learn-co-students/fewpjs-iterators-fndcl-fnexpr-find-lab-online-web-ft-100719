const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArr){
  let superbowlWin = objArr.find(game => game.result === "W")

  if (superbowlWin){
    return superbowlWin.year
  }
}
