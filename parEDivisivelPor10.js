//Faça um algoritmo para verificar se um número é par e divisível por 10.
const prompt = require("prompt-sync")();

let numero = Number(prompt("Informe o valor "));

if(numero%2 == 0 && numero%10 == 0){
    console.log("O numero "+numero+" é par e divisivel por 10");
}else if(numero%2 == 0){
    console.log("O numero "+numero+" é par");
}else{
    console.log("O numero "+numero+" é impar");
}