// création du tableau des éléments HTML
const els = {
  score: null,
  answer: null,
  choices: null
};

// déclaration des différentes variables nécessaire
let choices = [];
let word = '';
let wordMapping = [];
let choicesMapping = [];
let scoreCount = 0;
let maxScore = 8;
let wordsLower = [];
let words = [];

//initialisation et execution du jeu 
const init = () => {

  // définition des elements html
  els.score = document.querySelector('#score');
  els.answer = document.querySelector('#answer');
  els.themes = document.querySelector('#themes');
  els.choices = document.querySelector('#choices');

  displayChoseThemes();

  // écoute du choix du theme
  els.themes.addEventListener('click', ({
    target
  }) => {
    if (target.matches('#tous')) {
      wordsLower = wordsListTotal;
      gameStart(wordsLower);
    } else if (target.matches('#animaux')) {
      wordsLower = wordsListAnimaux;
      gameStart(wordsLower);
    } else if (target.matches('#prenom')) {
      wordsLower = wordsListPrenom;
      gameStart(wordsLower);
    }
  });

  // écoute du choix des lettres
  //    - avec la souris
  els.choices.addEventListener('click', ({
    target
  }) => {
    if (target.matches('li')) {
      checkLetter(target.innerHTML);
    }
  });

  //    - avec le clavier
  document.addEventListener('keydown', ({
    keyCode
  }) => {
    const letter = String.fromCharCode(keyCode);
    if (keyCode >= 65 && keyCode <= 90) {
      checkLetter(letter);
    }
  });


  // verification de la lettre
  const checkLetter = (letter) => {

    let isLetterInWord = false;
    let isAllLettersFound = true;

    //  - si elle est dans le mot: afficher la letre
    wordMapping.forEach((letterMapping) => {
      if (letterMapping.letter === letter) {
        letterMapping.isVisible = true;
        isLetterInWord = true;
      }
      //  - si elle n'est pas dans le mot:
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
  };
};

window.addEventListener('load', () => {
  init();
});
