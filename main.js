const ROCK = document.getElementById('rock');
const PAPER = document.getElementById('paper');
const SCISSORS = document.getElementById('scissors');

let ability = 0;
let aiAbility = 0;

ROCK.addEventListener('click', choisedRock);
PAPER.addEventListener('click', choisedPaper);
SCISSORS.addEventListener('click', choisedScissors);

//0 - rock
//1 - paper
//2 - scissors

function choisedRock() {
  ability = 0;
  aiChoice();
  round(ability, aiAbility);
}

function choisedPaper() {
  ability = 1;
  aiChoice();
  round(ability, aiAbility);
}

function choisedScissors() {
  ability = 2;
  aiChoice();
  round(ability, aiAbility);
}

function aiChoice() {
  aiAbility = Math.floor(Math.random() * 3); 
}

function round(ability, aiAbility) {
  if (ability-aiAbility == 0) {
    console.log('draw');
  } else if (ability-aiAbility == 1) {
    console.log(`${ability} (player) beats ${aiAbility} (ai), 1-0`)
  } else if (ability-aiAbility == 2) {
    console.log(`${ability} (player) cant beat ${aiAbility} (ai), 0-1`);
  } else if (ability-aiAbility == -2) {
    console.log(`${ability} (player) beats ${aiAbility} (ai), 1-0`);
  } else if(ability-aiAbility == -1) {
    console.log(`${ability} (player) cant beat ${aiAbility} (ai), 0-1`);
  }
}

