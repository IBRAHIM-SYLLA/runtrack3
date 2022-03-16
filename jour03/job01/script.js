// Créez une balise button ayant comme id “button”. En cliquant sur le
// bouton, vous devrez faire apparaître le texte “le $ est un bon élément
// monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la
// classe pour cacher cet élément. ”.
// En dessous faire un bouton qui servira à cacher tout l’élément html.

$(document).ready(function(){

    let btn = $('#button');
    let txt = "le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément."
    let p = $("<p>").text(txt).appendTo('body').hide();
    let button = $("<button>").text('disparaitre').appendTo('body').hide();

    console.log(btn);
    btn.click(function (){
        p.show();
        button.show();
        // $(document).hide(txt)
    })

    button.click(function (){
       $('body').hide();
        // $(document).hide(txt)
    })
})