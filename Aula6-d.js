//salario > 10000 = 2%
//salario 10000 e 6000 = 4%
//salario 6000 e 3000 = 6%
//salario 3000 e 1500 = 10%
//salario < 1500 = 15%

const prompt = require("prompt-sync")();
let salario = Number(prompt("Informe o salario: "));
let salarioBase = salario;

if(salario >= 10000){
    salario = salario*1.02;
}else if(salario >= 6000){
    salario = salario*1.04;
}else if(salario >= 3000){
    salario= salario*1.06;
}else if(salario >= 1500){
    salario= salario*1.1;
}else{
    salario= salario*1.15;
}

console.log("O salario base era "+salarioBase+" apos o reajuste ficou "+salario);
