// ##################################################################
//                           EXO 1 
// ##################################################################
//TODO Déclarer deux variables avec comme valeur 4 et 5
//TODO Créez une autre variable contenant l'addition des deux et l'afficher.

// const quatre = 4;
// const cinq = 5;
// const addition = quatre + cinq;
// console.log(addition);


// ##################################################################
//                           EXO 2 
// ##################################################################
//TODO Afficher la chaine de caractère suivante en majuscule

// const team = 'avengers';
// console.log(team.toUpperCase());


// ##################################################################
//                           EXO 3 
// ##################################################################
//TODO afficher la première lettre de la chaine de caractère suivante

// const team = 'avengers';
// console.log(team[0]);


// ##################################################################
//                           EXO 4 
// ##################################################################
//TODO afficher la chaine de caractère suivante exepté la première lettre.

// const team = 'avengers';
// console.log(team.substr(1));


// ##################################################################
//                           EXO 5 
// ##################################################################
//TODO Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)

// const firstName = 'Tony';
// const lastName = 'Stark';
// console.log(`${firstName} ${lastName}`);


// ##################################################################
//                           EXO 6 
// ##################################################################
//TODO Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.

// const team = 'aveNgers';
// const majToLow = team.toLowerCase();
// console.log(majToLow);
// const firstLetterMaj = majToLow[0].toUpperCase() + majToLow.substr(1);

//=> Avengers
// console.log(firstLetterMaj);


// ##################################################################
//                           EXO 7 
// ##################################################################
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

//* --> version HTML :

// const villes = ["Paris", "Marseille", "Arles", "Bordeaux", "Orléans"];

// document.write(`<div class="row cent"><div class="col"><h2>Afficher un &eacute;l&eacute;ments de tableau selon son indice, ajouter &amp; supprimer un &eacute;l&eacute;ment</h2><p>On considère le tableau suivants : ${villes}.</p><p>Clique sur le bouton correspondant pour afficher ce qui correspond :</p><p class="" id="result"></p></div></div><div class="row"><div class="col">`);

// for(let i = 0; i < villes.length; i++){
//     document.write(`<button class="btn btn-primary" onclick="indice(${i})">Indice ${i}</button> `);
// };

// //TODO Afficher la ville à l'indice 3
// const indice = (nbr) => {
//     if(villes[nbr] === undefined){
//         document.querySelector("#result").innerHTML = `Il n'y a plus de ville à l'indice <strong>${nbr}</strong>`;
//         document.querySelector("#result").removeAttribute("class");
//         document.querySelector("#result").classList.add("bg-info");
//     }else{
//     document.querySelector("#result").innerHTML = `L'&eacute;l&eacute;ment &agrave; l'indice <strong>${nbr}</strong> est : <strong>${villes[nbr]}</strong>`;
//     document.querySelector("#result").removeAttribute("class");
//     document.querySelector("#result").classList.add("bg-success");
//     };
// };
// //TODO Ajouter une ville au tableau
// document.write(`</div></div><div class="row cent"><div class="col"><h3>Ajoute une ville au tableau</h3><p>Saisi ici un nom de ville :</p><div class="row"><div class="col"><input class="form-control" type="text" id="ville" name="ville" value=""></div><div class="col"><button class="btn btn-primary" onclick="add()"><i class="fas fa-plus"></i></button></div></div></div></div><div class="row"><div class="col">`);
// const add = (nomVille = document.querySelector("#ville").value) => {
//     if(nomVille === ""){
//         document.querySelector("#result").innerHTML = `Il faut saisir quelque chose !`;
//         document.querySelector("#result").removeAttribute("class");
//         document.querySelector("#result").classList.add("bg-warning");
//     }else{
//     villes.push(nomVille);
//     document.querySelector("#result").innerHTML = `Le tableau contient maintenant une nouvelle ville (<strong>${nomVille}</strong>) et ressemble donc maintenant à ça : <strong>${villes}</strong>`;
//     document.querySelector("#result").removeAttribute("class");
//     document.querySelector("#result").classList.add("bg-success");
//     };
// };
// //TODO Supprimer la ville à l'indice 2

