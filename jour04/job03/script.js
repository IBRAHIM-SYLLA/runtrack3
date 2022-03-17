
// Créez un formulaire permettant de trier ces données. Il doit contenir les
// champs suivant : id (input type text), nom (input type text), type (liste
// déroulante) et filtrer (input type button). Lorsque l’on clique sur “filtrer”, le
// script doit à l’aide de Fetch, récupérer le contenu du fichier et lister les
// éléments répondant aux critères sélectionnés en les affichant sur une page
// HTML.
window.addEventListener("DOMContentLoaded", (event) =>{

    let input = document.querySelectorAll("input");
    console.log(input);
    let id = input[0];
    let nom = input[1];
    let type = document.querySelector("select");

    console.log(type)
// document.addEventListener('', event => {

    fetch('pokemon.json')
    .then((responce) => responce.json())
    .then((data) => {
        // var json = data
        console.log(data)
        for (let i = 0; i < data.length; i++){
            let newoption = document.createElement('option');
            newoption.innerHTML = data[i].type
            type.append(newoption)
        }
    })
    .catch((error) => console.log(error))
// })


//     jsonValueKey().addEventListener('', event => {
//         console.log(json)
//         // return 'city'
//     })
})