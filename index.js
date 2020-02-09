superbowlWin = (game) => {
  let result = game.find( game => game.result === "W" )
  return result ? result.year : undefined
}