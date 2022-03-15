document.addEventListener('DOMContentLoaded',(event) =>{
    var string = document.querySelector("article");
    var btn = document.getElementById("button");


    btn.addEventListener("click",function showhide() {
        if(string.style.display == 'block'){
            string.style.display = 'none';
        }
        else{
            string.style.display = 'block';
        }
    })

})
