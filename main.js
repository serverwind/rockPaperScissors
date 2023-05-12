const ROCK = document.getElementById('rock');
const PAPER = document.getElementById('paper');
const SCISSORS = document.getElementById('scissors');
const LOG = document.getElementById('log');
const PLAYER_SCORE_DIV = document.getElementById('player-score');
const AI_SCORE_DIV = document.getElementById('ai-score');
const PLAYER_CHOICE = document.querySelector('.player-choice');
const AI_CHOICE = document.querySelector('.ai-choice');

let ability = 0;
let aiAbility = 0;
let playerScore = 0;
let aiScore = 0;

ROCK.addEventListener('click', choisedRock);
PAPER.addEventListener('click', choisedPaper);
SCISSORS.addEventListener('click', choisedScissors);

//0 - rock
//1 - paper
//2 - scissors

function choisedRock() {
  ability = 0;
  PLAYER_CHOICE.innerHTML = '🪨';
  ai();
  round(ability, aiAbility);
}

function choisedPaper() {
  ability = 1;
  PLAYER_CHOICE.innerHTML = '📃';
  ai();
  round(ability, aiAbility);
}

function choisedScissors() {
  ability = 2;
  PLAYER_CHOICE.innerHTML = '✂';
  ai();
  round(ability, aiAbility);
}

function ai() {
  aiAbility = Math.floor(Math.random() * 3); 
  if (aiAbility == 0) {
    AI_CHOICE.innerHTML = '🪨';
  } else if (aiAbility == 1) {
    AI_CHOICE.innerHTML = '📃';
  } else {
    AI_CHOICE.innerHTML = '✂';
  }
}

function round(ability, aiAbility) {
  if (ability-aiAbility == 0) {
    LOG.innerHTML = 'Draw';
  } else if (ability-aiAbility == 1) {
    playerScore++;
    PLAYER_SCORE_DIV.innerHTML = playerScore;
    LOG.innerHTML = `${ability} (player) beats ${aiAbility} (ai)`;
  } else if (ability-aiAbility == 2) {
    aiScore++;
    AI_SCORE_DIV.innerHTML = aiScore;
    LOG.innerHTML = `${ability} (player) cant beat ${aiAbility} (ai)`;
  } else if (ability-aiAbility == -2) {
    playerScore++;
    PLAYER_SCORE_DIV.innerHTML = playerScore;
    LOG.innerHTML = `${ability} (player) beats ${aiAbility} (ai)`;
  } else if(ability-aiAbility == -1) {
    aiScore++;
    AI_SCORE_DIV.innerHTML = aiScore;
    LOG.innerHTML = `${ability} (player) cant beat ${aiAbility} (ai)`;
  }
}

