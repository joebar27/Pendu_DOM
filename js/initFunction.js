// fonction du random
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
// fonction du choix de la liste
const displayChoseThemes = () => {
    els.themes.innerHTML = `<h2 class="d-flex justify-content-center col-lg-12">Choisissez votre themes</h2>
                        <div class="col-lg-12">
                            <ul class="d-flex flex-wrap justify-content-center align-content-center col-lg-12">
                                <li id="tous" class="d-flex col-8 justify-content-center">Tous les mots</li>
                                <li id="animaux" class="d-flex col-8 justify-content-center">Les Animaux</li>
                                <li id="prenom" class="d-flex col-8 justify-content-center">Les Prénoms</li>
                            </ul>
                        </div>`;
};

//Conversion des tableaus en majuscule
const lowerToUpper = () => {
    for (let word of listChosen){
        let toUpper = word.toLocaleUpperCase();
        words.push(toUpper);       
    }
    return words;
};

// fonction qui permet de choisir un mot de la liste au hazar
const pickWord = () => {
    const randomIndex = getRandomInt(0, words.length - 1);
    console.log(word);
    return words[randomIndex];
};

// fonction pour la création du tableau de lettre du mot rechercher
const getWordMapping = (word) => {
    const wordArr = word.split('');
    const wordMapping = wordArr.map((letter, index) => {
        let isVisible = false;
        if (index === 0 || index == wordArr.length - 1) {
            isVisible = true;
        }
        return {
            letter, 
            isVisible
        };
    });
    return wordMapping;
};

// fonction de génération du clavier de lettre
const generateChoices = () => {
    const choices = [];
    for(let index = 65; index <= 90; index++) {
        choices.push(String.fromCharCode(index));
    }
    return choices;
};

// fonction qui recupere la lettre choisi par l'utilisateur
const getChoicesMapping = (choices) => {
    const choicesMapping = choices.map((letter) => {
        return {
            letter,
            isChosen: false
        };
    });
    return choicesMapping;
};

//fonction de l'affichage de la lettre par l'utilisateur
const displayChoices = (choicesMapping) => {
    const choicesHtml = choicesMapping.map((letterMapping) => {
        if (letterMapping.isChosen === false) {
            return `<li>${letterMapping.letter}</li>`;
        } else {
            return `<li class="disabled">${letterMapping.letter}</li>`;
        }
    });
    els.choices.querySelector('ul').innerHTML = choicesHtml.join('');
};

// fonction d'affichage du score restant avant la mort
const displayScore = () => {
    // els.score.innerHTML = `${scoreCount} / ${maxScore}`;  <== version en donnée brut 
    els.score.innerHTML = `<img src="img/pendu/0${scoreCount}.png" alt="hangman" />`; // version avec image du pendu
};

// fonction de remplacement des lettres par des underscores
const displayWord = (wordMapping) => {
    const wordHtml = wordMapping.map((letterMapping) => {
        if (letterMapping.isVisible === true) {
            return `<li>${letterMapping.letter}</li>`;
        } else {
            return `<li>_</li>`;
        }
    });

    els.answer.querySelector('ul').innerHTML = wordHtml.join('');
};

// fonction d'affichage de fin de partie

// Si le score == maxscore: "tu est mort"
const endGame = () => {
    wordMapping.forEach(w => w.isVisible = true);
    displayWord(wordMapping);
    // document.querySelector('body').style.backgroundColor = 'red';
    els.choices.innerHTML = `<h1 class="d-flex justify-content-center col-lg-12 ft-color-sec">Vous êtes mort !</h1>`;
  };
  
  // si le mot est trouvé: "tu est libre"
  const winGame = () => {
    els.choices.innerHTML = `<h1 class="d-flex justify-content-center col-lg-12 ft-color-sec">Courez!! vous êtes libre</h1>`;
  }