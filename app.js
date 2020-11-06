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


//TODO Créez deux variables initialisées à 3 et 4.
//TODO Créez une fonction qui retourne l'addition de ces deux valeurs.

// const add = (num1, num2) => {
//     return num1 + num2
// };
// console.log(add(3, 4));

//TODO Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//TODO retourner la valeur i au carré et l'afficher.

// const square = (number) => {
//     return number*number;
// };
// console.log(square(5));


//TODO  En utilisant la methode 'map', mettre la chaine de
//TODO  caractère en majuscule.

// const beatles = ["paul", "john", "ringo", "george"];
// const beatlesMaj = beatles.map(maj => {
//     return maj.toUpperCase();
// });
// console.log(beatlesMaj);

//TODO Créez un tableau nommé tab dont le premier
//TODO élément est -2, le deuxième 3 et le troisième 4
//TODO Créez une fonction qui soustrait chaque éléments du tableau au suivant.

// const tab = [-2, 3, 4];
// const soustrait = (tableau) => {
//     let sum = 0;  
//     tableau.forEach(nombre => {
//         sum -= nombre;
//     });  
//     return sum;
// };
// console.log(soustrait(tab));


//TODO Créez une fonction qui renvoie la somme de chaque éléments du
//TODO tableau si celui-ci est supérieur à 0.

// ELLE M'A DONNE BEAUCOUP DE MAL CELLE LA !!!!

// const array2 = [-2, 4, -5, 3, 6];

// const addPositiveNumber = (tableau) => {
//     let sum = 0;  
//     tableau.forEach(nombre => {
//         if(nombre > 0){
//             // console.log(nombre);
//             sum += nombre;
//         }else{}
//     });  
//     return sum;
// };
// console.log(addPositiveNumber(array2));

//TODO Créez une fonction qui prend un parametre 'r' et qui
//TODO renvoie le périmetre d'un cercle.

// const perimetreCercle = (r) => {
//     return 2 * Math.PI * r;
// };
// console.log(perimetreCercle(25));

//TODO Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//TODO Le reste du mot doit être en minuscule.
//TODO Le mot est "SimPloN"

// const capitalize = (word) => {
//     const majToLow = word.toLowerCase();
//     const firstLetterMaj = majToLow[0].toUpperCase() + majToLow.substr(1);
//     return firstLetterMaj;
//   };
// console.log(capitalize("SimPloN"));

//TODO Odd or Even
//TODO Créez un fonction qui prend un nombre en parametre et qui renvoie :
//TODO paire si le nombre est pair
//TODO impaire si le nombre est impair
//TODO Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.

// Vu la soluce ici : https://waytolearnx.com/2019/09/nombre-pair-ou-impair-en-javascript.html
// Mais j'ai pigé l'astuce : un nombre pair est TOUJOURS divisible par 2
// donc pour vérifier on regarde si le reste de la division par 2 (modulo -> %) = zéro (nombre pair), sinon c'est un nombre impair (reste de la division n'est PAS égal à zéro) ;-)

// const pairImpair = (nbre) => {
//     if(nbre%2 == 0){
//         return "C'est un nombre pair !"
//     }else{
//         return "C'est un nombre impair !"
//     }
// };
// console.log(pairImpair(12));

//TODO Mot inversé
//TODO créez une fonction qui prend en paramètre une chaine de caractère.
//TODO Cette fonction renvoie la chaine de caractère inversée.
//TODO ex: reverseWord('simplon') ==> 'nolpmis'
//TODO Aide : join(), split(), reverse()

// const reverseWord = (word) => {
//     const sepLettresTab = word.split("");
//     const inverseTab = sepLettresTab.reverse();
//     return inverseTab.join("");
// };
// console.log(reverseWord("Thierry"));

//TODO créez une fonction qui renvoie la somme de tableau

// const nombres = ["3", "5", "6", "2"];

// const sumNbres = (tableau) => {
//     let sum = 0;
//     tableau.forEach(nombre => {
//         sum += parseInt(nombre, 10);
//         console.log(nombre);
//     });
//     return sum;
// };
// console.log(sumNbres(nombres));