// document.write(`<div class="row cent"><div class="col"><h3>Enlève une ville au tableau</h3><p>Saisi ici son indice :</p><div class="row"><div class="col"><input class="form-control" type="number" id="indice" name="indice" value=""></div><div class="col"><button class="btn btn-primary" onclick="enleve()"><i class="fas fa-minus"></i></button></div><div class="row cent"><div class="col"><p><small>Aide : </small></p></div></div></div></div></div>`);
// const enleve = (indiceVille = document.querySelector("#indice").value) => {
//     if(indiceVille === ""){
//         document.querySelector("#result").innerHTML = `Il faut saisir quelque chose !`;
//         document.querySelector("#result").removeAttribute("class");
//         document.querySelector("#result").classList.add("bg-warning");
//     }else{
//     villes.splice(indiceVille, 1);
//     document.querySelector("#result").innerHTML = `Le tableau contient maintenant une ville en moins et ressemble donc maintenant à ça : <strong>${villes}</strong>`;
//     document.querySelector("#result").removeAttribute("class");
//     document.querySelector("#result").classList.add("bg-success");
//     let resultats = document.querySelector("small");
//     for(let i = 0; i < villes.length; i++){
//         resultats.insertAdjacentHTML('beforeend', `[${villes[i]} > Indice ${i}] `);
//     };
//     }
// };


// ##################################################################
//                           EXO 8 
// ##################################################################
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

//* --> version HTML :

// const array1 = [2, 4, 8];

// const carre = () => {
//     const array2 = [];
//     array1.forEach((nbre) => {
//         array2.push(Math.pow(nbre, 2));
//     });
//     document.querySelector("#result").innerHTML = `${array1} deviennent => ${array2}`;
// };
// document.querySelector("#contenu").innerHTML = `<h2>Calcul du carr&eacute; d'&eacute;l&eacute;ments de tableau</h2><p>On considère les chiffres suivants : ${array1}. Clique sur le bouton pour les mettre au carré</p><button id="bouton" class="btn btn-primary" onclick="carre()"><i class="fas fa-superscript"></i></button>&nbsp;<button class="btn btn-warning" id="#refresh" onclick="location.reload()"><i class="fas fa-sync-alt"></i></button><p class="bg-success" id="result"></p>`;


// ##################################################################
//                           EXO 9 
// ##################################################################
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

// document.querySelector("#contenu").innerHTML = `<h2>Calcul de moyenne</h2><p>Dans cette promo, les notes obtenues ont été les suivantes : ${promo}.</p><p>Pour obtenir la moyenne de ces notes, on doit les additionner (Résultat = ${sommeTotale(promo)}) puis les compter (il y en a ${nbreElementsTableau}) et enfin, diviser la somme de toutes les notes par le nombre de notes</p><p class="bg-success" id="result"></p>`;

// document.querySelector("#result").innerHTML = `→ Soit : ${sommeTotale(promo)} &divide; ${nbreElementsTableau} = ${Math.round(moyenne * 100)/100}`;


// ##################################################################
//                           EXO 10 
// ##################################################################
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

// document.querySelector("#contenu").innerHTML = '<h2>Est-ce que tu peux voter ?</h2><p>Saisi ton âge pour voir</p><div class="row"><div class="col"><input class="form-control" type="text" id="age" name="age"></div><div class="col"><button id="bouton" class="btn btn-primary" onclick="voteOrNot()">Vérifier</button></div></div><br /><p class="bg-success" id="result"></p>'; // on peut "verrouiller" avec un input type="number"... Mais je voulais faire une condition "else if" pour tester...

