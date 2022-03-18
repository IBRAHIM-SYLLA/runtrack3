
window.addEventListener("DOMContentLoaded", (event) =>{

    let input = document.querySelectorAll('input');
    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');

console.log(input);
    function champs(nom, paragraphe){
        if(nom.value.length === 0){
            paragraphe.innerHTML = 'veuillez renseignez ce champs';
            paragraphe.style.color = 'red';
        }
        else if(nom.value.length < 3){
             paragraphe.innerHTML = 'login trop court !';
        }
        else if(nom.value.length > 3){
            paragraphe.innerHTML = '';
        }
    }

    // function()
    nom.addEventListener('keyup', function(){
        // console.log(this.value);
        // console.log(this.value.length )
        champs(nom, p[0]);
        // console.log(this.p);
    })
    // console.log(p)
    prenom.addEventListener('keyup', function(){
        // console.log(this.value);
        // console.log(this.value.length )
        champs(prenom, p[1]);
        // console.log(this.p);
    })

    // nom.addEventListener('click')
})