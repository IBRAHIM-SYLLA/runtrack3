// Créez un button ayant comme id “button”. Créez un fichier expression.txt
// contenant votre expression favorite. Lorsqu’un utilisateur clique sur le
// bouton, à l’aide de Fetch, récupérez le contenu du fichier expression.txt,
// placez le dans un paragraphe et insérez le dans le corps de votre page.

window.addEventListener("DOMContentLoaded", (event) =>{
    let p = document.createElement('p')
    let btn = document.querySelector('button')

    btn.addEventListener('click', event => {
    fetch('expression.txt')
    .then((response) => response.text())
    .then((data) => {
        console.log(data)
        p.innerHTML = (data)
        document.body.appendChild(p)
    })
    .catch((error) => console.log(error))
})
})