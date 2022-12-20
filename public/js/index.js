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
