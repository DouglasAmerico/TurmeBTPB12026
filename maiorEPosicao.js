//Escreva um programa para ler 5 valores inteiros, escrever o maior deles e 
// apresentar a posição de ordem em qual ele foi digitado 
// (se ele foi digitado por primeiro ou por segundo ou...)

const prompt = require("prompt-sync")();

let a,b,c,d,e,maior,posicao;

a = Number(prompt("Informe o valor: "));
maior=a;
posicao=1;
b = Number(prompt("Informe o valor: "));
if(b > maior){
    maior=b;
    posicao=2;
}
c = Number(prompt("Informe o valor: "));
if(c > maior){
    maior=c;
    posicao=3;
}
d = Number(prompt("Informe o valor: "));
if(d > maior){
    maior=d;
    posicao=4;
}
e = Number(prompt("Informe o valor: "));
if(e > maior){
    maior=e;
    posicao=5;
}

console.log("O maior valor é: "+maior+" e a posicao que ele foi digitado é: "+posicao);
