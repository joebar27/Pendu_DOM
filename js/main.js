const els = {
  score: null,
  answer: null,
  choices: null
};

// const words = [
//   'JAVASCRIPT', // words[0]
//   'STYLESHEET', // words[1]
//   'LANGUAGE' // words[2]
// ];

let choices = [];
let word = '';
let wordMapping = [];
let choicesMapping = [];
let scoreCount = 0;
let maxScore = 8;


const init = () => {
  // console.log('>> #init');

  // Attach elements
  els.score = document.querySelector('#score');
  els.answer = document.querySelector('#answer');
  els.choices = document.querySelector('#choices');

  // Pick word
  word = pickWord();
  // console.log('word', word);
  //  - create word mapping
  wordMapping = getWordMapping(word);
  console.log('wordMapping', wordMapping);
  // Generate choices
  choices = generateChoices();
  // console.log(choices);
  //  - create choices mapping
  choicesMapping = getChoicesMapping(choices);
  // console.log(choicesMapping);
  // Display word
  displayWord(wordMapping);
  // Display choices
  displayChoices(choicesMapping);
  // Display score
  // displayScore();
  // Listen events
  //    - mouse events
  els.choices.addEventListener('click', ({
    target
  }) => {
    // evt:MouseEvent evt.target => { target }
    if (target.matches('li')) {
      checkLetter(target.innerHTML);
    }
  });
  //    - keyboard events
  document.addEventListener('keydown', ({
    keyCode
  }) => {
    // evt:KeyboardEvent evt.keyCode => { keyCode }
    // console.log('keyCode', keyCode);
    const letter = String.fromCharCode(keyCode);
    // console.log('letter', letter);
    if (keyCode >= 65 && keyCode <= 90) {
      checkLetter(letter);
    }
  });
};

// verification de la lettre
//  - si elle n'est pas dans le mot: ajout de 1 au score
//  - si elle est dans le mot: afficher la letre

const checkLetter = (letter) => {
  console.log(letter);
  let isLetterInWord = false;
  let isAllLettersFound = true;
  // console.log('isLetterWord before loop', isLetterInWord);
  wordMapping.forEach((letterMapping) => {
    // console.log('letterMapping.letter', letterMapping.letter);
    if (letterMapping.letter === letter) {
      letterMapping.isVisible = true;
      isLetterInWord = true;
    }
    if (!letterMapping.isVisible) {
      isAllLettersFound = false;
    }
  });
  choicesMapping.forEach((letterMapping) => {
    if (letterMapping.letter === letter) {
      letterMapping.isChosen = true;
    }
  });
  displayChoices(choicesMapping);
  if (isLetterInWord === true) {
    displayWord(wordMapping);
  } else {
    scoreCount++;
    displayScore();
  }

  if (scoreCount === maxScore) {
    endGame();
  }
  if (isAllLettersFound) {
    winGame();
  }
  // console.log('isLetterWord after loop', isLetterInWord);
};

//  - endGame
//     - if score == max: loseGame
//     - if letter are visible: winGame
const endGame = () => {
  wordMapping.forEach(w => w.isVisible = true);
  displayWord(wordMapping);
  document.querySelector('body').style.backgroundColor = 'red';
  els.choices.innerHTML = `<h1 class="d-flex justify-content-center col-lg-12">Vous êtes mort !</h1>`;
};

const winGame = () => {
  els.choices.innerHTML = `<h1 class="d-flex justify-content-center col-lg-12">Courez!! vous êtes libre</h1>`;
}


window.addEventListener('load', () => {
  init();
});
// Same as #1
// window.onload = init;
// Same as #2
// window.addEventListener('load', init);
// Same as #3
// window.onload = () => {
//     init();
// };

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
