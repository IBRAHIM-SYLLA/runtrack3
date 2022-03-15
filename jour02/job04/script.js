document.addEventListener('DOMContentLoaded',(event) =>{
    var keylogger = document.getElementById("keylogger");
    var b = document.body;
    b.addEventListener('keydown', (event)=>{

        const key = event.key;

        console.log(key);

        if(keylogger.focus){
            keylogger.value = keylogger.value + key;
        }
        else{
            keylogger.value = key
        }
    })

// Créez un textarea dont l’id est “keylogger”. Chaque fois que l’utilisateur
// tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea
// (même si le focus en cours n’est pas le textarea). Si c’est le cas, la lettre
// doit être ajoutée deux fois.
})
