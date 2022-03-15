document.addEventListener('DOMContentLoaded',(event) =>{
    var string = document.getElementById("citation");
    var btn = document.getElementById("button");

    btn.addEventListener("click",function citation() {
        console.log(string)
    })

})
