const superbowlWin = record => {
  const winner = record.find(r => {
    return r.result === "W";
  });

  if (winner) {
    return winner.year;
  }
};
