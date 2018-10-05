const choices = ['r', 'p', 's'];
const winLoseCombos = {
  r: {
    r: 0,
    p: -1,
    s: 1,
  },
  p: {
    r: 1,
    p: 0,
    s: -1,
  },
  s: {
    r: -1,
    p: 1,
    s: 0,
  },
};

module.exports = {
  choices,
  winLoseCombos,
};
