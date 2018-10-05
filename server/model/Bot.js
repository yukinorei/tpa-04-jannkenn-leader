const {
  choices,
  winLoseCombos,
} = require('../jannkenn-helpers');

class Bot {
  constructor() {
    this.initialState = {
      botMove: null,
      playerMove: null,
    };
    this.reset();
  }

  /**
   *
   * @returns {object} obj
   * @returns {number} obj.winStatus
   *    1 = player,
   *    0 = tie,
   *    -1 = bot
   * @returns {string} obj.botMove
   */
  play(playerMove) {
    this.state.botMove = this.pickRandom();
    this.state.playerMove = playerMove;
    const winStatus = this.getWinStatus();
    const result = {
      winStatus,
      botMove: this.state.botMove,
    };
    this.reset();
    return result;
  }

  pickRandom() {
    return choices[Math.floor(Math.random() * 3)];
  }

  getWinStatus() {
    const { playerMove, botMove } = this.state;
    if (!playerMove || !botMove) {
      throw Error('Please call the .play() function before bot.getWinStatus()');
    }
    return winLoseCombos[playerMove][botMove];
  }

  reset() {
    this.state = Object.assign({}, this.initialState);
  }
}

module.exports = Bot;
