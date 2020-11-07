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

//* --> version HTML :

// const promo = [12, 13, 17, 3, 14, 18];
// const sommeTotale = (notes) => {
//     let sum = 0;  
//     notes.forEach(nombre => {
//         sum += nombre;
//     });  
//     return sum;
// };
// sommeTotale(promo);
// const nbreElementsTableau = promo.length;
// const moyenne = sommeTotale(promo)/nbreElementsTableau;

// document.open();
// document.write('<p></p>');
// document.close();

// document.querySelector("p").innerHTML = `Dans cette promo, les notes obtenues ont été les suivantes : ${promo}. Pour obtenir la moyenne de ces notes, on doit les additionner (Résultat = ${sommeTotale(promo)}) puis les compter (il y en a ${nbreElementsTableau}) et enfin, diviser la somme de toutes les notes par le nombre de notes, soit : ${sommeTotale(promo)} &divide; ${nbreElementsTableau} = ${Math.round(moyenne * 100)/100}`;

// const tab = [-2, 3, 4];
// const soustrait = (tableau) => {
//     let sum = 0;  
//     tableau.forEach(nombre => {
//         sum -= nombre;
//     });  
//     return sum;
// };
// console.log(soustrait(tab));

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

//* --> version HTML :

// document.open();
// document.write('<input type="text" id="age" name="age" value=""><input type="button" id="bouton" value="Vérifier" onclick="voteOrNot()"><br /><p></p>'); // on peut "verrouiller" avec un input type="number"... Mais je voulais faire une condition "else if" pour tester...
// document.close();
// const voteOrNot = () => {
//     const saisie = document.querySelector("#age").value;
//     if(saisie < 18){
//         document.querySelector("p").innerHTML = `Tu as ${saisie} ans, tu ne peux pas voter jeune padawan !`;
//     }else if(isNaN(saisie)){
//         document.querySelector("p").innerHTML = `Tu as écrit : "${saisie}", je crois que ce n'est pas un chiffre...`;
//     }
//     else{
//         document.querySelector("p").innerHTML = `Félicitations ! Du haut de tes ${saisie} ans tu peux voter !`;
//     }
    
// };

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

//* version HTML ->

// const dateJour = new Date();
// const heure = dateJour.getHours();
// const minutes = dateJour.getMinutes();
// console.log(heure);
// document.open();
// document.write('<p></p>');
// document.close();
// if(heure > 5 && heure < 17){
//     document.querySelector("p").innerHTML = `Bonjour, il est déjà ${heure}h${minutes} !`;
// }else if(heure > 17 && heure < 21){
//     document.querySelector("p").innerHTML = `Bonsoir il est ${heure}h${minutes} !`;
// }
// else{
//     document.querySelector("p").innerHTML = `Hey, il est ${heure}h${minutes}... Il serait pas un peu temps d'aller se coucher ?!`;
// }


//TODO Créez deux variables initialisées à 3 et 4.
//TODO Créez une fonction qui retourne l'addition de ces deux valeurs.

// const add = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(add(3, 4));

//* version HTML ->

// document.open();
// document.write('<input type="number" id="num1" name="num1" value="3"><span> + </span><input type="number" id="num2" name="num2" value="4"><input type="button" id="bouton" value="Calculer" onclick="add()"><br /><p></p>');
// document.close();

// const add = (
//     num1 = parseInt(document.querySelector("#num1").value, 10),
//     num2 = parseInt(document.querySelector("#num2").value, 10)) => {
//         document.querySelector("p").innerHTML =  `L'addition de ${num1} + ${num2} = ${num1 + num2}`;
// };



//TODO Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//TODO retourner la valeur i au carré et l'afficher.

// const square = (number) => {
//     return number*number;
// };
// console.log(square(5));

//* --> version HTML :

// document.open();
// document.write('<input type="number" id="nombre" name="nombre" value="0"><input type="button" id="bouton" value="Calculer" onclick="square()"><br /><p></p>');
// document.close();

// const square = (saisie = parseInt(document.querySelector("#nombre").value, 10)) => {
//     const carre = saisie*saisie;
//     document.querySelector("p").innerHTML = `Le carré de ${saisie} est : ${carre} (soit ${saisie} x ${saisie})`;
// };


//TODO  En utilisant la methode 'map', mettre la chaine de
//TODO  caractère en majuscule.

// const beatles = ["paul", "john", "ringo", "george"];
// const beatlesMaj = beatles.map(maj => {
//     return maj.toUpperCase();
// });
// console.log(beatlesMaj);

//* --> version HTML :

// const beatles = ["paul", "john", "ringo", "george"];

// document.open();
// document.write('<p></p>');
// document.close();

// const beatlesMaj = beatles.map(maj => {
//     return maj.toUpperCase();
// });

// document.querySelector("p").innerHTML = `Pour le tableau → "beatles = ["paul", "john", "ringo", "george"]", lorsque l'on passe tous les prénoms en majuscules, ça donne ça : ${beatlesMaj}`;

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