// const voteOrNot = (saisie = document.querySelector("#age").value) => {
//     if(saisie !== "" && saisie > 0 && saisie < 18){
//         document.querySelector("#result").innerHTML = `Tu as ${saisie} ans, tu ne peux pas voter jeune padawan !`;
//         document.querySelector("#result").removeAttribute("class");
//         document.querySelector("#result").classList.add("bg-info");
//     }else if(isNaN(saisie)){
//         document.querySelector("#result").innerHTML = `Tu as écrit : "${saisie}", je crois que ce n'est pas un chiffre...`;
//         document.querySelector("#result").removeAttribute("class");
//         document.querySelector("#result").classList.add("bg-warning");
//     }else if(saisie === ""){
//         document.querySelector("#result").innerHTML = `Il faut saisir quelque chose !`;
//         document.querySelector("#result").removeAttribute("class");
//         document.querySelector("#result").classList.add("bg-warning");
//     }else if(saisie <= 0){
//         document.querySelector("#result").innerHTML = `Tu ne peux pas avoir "zéro" an ou un âge négatif voyons !`;
//         document.querySelector("#result").removeAttribute("class");
//         document.querySelector("#result").classList.add("bg-warning");
//     }
//     else{
//         document.querySelector("#result").innerHTML = `Félicitations ! Du haut de tes ${saisie} ans tu peux voter !`;
//         document.querySelector("#result").removeAttribute("class");
//         document.querySelector("#result").classList.add("bg-success");
//     }
    
// };


// ##################################################################
//                           EXO 11 
// ##################################################################
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
// // si la valeur de getMinutes() est inférieure à 10, alors ajoute moi un "0" devant, sinon, ne met rien.
// // condition "if" en ligne
// // trouvé là : https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers
// const minutes = (dateJour.getMinutes()<10?'0':'') + dateJour.getMinutes();

// document.querySelector("#contenu").innerHTML = '<h2>Message personnalis&eacute; selon l\'heure</h2><p></p><p id="result"></p>';

// if(heure >= 5 && heure < 17){
//     document.querySelector("p").innerHTML = `Bonjour, il est déjà ${heure}h${minutes} !`;
//     if(heure >= 12 && heure <= 14){
//         document.querySelector("#result").innerHTML = ` Il faut songer à manger !`;
//     }
// }else if(heure >= 17 && heure <= 21){
//     document.querySelector("p").innerHTML = `Bonsoir il est ${heure}h${minutes} !`;
// }
// else{
//     document.querySelector("p").innerHTML = `Hey, il est ${heure}h${minutes}... Il serait pas un peu temps d'aller se coucher ?!`;
// }


// ##################################################################
//                           EXO 12 
// ##################################################################
//TODO Créez deux variables initialisées à 3 et 4.
//TODO Créez une fonction qui retourne l'addition de ces deux valeurs.

// const add = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(add(3, 4));

//* version HTML ->

// document.querySelector("#contenu").innerHTML = '<h2>Additionne 2 nombres</h2><p>Saisi 2 nombres pour les additionner</p><div class="row"><div class="col"><input class="form-control" type="number" id="num1" name="num1" value="3"></div><div class="col-md-auto"><span><i class="fas fa-plus"></i></span></div><div class="col"><input class="form-control" type="number" id="num2" name="num2" value="4"></div><div class="col"><button id="bouton" class="btn btn-primary" onclick="add()"><i class="fas fa-calculator"></i></button></div></div><br /><p class="bg-success" id="result"></p>';

// const add = (
//     num1 = parseInt(document.querySelector("#num1").value, 10),
//     num2 = parseInt(document.querySelector("#num2").value, 10)) => {
//         document.querySelector("#result").innerHTML =  `L'addition de ${num1} + ${num2} = ${num1 + num2}`;
// };


// ##################################################################
//                           EXO 13 
// ##################################################################
//TODO Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//TODO retourner la valeur i au carré et l'afficher.

// const square = (number) => {
//     return number*number;
// };
// console.log(square(5));

//* --> version HTML :

// document.querySelector("#contenu").innerHTML = '<h2>Calcule le carré d\'un nombre</h2><p>Saisi un nombre pour calculer son carré</p><div class="row"><div class="col"><input class="form-control" type="number" id="nombre" name="nombre" value="0"></div><div class="col"><button id="bouton" class="btn btn-primary" onclick="square()"><i class="fas fa-calculator"></i></button></div></div><br /><p class="bg-success" id="result"></p>';

