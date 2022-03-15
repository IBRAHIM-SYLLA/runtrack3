// Créez une fonction fizzbuzz qui ne prend pas de paramètre. Dans cette
// fonction, affichez dans la console web les nombres de 1 à 151. Remplacez
// certains nombres par un mot selon les conditions suivantes :
// - Si le nombre est un multiple de 3, affichez “Fizz”.
// - Si le nombre est un multiple de 5, affichez “Buzz”.
// - Si le nombre est un multiple de 3 et de 5, affichez “FizzBuzz”.


function fizzbuzz(){
    for (var i = 1; i < 151; i++){
        // console.log(i);

        if(i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz');
        }
        else if(i % 5 == 0){
            console.log('Buzz')
        }
        else if (i % 3 == 0){
            console.log('Fizz');
        }
        else{
            console.log(i);
        }
    }
}
console.log(fizzbuzz());

