const Player = require('./Player');

class Leaderboard {
  constructor() {
    this.leadersArray = [];
    this.leadersMap = {};
  }

  updateLeaderBoard({ name, winStatus }) {
    let player;
    if (this.doesPlayerExist(name)) {
      player = this.leadersMap[name];
      player.updateStats(winStatus);
    } else {
      player = new Player(name);
      player.updateStats(winStatus);
      this.leadersMap[name] = player;
      this.leadersArray.push(player);
    }
    this.leadersArray.sort(this.getWinningPercentage);
  }

  getLeaderBoard() {
    return this.leadersArray;
  }

  doesPlayerExist(name) {
    return !!this.leadersMap[name];
  }

  getPlayerStats(name) {
    return this.leadersMap[name].getStats();
  }

  getWinningPercentage(player, secondPlayer) {
    return secondPlayer.winPercentage - player.winPercentage;
  }
}

module.exports = Leaderboard;