//* --> version HTML :

// const tab = [-2, 3, 4];

// document.open();
// document.write('<p></p>');
// document.close();

// const soustrait = (tableau) => {
//     let sum = 0;  
//     tableau.forEach(nombre => {
//         sum -= nombre;
//     });
//     document.querySelector("p").innerHTML = `Pour le tableau → "tab = [-2, 3, 4]", on soustrait les chiffres ${tableau} les uns aux autres et le résultat = ${sum}`;
// };
// soustrait(tab);


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

//* --> version HTML :

// const array2 = [-2, 4, -5, 3, 6];
// const listeNombres = [];

// document.open();
// document.write('<p></p>');
// document.close();

// const addPositiveNumber = (tableau) => {
//     let sum = 0;  
//     tableau.forEach(nombre => {
//         if(nombre > 0){
//             sum += nombre;
//             listeNombres.push(nombre);
//         }else{}
//     });  
//     document.querySelector("p").innerHTML = `Pour le tableau → "array2 = [-2, 4, -5, 3, 6]", on ne conserve que les chiffres > 0 (soit ${listeNombres}) et on les additionnes. Le résultat = ${sum}`;
// };
// addPositiveNumber(array2);


//TODO Créez une fonction qui prend un parametre 'r' et qui
//TODO renvoie le périmetre d'un cercle.

// const perimetreCercle = (r) => {
//     return 2 * Math.PI * r;
// };
// console.log(perimetreCercle(25));

//* --> version HTML :

// document.open();
// document.write('<input type="number" id="cercle" name="cercle" value="0"><input type="button" id="bouton" value="Calculer" onclick="perimetreCercle()"><br /><p></p>');
// document.close();

// const perimetreCercle = (r = parseInt(document.querySelector("#cercle").value, 10)) => {
//     const perimetre = 2 * Math.round(Math.PI * 100)/100 * r;
//     document.querySelector("p").innerHTML = `Le périmètre d'un cercle de ${r} de rayon = ${perimetre} (soit la formule suivante : 2 x &pi; (${Math.round(Math.PI * 100)/100}) x rayon (${r}))`;
// };

//TODO Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//TODO Le reste du mot doit être en minuscule.
//TODO Le mot est "SimPloN"

// const capitalize = (word) => {
//     const majToLow = word.toLowerCase();
//     const firstLetterMaj = majToLow[0].toUpperCase() + majToLow.substr(1);
//     return firstLetterMaj;
//   };
// console.log(capitalize("SimPloN"));

//* --> version HTML :

// document.open();
// document.write('<input type="text" id="mot" name="mot" value="SimPloN"><input type="button" id="bouton" value="Capitaliser" onclick="capitalize()"><br /><p></p>');
// document.close();

// const capitalize = (word = document.querySelector("#mot").value) => {
//     const majToLow = word.toLowerCase();
//     const firstLetterMaj = majToLow[0].toUpperCase() + majToLow.substr(1);
//     document.querySelector("p").innerHTML = `On met les lettres en minuscules puis la 1&egravere en majuscule. Vous avez saisi : "${word}" qui devient donc "${firstLetterMaj}".`;
// };
// capitalize();

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

//* --> version HTML :

// document.open();
// document.write('<input type="number" id="nombre" name="nombre" value="0"><input type="button" id="bouton" value="Vérifier" onclick="pairImpair()"><br /><p></p>');
// document.close();

// const pairImpair = (nbre = parseInt(document.querySelector("#nombre").value, 10)) => {
//     if(nbre%2 == 0){
//         document.querySelector("p").innerHTML = `${nbre} est un nombre pair ! (car si l'on divise ${nbre} par 2, le reste de la division euclidienne = ${nbre%2})`;
//     }else{
//         document.querySelector("p").innerHTML = `${nbre}  est un nombre impair ! (car si l'on divise ${nbre} par 2, le reste de la division euclidienne n'est pas égal à zéro (ici, il reste ${nbre%2}))`;
//     }
// };

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

//* --> version HTML :

// document.open();
// document.write('<input type="text" id="mot" name="mot" value=""><input type="button" id="bouton" value="Inverser" onclick="reverseWord()"><br /><p></p>');
// document.close();

// const reverseWord = (word = document.querySelector("#mot").value) => {
//     const sepLettresTab = word.split("");
//     const inverseTab = sepLettresTab.reverse();
//     document.querySelector("p").innerHTML = `En mode inversé ça donne : "${inverseTab.join("")}"`;
// };

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

//* --> version HTML :

// const nombres = ["3", "5", "6", "2"];

// document.open();
// document.write('<p></p>');
// document.close();

// const sumNbres = (tableau) => {
//     let sum = 0;
//     tableau.forEach(nombre => {
//         sum += parseInt(nombre, 10);
//     });
//     document.querySelector("p").innerHTML = `Pour le tableau → "nombres = ["3", "5", "6", "2"]", la somme des chiffres  ${nombres} = ${sum}`;
// };
// sumNbres(nombres);
