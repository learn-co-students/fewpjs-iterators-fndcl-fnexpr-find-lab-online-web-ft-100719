const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(games) {
  let year
  games.find(function (s) {
    if (s["result"] === "W") {
      year = s["year"]
    }
  })
  return year
}