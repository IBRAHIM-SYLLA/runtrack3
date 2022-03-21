
window.addEventListener("DOMContentLoaded", (event) =>{

    let input = document.querySelectorAll('input');
    let p = document.querySelectorAll('p')
console.log(p);
    function champs(nom, paragraphe, input){
        if(nom.value.length === 0){
            paragraphe.innerHTML = 'Veuillez renseignez ce champs';
            paragraphe.style.color = 'red';
        }
        else if(nom.value.length < 3){
             paragraphe.innerHTML = ' Trop court !';
             paragraphe.style.color = 'red';
             input.style.border.color = 'red';
        }
        else if(nom.value.length > 3){
            paragraphe.innerHTML = '';
            input.style.color = 'black';
        }
    }

    // function()
    input[0].addEventListener('keyup', function(){
        // console.log(this.value);
        // console.log(this.value.length )
        champs(nom, p[0], input[0]);
        // console.log(this.p);
    })
    // console.log(p)
    input[1].addEventListener('keyup', function(){
        // console.log(this.value);
        // console.log(this.value.length )
        champs(prenom, p[1], input[1]);
        // console.log(this.p);
    })

    // nom.addEventListener('click')

    document.getElementById("inscription").addEventListener("submit", function(){
        
    })
})