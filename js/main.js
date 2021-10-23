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
let words = [];
let themeChosen = [];

//initialisation et execution du jeu 
const init = () => {

  // définition des elements html
  els.score = document.querySelector('#score');
  els.answer = document.querySelector('#answer');
  els.themes = document.querySelector('#themes');
  els.choices = document.querySelector('#choices');

  // affichage du choix des themes
  displayChoseThemes();
// };
  // capture du choix du theme
  choiceTheme();
  
};
// words = lowerToUpper(themeChosen);
//   console.log("animaux : ", wordsListAnimaux.length);
//   console.log("prenom : ", wordsListPrenom.length);
//   console.log("total : ", wordsListTotal.length);
//   console.log("theme : ", themeChosen.length);
//   console.log("words : ", words);

//   word = pickWord(words);
//   // création du mot en liste de lettre
//   wordMapping = getWordMapping(word);
//   // Generation du choix de lettre
//   choices = generateChoices();
//   // recupération du choix de la lettre
//   choicesMapping = getChoicesMapping(choices);
//   // affichage du mot
//   displayWord(wordMapping);
//   // affichage du clavier de lettre
//   displayChoices(choicesMapping);
//   // Display score
//   // displayScore();

//   // Listen events
//   //    - mouse events
//   els.choices.addEventListener('click', ({
//     target
//   }) => {
//     if (target.matches('li')) {
//       checkLetter(target.innerHTML);
//     }
//   });

//   //    - keyboard events
//   document.addEventListener('keydown', ({
//     keyCode
//   }) => {
//     const letter = String.fromCharCode(keyCode);
//     if (keyCode >= 65 && keyCode <= 90) {
//       checkLetter(letter);
//     }
//   });


// // verification de la lettre
// const checkLetter = (letter) => {

//   let isLetterInWord = false;
//   let isAllLettersFound = true;

//   //  - si elle est dans le mot: afficher la letre
//   wordMapping.forEach((letterMapping) => {
//     if (letterMapping.letter === letter) {
//       letterMapping.isVisible = true;
//       isLetterInWord = true;
//     }
//     //  - si elle n'est pas dans le mot:
//     if (!letterMapping.isVisible) {
//       isAllLettersFound = false;
//     }
//   });

//   choicesMapping.forEach((letterMapping) => {
//     if (letterMapping.letter === letter) {
//       letterMapping.isChosen = true;
//     }
//   });

//   displayChoices(choicesMapping);
//   if (isLetterInWord === true) {
//     displayWord(wordMapping);
//   } else {
//     scoreCount++;
//     displayScore();
//   }

//   if (scoreCount === maxScore) {
//     endGame();
//   }
//   if (isAllLettersFound) {
//     winGame();
//   }
// };

window.addEventListener('load', () => {
  init();
});
