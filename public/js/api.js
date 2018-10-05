const playMove = function({ name, move }) {
  return fetch('/api/play', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      move,
    }),
  })
    .then(resp => resp.json());
};

const getLeaderboard = function() {
  return fetch('/api/leaders')
    .then(resp => resp.json());
};

export {
  playMove,
  getLeaderboard,
};
