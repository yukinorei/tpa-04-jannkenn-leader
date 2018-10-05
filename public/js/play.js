import { playMove } from './api.js';
import { getSign } from './string-utils.js';
import { updateLeaderboard } from './leaderboard.js';
import {
  createIcon,
  clearChildren,
} from './dom-utils.js';

const ui = {};
const state = {};

const renderIcon = function(choice) {
  const icon = createIcon();
  icon.classList.add('far', `fa-hand-${getSign(choice)}`);
  return icon;
};

const renderBotSelection = function(botMove) {
  clearChildren(ui.botPlayed);
  if (botMove) {
    ui.botPlayed.appendChild(renderIcon(botMove));
  }
};

const renderPlayerSelection = function() {
  Array.from(ui.playerChoices).forEach((choiceEl) => {
    choiceEl.classList.remove('selected');
  });
  ui[state.choice].classList.add('selected');
  clearChildren(ui.playerPlayed);
  ui.playerPlayed.appendChild(renderIcon(state.choice));
};

const renderStatus = function(winStatus) {
  let letter;
  let className;
  if (winStatus === undefined) {
    ui.status.innerText = '';
    ui.status.className = '';
    return;
  }
  if (winStatus === 1) {
    letter = 'W';
    className = 'win';
  }
  if (winStatus === 0) {
    letter = 'T';
    className = 'tie';
  }
  if (winStatus === -1) {
    letter = 'L';
    className = 'lose';
  }
  ui.status.innerText = letter;
  ui.status.className = className;
};

const renderError = function(message) {
  ui.error.innerText = message;
};

const sendMoveToApi = function({ name, move }) {
  return playMove({ name, move })
    .then((resp) => {
      const {
        botMove,
        winStatus,
      } = resp;
      renderBotSelection(botMove);
      renderStatus(winStatus);
      updateLeaderboard();
    })
    .catch((err) => {
      renderError('There was an error processing your request.');
      console.log('err = ', err);
    });
};

const handlePlayerChoiceClick = function(e) {
  if (e.target === this) {
    return;
  }

  const choice = e.target.getAttribute('data-choice') || e.target.parentElement.getAttribute('data-choice');
  state.choice = choice;
  renderPlayerSelection();
  renderBotSelection();
  renderStatus();
};

const handlePlayFormSubmit = function(e) {
  e.preventDefault();
  const name = ui.name.value;
  const move = state.choice;
  if (!move) {
    renderError('Please select a move');
    return;
  }
  sendMoveToApi({ name, move });
};

const initSelectors = function() {
  ui.name = document.getElementById('name');
  ui.botPlayed = document.querySelector('#bot .played');
  ui.playerPlayed = document.querySelector('#player .played');
  ui.status = document.getElementById('status');
  ui.playerChoicesContainer = document.querySelector('.player-container .choices');
  ui.playerChoices = ui.playerChoicesContainer.getElementsByClassName('choice');
  ui.error = document.querySelector('.error');
  ui.r = document.querySelector('#player .choice[data-choice="r"]');
  ui.p = document.querySelector('#player .choice[data-choice="p"]');
  ui.s = document.querySelector('#player .choice[data-choice="s"]');
};

const initListeners = function() {
  ui.playerChoicesContainer.addEventListener('click', handlePlayerChoiceClick);
  document.getElementById('play-form').addEventListener('submit', handlePlayFormSubmit);
};

const initPlay = function() {
  initSelectors();
  initListeners();
};

export {
  initPlay,
};
