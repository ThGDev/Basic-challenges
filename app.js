//TODO Déclarer deux variables avec comme valeur 4 et 5
//TODO Créez une autre variable contenant l'addition des deux et l'afficher.

// const quatre = 4;
// const cinq = 5;
// const addition = quatre + cinq;
// console.log(addition);

//TODO Afficher la chaine de caractère suivante en majuscule

// const team = 'avengers';
// console.log(team.toUpperCase());

//TODO afficher la première lettre de la chaine de caractère suivante

// const team = 'avengers';
// console.log(team[0]);

//TODO afficher la chaine de caractère suivante exepté la première lettre.

// const team = 'avengers';
// console.log(team.substr(1));

//TODO Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)

// const firstName = 'Tony';
// const lastName = 'Stark';
// console.log(`${firstName} ${lastName}`);

//TODO Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.

// const team = 'aveNgers';
// const majToLow = team.toLowerCase();
// console.log(majToLow);
// const firstLetterMaj = majToLow[0].toUpperCase() + majToLow.substr(1);

//=> Avengers
// console.log(firstLetterMaj);

//TODO Déclarez un tableau avec 5 villes

// const villes = ["Paris", "Marseille", "Arles", "Bordeaux", "Orléans"];
// //TODO Afficher la ville à l'indice 3
// console.log(villes[3]);
// //TODO Ajouter une ville au tableau
// villes.push("Vannes");
// console.log(villes);
// //TODO Supprimer la ville à l'indice 2
// villes.splice(2, 1);
// console.log(villes);

// Comme tu le sais sans doute, pour parcourir un tableau,
// il faut boucler sur ce tableau.
//TODO Parcours le tableau suivant afin de monter chaque
//TODO éléments au carré et afficher le tableau.

// const array1 = [2, 4, 8];

// array1.forEach((nbre) => {
//     console.log(
//         Math.pow(nbre, 2)
//         );
// });

//TODO Le tableau suivant indique les notes d'une promo lointaine !
//TODO Calculer la moyenne de cette promo et afficher le resultat

// const promo = [12, 13, 17, 3, 14, 18];
// // la fonction reduce() stocke les valeurs du tableau une par une dans la variable "accumulateur", puis les ajoutes les unes aux autres et stocke le résultat à chaque étape dans la variable "valeurActuelle"
// // j'utilise "let" car la valeur de cette variable va changer par la suite - 2 méthodes : voir lignes 75 et 78
// let sommeTotale = promo.reduce((accumulateur, valeurActuelle) => accumulateur + valeurActuelle);
// console.log(sommeTotale);
// // je stocke le nombre d'éléments de mon tableau
// const nbreElementsTableau = promo.length;
// // je divise la somme totale par le nombre d'éléments de mon tableau pour obtenir une moyenne
// const moyenne = sommeTotale/nbreElementsTableau;
// console.log(moyenne);
// // je pourrais aussi écrire la ligne du dessus comme ça :
// sommeTotale /= nbreElementsTableau;
// console.log(sommeTotale);

//TODO Déclarez une variable "age" avec la valeur de votre choix.
//TODO En utilisant les conditions 'if' et 'else' affichez :
//TODO peut voter si 'age' est supérieur ou égal à 18
//TODO ne peut pas voter si 'age' est inférieur à 18

// const age = 45;
// if(age < 18){
//     console.log("Tu es trop jeune, tu ne peux pas voter !");
// }else{
//     console.log("Tu as le bon âge pour voter !");
// }

//TODO  Afficher la date d'aujourd'hui avec javascript.
//TODO  En utilisant les conditions 'if' et 'else' affichez :
//TODO  "bonjour" si il est entre 5h du matin et 17h
//TODO  et "bonsoir" s'il est entre 17h et 5h du matin

// const dateJour = new Date();
// console.log(dateJour);
// const heure = dateJour.getHours();
// // comme je teste à 15h, pour vérifier que la condition fonctionne bien, je paramètre l'heure à 18h
// // const heure = dateJour.setHours(18);
// console.log(heure);
// if(heure > 5 && heure < 17){
//     console.log("Bonjour !");
// }else{
//     console.log("Bonsoir !");
// }

//----------------- Fonctions -------------------

//TODO Créez deux variables initialisées à 3 et 4.
//TODO Créez une fonction qui retourne l'addition de ces deux valeurs.

const add = (num1, num2) => {
    return num1 + num2
};
console.log(add(3, 4));

//TODO Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//TODO retourner la valeur i au carré et l'afficher.

const square = (number) => number*number;
console.log(square(5));
  