// Créez une balise button ayant comme id “button”. En cliquant sur le
// bouton, vous devrez faire apparaître le texte “le $ est un bon élément
// monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la
// classe pour cacher cet élément. ”.
// En dessous faire un bouton qui servira à cacher tout l’élément html.

$(document).ready(function(){

    let div = $('#melanger');
    let img = $('img')
    let btn = $('#shuffle');

    btn.click(function (){
            let shuffle = div[0];
            for (let i = 0; i <= shuffle.children.length; i++) {
                shuffle.appendChild(shuffle.children[Math.random() * i | 0]);
            }

    })
})