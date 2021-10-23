//----------------------DECLARATION DES TABLEAUX DE MOT-----------------------------------

const wordsListTotal = ["stylo", "chien", "chat", "ordinateur", "verre", "chocolat", "bougie", "cahier", "anticonstitutionnellement", "Palourde", "Creux", "Faire", "Siècle", "Olive", "Comte", "Bluff", "Bronze",
  "Claustrophobie", "Amputer", "Somnambule", "Exercice", "Modifier", "Benne", "Longue", "Scientifique", "Tournesol", "Marginal", "Russie", "Esquimau", "Pouls", "Joyau", "Fondue", "Pipeline", "Pauvres", "Dent", "Fausser",
  "Analytique", "Hormones", "Dépression", "Dupliquer", "Urgence", "Concubines", "Bars", "Pieds", "Vol", "JeudiBordeaux", "Sourcils", "Oreille", "Ovale", "Beffroi", "Cintre", "Tube", "alade", "Saveur", "Boulangerie", "Swing",
  "Voler", "Pistolet", "Doublure", "Monstre", "Ventiler", "Baigner", "Pratique", "Objectifs", "Clavier", "Diamant", "Etriers", "Falsifier", "Cerceau", "Parieur", "Roues", "Coma", "Coeur", "Abdomen", "Doigt",
  "Muscle", "Fesses", "Cou", "Corps", "Visage", "Revoyer", "Content", "Afghans", "Assyrie", "Raimond", "Bateaux", "Hautain", "Moquons", "Trappes", "Tombeur", "Boutent", "Infoutu", "Nommait", "Vitesse", "Oocculus", "Lavigne",
  "Ulceres", "Huileux", "Epopees", "Venteux", "Rideaux", "Blaguer", "Frelons", "Slaloms", "Coudert", "Transfo", "Sulfate", "Remplie", "Alcalin", "Barrier", "Assagit", "Nirvana", "Larmoie", "Torride", "Lissage", "Attisee", "Etriper",
  "Sideree", "Remoise", "Tondent", "Delarue", "Actuels", "Assures", "Fanchon", "Servier", "Nasales", "Lecompte", "Veauter", "Brisees", "Saturer", "Alleges", "Dunning", "Homelie", "Quintal", "Diverse", "Reelire", "Sondier", "Renouee",
  "Collees", "Baisage", "Bidoche", "Papesse", "Surpaye", "Upvotee", "Mixture", "Informatique", "Emettre", "Cantons", "Romande", "Moraine", "Danseur", "Referme", "Fluvial", "Denient", "Spoilez", "Pretera", "Emettra", "Erignac",
  "Aauditer", "Cirages", "Notaire", "Potions", "Enrober", "Pliable", "Recaler", "Tantale", "Rosette", "Jeunent", "Eczemas", "Navires", "Derobes", "Exilant", "Annulee", "Isabeau", "Offrira", "Risquez", "Tutores", "Laurens", "Escargot",
  "Poney", "Thon", "Gorille", "Méduse", "Autruche", "Langouste", "Chien", "Crocodile", "Girafe", "Mouflon", "Oursin", "Tortue", "Mouton", "Chinchilla", "Ours", "Faucon", "Souris", "Serpent", "Chameau", "Iguane", "Oie",
  "Pie", "Cerf", "Sauterelle", "Papillon", "Sanglier", "Crabe", "Mollusque", "Colombe", "Mule", "Hippopotame", "Lion", "Corbeau", "Kangourou", "Moustique", "Perroquet", "Scarabée", "Aigle", "Faisan", "Vache", "Calmar", "Singe",
  "Koala", "Paresseux", "Cygne", "Anneau", "Noir", "Loup", "Dix", "Livre", "Sol", "Pomme", "Marguerite", "Poussin", "Jump", "Pantalon", "Montagne", "Requin", "Grand", "Films", "Vendeur", "Fiche", "Bouche", "Moto", "Sucette",
  "Loupe", "Panda", "Ventre", "Fleur", "Lait", "Professeur", "Poisson", "Marteau", "Taxi", "Tigre", "Chaussettes", "Cuisinier", "Feuilles", "Lit", "Sandwich", "Herbe", "Poire", "Couteau", "Argent", "Nez", "Malade", "Craie", "Trois",
  "Lanterne", "Automne", "Grain", "raisin", "Neige", "Nappe", "Rire", "Chat", "Casque", "Pain", "Dauphin", "Vert", "Jardin", "Chapeau", "Viande", "Quatre", "Vache", "Lune", "Verre", "Chocolat", "Poulet", "DessusCintre", "Main", "Triangle",
  "Baignoire", "Boisson"
];

