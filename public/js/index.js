let semaine = prompt("jour de la semaine")
switch(semaine) {
    case 'lundi' :
        alert('tu dois aller à MolenGeek');
        break;
    case 'mardi' : 
        alert('tu as rendez-vous chez le dentiste')
        break;
    case 'mercredi' :
        alert('tu as entrainement de foot')
    default : 
        alert("tu n'as rien faire faire frère casse pas la tête")
}
let météo = prompt("avis météo")
switch(météo) {
    case 'il pleut' :
        alert('prends un parapluie');
        break;
    case 'il fait chaud' : 
        alert('met un t-shirt')
        break;
    case 'il fait froid' :
        alert('mets une veste')
    default : 
        alert("réfléchis un peu nan")
}
let valeur = +prompt("Entrez une valeur :")
switch(true) {
    case valeur % 2 == 0: 
        alert('ce nombre est un mutiple de 2')
        break;
    default : 
        alert ('ce nombre est pas multiple de 2')
    
}


let nbr1 = prompt("Entrez le premier nombre :");
let operateur = prompt("Entrez l'opérateur (+, -, *, /) :");
let nbr2 = prompt("Entrez le deuxième nombre :");
let resultat

switch(operateur) {
case "+":
    resultat = nbr1 + nbr2;
    break;
case "-":
    resultat = nbr1 - nbr2;
    break;
case "*":
    resultat = nbr1 * nbr2;
    break;
case "/":
    resultat = nbr1 / nbr2;
    break;
 default:
    console.log("inconnu");
}
alert(resultat)

