const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

if(numero1 > numero2){
    console.log("O valor "+numero1+" é maior que o "+numero2);
}

if(numero2 > numero1){
    console.log("O valor "+numero2+" é maior que o "+numero1);
}