// const square = (saisie = parseInt(document.querySelector("#nombre").value, 10)) => {
//     const carre = saisie*saisie;
//     document.querySelector("#result").innerHTML = `Le carré de ${saisie} est : ${carre} (soit ${saisie} x ${saisie})`;
// };


// ##################################################################
//                           EXO 14 
// ##################################################################
//TODO  En utilisant la methode 'map', mettre la chaine de
//TODO  caractère en majuscule.

// const beatles = ["paul", "john", "ringo", "george"];
// const beatlesMaj = beatles.map(maj => {
//     return maj.toUpperCase();
// });
// console.log(beatlesMaj);

//* --> version HTML :

// const beatles = ["paul", "john", "ringo", "george"];

// const beatlesMaj = beatles.map(maj => {
//     return maj.toUpperCase();
// });

// document.querySelector("#contenu").innerHTML = `<h2>Passage en majuscules d'&eacute;l&eacute;ments de tableau</h2><p>Voici les prénoms ${beatles}.</p><p>Lorsqu'on les passe en majuscules, ça donne ça : ${beatlesMaj}</p>`;


// ##################################################################
//                           EXO 15 
// ##################################################################
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

// const soustrait = (tableau) => {
//     let sum = 0;  
//     tableau.forEach(nombre => {
//         sum -= nombre;
//     });
//     document.querySelector("#contenu").innerHTML = `<h2>Soustraction d'&eacute;l&eacute;ments de tableau</h2><p>Nous avons ces chiffres : ${tab}.</p><p>On les soustrait les uns aux autres, dans l'ordre et le résultat = ${sum}</p>`;
// };
// soustrait(tab);


// ##################################################################
//                           EXO 16 
// ##################################################################
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

// const addPositiveNumber = (tableau) => {
//     let sum = 0;  
//     tableau.forEach(nombre => {
//         if(nombre > 0){
//             sum += nombre;
//             listeNombres.push(nombre);
//         }else{}
//     });  
//     document.querySelector("#contenu").innerHTML = `<h2>Tri &amp; addition</h2><p>Nous avons ces chiffres : ${array2}</p><p>On souhaite ne conserver que les chiffres > 0, soit ${listeNombres}, puis les additionner.</p><p>Le résultat = ${sum}</p>`;
// };
// addPositiveNumber(array2);


// ##################################################################
//                           EXO 17 
// ##################################################################
//TODO Créez une fonction qui prend un parametre 'r' et qui
//TODO renvoie le périmetre d'un cercle.

// const perimetreCercle = (r) => {
//     return 2 * Math.PI * r;
// };
// console.log(perimetreCercle(25));

//* --> version HTML :

// document.querySelector("#contenu").innerHTML = '<h2>Calcul du périmètre d\'un cercle</h2><img src="https://universites-numeriques.fr/wp-content/uploads/2020/04/image-e1587374234318.png" width="100px" /><p>Saisi un chiffre représentant le rayon d\'un cercle (peu importe l\'unité)</p><div class="row"><div class="col"><input class="form-control" type="number" id="cercle" name="cercle" value="0"></div><div class="col"><button id="bouton" class="btn btn-primary" onclick="perimetreCercle()"><i class="fas fa-calculator"></i></button></div></div><br /><p class="bg-success" id="result"></p>';

// const perimetreCercle = (r = parseInt(document.querySelector("#cercle").value, 10)) => {
//     const perimetre = 2 * Math.round(Math.PI * 100)/100 * r;
//     document.querySelector("#result").innerHTML = `Le périmètre d'un cercle de ${r} de rayon = <strong>${perimetre}</strong> soit la formule suivante : 2 x &pi; x r (où &pi; = ${Math.round(Math.PI * 100)/100} et r = ${r})`;
// };


// ##################################################################
//                           EXO 18 
// ##################################################################
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

