const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects) {
  const winYear = arrayOfObjects.find(obj => {
    return obj.result === 'W'
  })
  if (winYear) {
    return winYear.year
  } else {
    return undefined
  }
}