var wordsListAnimaux = ["Escargot", "Poney", "Thon", "Gorille", "Voler", "Méduse", "Autruche", "Langouste", "Chien", "Crocodile", "Girafe", "Oie", "Mouflon", "Oursin", "Tortue", "Mouton", "Chinchilla", "Ours", "Faucon", "Souris",
  "Serpent", "Chameau", "Iguane", "Oie", "Pie", "Cerf", "Sauterelle", "Papillon", "Sanglier", "Crabe", "Mollusque", "Colombe", "Mule", "Hippopotame", "Lion", "Corbeau", "Kangourou", "Moustique", "Perroquet", "Scarabée", "Loup", "Aigle",
  "Faisan", "Vache", "Calmar", "Singe", "Koala", "Paresseux", "Cygne"
];

var wordsListEnfant = ["Anneau", "Noir", "Loup", "Dix", "Livre", "Sol", "Pomme", "Marguerite", "Poussin", "Jump", "Pantalon", "Montagne", "Requin", "Grand", "Films", "Vendeur", "Fiche", "Bouche", "Girafe", "Moto", "Sucette", "Loupe",
  "Panda", "Ventre", "Fleur", "Lait", "Professeur", "Poisson", "Marteau", "Taxi", "Tigre", "Chaussettes", "Cuisinier", "Feuilles", "Lit", "Sandwich", "Herbe", "Poire", "Couteau", "Argent", "Nez", "Malade", "Craie", "Trois", "Lanterne",
  "Automne", "Grain", "raisin", "Neige", "Nappe", "Rire", "Chat", "Casque", "Pain", "Dauphin", "Vert", "Jardin", "Chapeau", "Viande", "Quatre", "Vache", "Lune", "Verre", "Chocolat", "Poulet", "DessusCintre", "Main", "Triangle",
  "Baignoire", "Boisson"
];

var wordsListPrenom = ["Romain", "Axel", "Remi", "Hugo", "Laurina", "Anais", "David", "Thomas", "Paul", "Arnold", "Jules", "Lucas", "Lise", "Laura", "Jean", "Claudine", "Pascal", "Corinne", "Theo", "Pierre", "Camille", "Arthur",
  "Evan", "Clara", "Emma", "Charlotte", "Adrien", "Celia", "Eva", "Alexis", "Antoine", "Adam", "Alexandre", "Ambre", "Baptiste", "Clemence", "Enzo", "Juliette", "Lena", "Lea", "Jeanne", "Julie", "Julien", "Leo", "Matteo", "Maeva", "Mael",
  "Mathilde", "Maxime", "Louise", "Lucie", "Manon", "Gabriel", "Noemie", "Raphael", "Quentin", "Jade", "Ines", "Sarah", "Tom", "Nicolas", "Lola", "Louis", "Mathis", "Nathan", "Oceane", "Pauline", "Romane", "Zoe", "Valentin", "Ethan",
  "Kylian", "Lina", "Lisa", "Maelys", "Matheo", "Aaron", "Alicia", "Andrea", "Antonin", "Audrey", "Angele", "Anthony", "Bastien", "Adele", "Alan", "Alexia", "Amandine", "Angelina", "Aymeric", "Bryan", "Claire", "Coralie", "Elsa",
  "Agathe", "Charles", "Constance", "Elias", "Dorian", "Dylan", "Eleonore", "Elisa", "Elodie", "Fanny", "Alice", "Anna", "Apolline", "Augustin", "Candice", "Charline", "Elise", "Emilie", "Alban", "Amelie", "Aurelien"
];