// document.querySelector("#contenu").innerHTML = '<h2>Passe un (ou des) mot(s) en minuscules et met la 1&egrave;re lettre en majuscule</h2><p>Saisi un (ou des) mot(s) en utilisant des majuscules et des minuscules :</p><div class="row"><div class="col"><input class="form-control" type="text" id="mot" name="mot" value="SimPloN"></div><div class="col"><button id="bouton" class="btn btn-primary" onclick="capitalize()"><i class="fas fa-text-height"></i></button></div></div><br /><p class="bg-success" id="result"></p>';

// const capitalize = (word = document.querySelector("#mot").value) => {
//     const majToLow = word.toLowerCase();
//     const firstLetterMaj = majToLow[0].toUpperCase() + majToLow.substr(1);
//     document.querySelector("#result").innerHTML = `Vous avez saisi : "${word}" qui devient donc "<strong>${firstLetterMaj}</strong>".`;
// };


// ##################################################################
//                           EXO 19 
// ##################################################################
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

// document.querySelector("#contenu").innerHTML = '<h2>Nombre pair ou impair ?</h2><p>Saisi un nombre et je vais te dire s\'il est pair ou impair :</p><div class="row"><div class="col"><input class="form-control" type="number" id="nombre" name="nombre" value="0"></div><div class="col"><button id="bouton" class="btn btn-primary" onclick="pairImpair()"><i class="far fa-hand-peace"></i></button></div></div><br /><p class="bg-success" id="result"></p>';

// const pairImpair = (nbre = parseInt(document.querySelector("#nombre").value, 10)) => {
//     if(nbre%2 == 0){
//         document.querySelector("#result").innerHTML = `${nbre} est un nombre <strong>pair</strong> ! (car si l'on divise ${nbre} par 2, le reste de la division euclidienne = ${nbre%2})`;
//     }else{
//         document.querySelector("#result").innerHTML = `${nbre}  est un nombre <strong>impair</strong> ! (car si l'on divise ${nbre} par 2, le reste de la division euclidienne n'est pas égal à zéro → ici, il reste ${nbre%2})`;
//     }
// };


// ##################################################################
//                           EXO 20 
// ##################################################################
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

// document.querySelector("#contenu").innerHTML = '<h2>&Eacute;crit à l\'envert</h2><p>Saisi un ou des mot(s) puis clique sur le bouton pour renverser l\'ordre des lettres :</p><div class="row"><div class="col"><input class="form-control" type="text" id="mot" name="mot" value=""></div><div class="col"><button  class="btn btn-primary" id="bouton" onclick="reverseWord()"><i class="fas fa-undo"></i></button><br /></div></div><p class="bg-success" id="result"></p>';

// const reverseWord = (word = document.querySelector("#mot").value) => {

//     // EN VERSION HTML JE RENVERSE LES MOTS AVEC LA PROPRIETE CSS scale() POUR UN MEILLEUR RENDU VISUEL
//     // → nous sommes d'accord sur le fait que ça n'agit pas de la même manière puisque
//     // ça ne réécris pas les mots en réorganisant les lettres, mais ne fait qu'inverser la DIV
//     // → Je n'ai pas trouvé comment faire pour séparer les mots saisis en lettres
//     // puis scale() chaque lettre puis reverse() puis join() les mots avec les lettres scale() et les afficher...
    
//     document.querySelector("#result").innerHTML = `Ce que vous avez saisi de manière inversée : <div id="reverse"><strong>${word}</strong></div>`;
//     document.querySelector("#reverse").style.transform = "scale(-1, 1)";
//     document.querySelector("#reverse").style.display = "inline-block";
// };


// ##################################################################
//                           EXO 21 
// ##################################################################
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

// document.querySelector("#contenu").innerHTML = `<h2>Changement du type de donnée &amp; addition</h2><p>Nous avons ces chiffres: ${nombres} qui sont de type "${typeof nombres}".</p><p class="bg-success" id="result"></p>`;

// const sumNbres = (tableau) => {
//     let sum = 0;
//     tableau.forEach(nombre => {
//         sum += parseInt(nombre, 10);
//     });
//     document.querySelector("#result").innerHTML = `On les transforme donc en type "${typeof sum}" puis on les additionne, ce qui donne pour résultat : <strong>${sum}</strong>`;
// };
// sumNbres(nombres);
