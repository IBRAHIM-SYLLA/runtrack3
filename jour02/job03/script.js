document.addEventListener('DOMContentLoaded',(event) =>{
    var str = document.getElementById("compteur");
    var btn = document.getElementById("button");
    var compteur = 0
    function updateDisplay(val) {
        str.innerHTML = val;
    }

    btn.addEventListener('click', function addone(){
        str.style.display = 'block'
        updateDisplay(++compteur);
    })

//     Créez un button ayant comme id “button”. Créez une balise <p> ayant
// comme id “compteur” et contenant “0”. Ce contenu doit évoluer
// proportionnellement au nombre d'événements click reçu par le bouton.
// Vous ne devez pas utiliser “onclick()” dans votre html. La fonction
// permettant d’effectuer la modification doit s'appeler “addone()”.
})
