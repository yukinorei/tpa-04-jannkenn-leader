const getSign = function(choice) {
  switch (choice) {
  case 'r':
    return 'rock';
  case 'p':
    return 'paper';
  case 's':
    return 'scissors';
  default:
    return '';
  }
};

const formatPercentage = function(decimal) {
  return `${(decimal * 100).toFixed(2)}%`;
};

export {
  getSign,
  formatPercentage,
};
