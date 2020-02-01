function superbowlWin(array) {
  let result = undefined
  array.find(function (superbowl) {
    if(superbowl.result === "W") {
      result = superbowl.year
    }
  });
  return result
}