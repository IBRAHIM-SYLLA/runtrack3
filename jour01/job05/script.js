// Créez une fonction “afficherjourssemaines”. Cette fonction ne prend pas de
// paramètre. Créez un tableau de strings “jourssemaines” qui contient
// l’ensemble des jours de la semaine, du Lundi au Dimanche. Ensuite à
// l’aide d’une boucle for (for!), affichez un par un ces jours.

// incrémenter avec une variable
function afficherjourssemaines(){
    var semaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    for(var i = 0; i < semaine.length; i++){
        console.log(semaine[i]);
    }

}

console.log(afficherjourssemaines());