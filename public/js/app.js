import { initLeaderboard } from './leaderboard.js';
import { initPlay } from './play.js';

const initApp = function() {
  initLeaderboard();
  initPlay();
};

export { initApp };
